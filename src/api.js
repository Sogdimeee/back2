const API_BASE_URL = "http://13.60.13.241:8000/";
export const endpoints = {
  login: `${API_BASE_URL}/api/token/`,
  register: `${API_BASE_URL}/api/register/`,
  validateToken: `${API_BASE_URL}/api/token/verify/`,
};