import { apiInterceptor } from "../api/apiInterceptor";

class AuthService {
    
  static async login(email, password) {
    return apiInterceptor("auth/loginUser", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  static async verifytoken() {
    
    return apiInterceptor("auth/verifyToken", {
      method: "GET",
      
    })
  }

}

export default AuthService;
