import { jwtDecode } from "jwt-decode";

const AuthService = {
    SalvarToken(token) {
        localStorage.setItem("jwt", token);
       // const userData = jwtDecode(token); {/*Eu que fiz essa alteralção: Nathan */}
        //localStorage.setItem("userId", userData.id); {/*Eu que fiz essa alteração: Nathan*/}
    },
    PegarToken() {
        return localStorage.getItem("jwt");
    },
    Sair() {
        return localStorage.removeItem("jwt");
    },
    VerificarSeUsuarioEstaLogado() {
        const token = localStorage.getItem("jwt");
        if (token == null) { return false }

        const dataAtual = Date.parse(new Date()) / 1000;

        const userData = jwtDecode(token);

        if (dataAtual > userData.exp) {
            localStorage.removeItem("jwt");
            return false;
        }

        return true;
    }
};

export default AuthService;
