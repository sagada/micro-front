import axios from "axios";
const url = "http://localhost:8080";
const getRandomMultiplication = () => {
  return axios.get(`${url}/multiplications/random`);
};

export { getRandomMultiplication };
