import axios from "axios";
const url = "http://localhost:8000/api";
const getRandomMultiplication = () => {
  return axios.get(`${url}/multiplications/random`);
};

export { getRandomMultiplication };
