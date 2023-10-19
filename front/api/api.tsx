import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:8000",
  });


  export const fetchData = () => {
    return instance.get("/infos").then((res) => res.data);
}


export const predictData = async (  
  nitrogen: number | null,
  phosphorus: number | undefined,
  potassium: number | undefined,
  temperature: number | undefined,
  humidity: number | undefined,
  ph: number | undefined,
  rainfall: number | undefined,
  season: string | undefined,
) => {
  try {
    const response = await instance.post("/predict/", {
      nitrogen: `${nitrogen}`,
      phosphorus: `${phosphorus}`,
      potassium: `${potassium}`,
      temperature: `${temperature}`,
      humidity: `${humidity}`,
      ph: `${ph}`,
      rainfall: `${rainfall}`,
      season: `${season}`
    });

    console.log(response.data); // Exibe os dados da resposta

    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error(error);
  }
};
