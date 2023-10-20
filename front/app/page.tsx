"use client";
import React, { useState, useEffect } from "react";
import { fetchData, predictData } from "../api/api";
import Home from "@/components/Home";
import Navbar from '@/components/Navbar';
import ClassificationTable from '@/components/ClassificationTable';
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import About from "./components/About";


interface ClassificationData {
  [key: string]: {
    precision: number;
    recall: number;
    "f1-score": number;
    support: number;
  };
}

interface Data {
  "Precisão do Modelo LightGBM": number;
  "Precisão do Conjunto de Treinamento": number;
  "Pontuação do Conjunto de Treinamento": number;
  "Pontuação do Conjunto de Teste": number;
  "Relatório de Classificação": ClassificationData;
}

const Page = () => {
  const [data, setData] = useState<Data>({
    "Precisão do Modelo LightGBM": 0,
    "Precisão do Conjunto de Treinamento": 0,
    "Pontuação do Conjunto de Treinamento": 0,
    "Pontuação do Conjunto de Teste": 0,
    "Relatório de Classificação": {},
  });
  const [nitrogen, setnitrogen] = useState(0);
  const [phosphorus, setphosphorus] = useState(0);
  const [potassium, setpotassium] = useState(0);
  const [temperature, settemperature] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [ph, setph] = useState(0);
  const [rainfall, setrainfall] = useState(0);
  const [season, setSeason] = useState("");
  const [predict, setpredict] = useState("");

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
    });
  }, []);

  const handlePredict = async () => {
    try {
      const response = await predictData(
        nitrogen,
        phosphorus,
        potassium,
        temperature,
        humidity,
        ph,
        rainfall,
        season
      );
      setpredict(response.recommended_crop_name);
      console.log(
        nitrogen,
        phosphorus,
        potassium,
        temperature,
        humidity,
        ph,
        rainfall,
        season
      );
    } catch (error) {
      console.error(error);
    }
  };

  const renderClassificationTable = (
    classificationData: ClassificationData
  ) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-50">
          <thead>
            <tr>
              <th className="px-4 py-2">Classe</th>
              <th className="px-4 py-2">Precisão</th>
              <th className="px-4 py-2">Revocação</th>
              <th className="px-4 py-2">F1-Score</th>
              <th className="px-4 py-2">Support</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(classificationData).map((className) => (
              <tr key={className}>
                <td className="border px-4 py-2 text-center">{className}</td>
                <td className="border px-4 py-2 text-center">
                  {classificationData[className].precision}
                </td>
                <td className="border px-4 py-2 text-center">
                  {classificationData[className].recall}
                </td>
                <td className="border px-4 py-2 text-center">
                  {classificationData[className]["f1-score"]}
                </td>
                <td className="border px-4 py-2 text-center">
                  {classificationData[className].support}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <div className="my-[25px]">
        <Navbar />
      </div>
      <div className="relative min-h-[100vh] flex items-center justify-center bg-beige">
        <div className="container pl-[15px] pr-[15px] m-auto bg-beige text-darkGrey">
          <Home />
          <About />
          <h1 className="text-4xl font-bold my-7 items-center justify-center flex">MVP</h1>
          <h1 className="text-2xl font-bold my-2">Resumo do Modelo</h1>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="px-4 py-2">Precisão do Modelo LightGBM</td>
                <td className="px-4 py-2">{data["Precisão do Modelo LightGBM"]}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Precisão do Conjunto de Treinamento</td>
                <td className="px-4 py-2">
                  {data["Precisão do Conjunto de Treinamento"]}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Pontuação do Conjunto de Treinamento</td>
                <td className="px-4 py-2">
                  {data["Pontuação do Conjunto de Treinamento"]}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Pontuação do Conjunto de Teste</td>
                <td className="px-4 py-2">
                  {data["Pontuação do Conjunto de Teste"]}
                </td>
              </tr>
            </tbody>
          </table>

          <h1 className="text-2xl font-bold mt-5 my-3">Relatório de Classificação</h1>
          {data["Relatório de Classificação"] &&
            renderClassificationTable(data["Relatório de Classificação"])
          }
          <div id="Product" className="mt-5 text-black">
            <input
              onChange={(event) => setnitrogen(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Nitrogênio"
            />
            <input
              onChange={(event) => setphosphorus(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Fósforo"
            />
            <input
              onChange={(event) => setpotassium(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Potácio"
            />
            <input
              onChange={(event) => settemperature(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Temperatura"
            />
            <input
              onChange={(event) => sethumidity(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Humidade"
            />
            <input
              onChange={(event) => setph(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="PH"
            />
            <input
              onChange={(event) => setrainfall(parseInt(event.target.value))}
              type="text"
              className="border p-1 max-w-full w-[215px] h-[40px] text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Chuva"
            />
          </div>
          <div className="mt-5 text-black">
            <select
              onChange={(event) => setSeason(event.target.value)}
              name="season"
              value={season}
              className="border p-2 max-w-full"
            >
              <option value="" disabled selected>Selecione</option>
              <option value="VERAO">Verão</option>
              <option value="INVERNO">Inverno</option>
            </select>
          </div>
          {predict && (
            <div className="mt-4">
              <p>Cultura Recomendada: {predict}</p>
            </div>
          )}
          <div className="mt-5 my-5 flex">
            <button className="bg-green hover:bg-lightGreen text-stone-50 font-bold py-2 px-4 rounded" onClick={handlePredict}>Obter Dados</button>
          </div>
          <Plans />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Page;
