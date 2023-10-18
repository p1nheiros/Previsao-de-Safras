import pandas as pd
import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Carregue o arquivo de dados
cropdf = pd.read_csv("Crop_recommendation.csv")

# Selecione os recursos desejados (4 no total)
features = ['N', 'P', 'K', 'temperature', 'humidity', 'rainfall']
X = cropdf[features]
y = cropdf['label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, shuffle=True, random_state=0)

model = lgb.LGBMClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

class InputData(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    temp_humidity_avg: float

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/infos")
def get_metrics():
    accuracy = accuracy_score(y_pred, y_test)
    training_accuracy = accuracy_score(y_train, model.predict(X_train))
    training_set_score = model.score(X_train, y_train)
    test_set_score = model.score(X_test, y_test)
    class_report = classification_report(y_test, y_pred, output_dict=True)

    metrics = {
        "LightGBM Model Accuracy": accuracy,
        "Training-set Accuracy": training_accuracy,
        "Training Set Score": training_set_score,
        "Test Set Score": test_set_score,
        "Classification Report": class_report
    }

    return metrics

@app.post("/predict/")
async def predict_data(data: InputData):
    input_data = [[
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temp_humidity_avg,
    ]]
    
    prediction = model.predict(input_data)
    
    return {"prediction": prediction[0]}
