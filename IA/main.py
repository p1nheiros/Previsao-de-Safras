import pandas as pd
import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Importe o CORSMiddleware
from pydantic import BaseModel
from enum import Enum

app = FastAPI()

# Configuração do CORS para permitir solicitações de todos os origens
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Carregue o arquivo de dados
cropdf = pd.read_csv("Crop_recommendation.csv")

# Selecione todos os recursos necessários
features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
X = cropdf[features]
y = cropdf['label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, shuffle=True, random_state=0)

model = lgb.LGBMClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Enum para as estações
class Season(str, Enum):
    VERAO = "VERAO"
    INVERNO = "INVERNO"

class InputData(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float
    season: Season

@app.get("/")
def read_root():
    return "Rodando.."

@app.get("/infos")
def get_metrics():
    accuracy = accuracy_score(y_pred, y_test)
    training_accuracy = accuracy_score(y_train, model.predict(X_train))
    training_set_score = model.score(X_train, y_train)
    test_set_score = model.score(X_test, y_test)
    class_report = classification_report(y_test, y_pred, output_dict=True)

    metrics = {
        "Precisão do Modelo LightGBM": accuracy,
        "Precisão do Conjunto de Treinamento": training_accuracy,
        "Pontuação do Conjunto de Treinamento": training_set_score,
        "Pontuação do Conjunto de Teste": test_set_score,
        "Relatório de Classificação": class_report
    }

    return metrics

@app.post("/predict/")
async def predict_data(data: InputData):
    if data.season == Season.VERAO:
        data.temperature = 26
        data.humidity = 85
        data.rainfall = 203
    elif data.season == Season.INVERNO:
        data.temperature = 15
        data.humidity = 45
        data.rainfall = 88
    
    input_data = [[
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temperature,
        data.humidity,
        data.ph,
        data.rainfall,
    ]]
    
    prediction = model.predict(input_data)
    
    # Mapeie o número da cultura recomendada para o nome da cultura com base nos dados do CSV
    crop_mapping = {
        "maize": "Milho",
        "coffee": "Café",
        "orange": "Laranja",
        # Adicione mais mapeamentos para outras culturas aqui
    }
    
    recommended_crop_name = crop_mapping.get(prediction[0], "Cultura Desconhecida")
    
    return {"recommended_crop_name": recommended_crop_name}