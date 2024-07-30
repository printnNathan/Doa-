import { jwtDecode } from "jwt-decode";

const AuthService = {
  SalvarToken(token) {
    localStorage.setItem("jwt", token);
    const userData = jwtDecode(token);
    localStorage.setItem("ongId", userData.id);
  },
  PegarToken() {
    return localStorage.getItem("jwt");
  },
  PegarDadosUsuario() {
    const token = localStorage.getItem("jwt");
    if (!token) return null;

    try {
      const userData = jwtDecode(token);
      console.log(userData);
      return userData;
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      return null;
    }
  },
  Sair() {
    localStorage.removeItem("jwt");
  },
  VerificarSeUsuarioEstaLogado() {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwtDecode(token);
      const dataAtual = Date.now() / 1000; // Data atual em segundos

      if (dataAtual > decodedToken.exp) {
        localStorage.removeItem("jwt");
        return false; // Token expirado
      }

      if (!decodedToken.validado) {
        return false; // Token não validado
      }

      return true; // Token válido e usuário autenticado
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      return false; // Trate qualquer erro de decodificação de token
    }
  },
};

export default AuthService;
