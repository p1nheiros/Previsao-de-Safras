#BIBLIOTECAS IMPORTADAS

import pandas as pd
import numpy as np
import random
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.graph_objects as go
import plotly.express as px
import lightgbm as lgb

from plotly.subplots import make_subplots
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report

colorarr = ['#0592D0','#Cd7f32', '#E97451', '#Bdb76b', '#954535', '#C2b280', '#808000','#C2b280', '#E4d008', '#9acd32', '#Eedc82', '#E4d96f',
           '#32cd32','#39ff14','#00ff7f', '#008080', '#36454f', '#F88379', '#Ff4500', '#Ffb347', '#A94064', '#E75480', '#Ffb6c1', '#E5e4e2',
           '#Faf0e6', '#8c92ac', '#Dbd7d2','#A7a6ba', '#B38b6d']
#PEGAR O ARQUIVO DE TREINO
cropdf = pd.read_csv("Crop_recommendation.csv")
cropdf.head()
cropdf.shape
cropdf.columns
crop_summary = pd.pivot_table(cropdf,index=['label'],aggfunc='mean')
crop_summary.head()
X = cropdf.drop('label', axis=1)
y = cropdf['label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, shuffle = True, random_state = 0)
model = lgb.LGBMClassifier()
model.fit(X_train, y_train)
y_pred=model.predict(X_test)

accuracy=accuracy_score(y_pred, y_test)
print('LightGBM Model accuracy score: {0:0.4f}'.format(accuracy_score(y_test, y_pred)))
y_pred_train = model.predict(X_train)
print('Training-set accuracy score: {0:0.4f}'. format(accuracy_score(y_train, y_pred_train)))
print('Training set score: {:.4f}'.format(model.score(X_train, y_train)))
print('Test set score: {:.4f}'.format(model.score(X_test, y_test)))
print(classification_report(y_test, y_pred))

#INFORMAÇÕES:
#N = NITROGENIO
#P = FOSFORO
#K = POTACIO
#TEMP = TEMPERATURA
#HUM = HUMIDADE
#PH = PH
#INDICE = INDICE DE CHUVAS

#AQUI VC COLOCA AS INFORMAÇÕES DESSES VALORES E ELE FALA QUAL É MAIS RECOMENDADA NESSE TIPO DE SOLO
#                        N   P   K  Temp      HUM   PH  INDICE
newdata=model.predict([[90, 42, 43, 26, 85, 5.5,203]])
newdata2=model.predict([[90, 42, 43, 15, 45, 5.5,88]])
print(newdata)
print(newdata2)