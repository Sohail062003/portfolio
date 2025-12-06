// const BASE_URL = "http://localhost:4200/api/";   
const BASE_URL = import.meta.env.VITE_BASE_URL; 

export const apiInterceptor = async (url, options = {}) => {
  const token = localStorage.getItem("accessToken");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(BASE_URL + url, {
    ...options,
    headers,
  });

  // If unauthorized → logout
  if (response.status === 401) {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
  return response;
};
