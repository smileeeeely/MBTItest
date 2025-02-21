import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData);
  return data;
};

export const login = async (token) => {
  const {data} = await axios.post(`${API_URL}/login`, token);
  return data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
