import AuthService from "../services/auth.service";


export const checkToken = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;

  try {
    const res = await AuthService.verifytoken();
    if (!res || !res.status === false) {
      localStorage.removeItem("accessToken");
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    localStorage.removeItem("accessToken");
  }
};
