import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:4000/graphql", // for development
  // baseURL: "/graphql", // uncomment line for production
});

export default Api;
