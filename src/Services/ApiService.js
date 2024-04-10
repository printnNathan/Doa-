import axios from "axios";
import AuthServices from "./AuthServices";

function createHeader() {
    const jwt = AuthServices.PegarToken();
    if (jwt) {
        return {
            headers: {
                Authorzition: 'Bearer ' + jwt
            }
        }
    }
}

const baseUrl = "https://locahost:7007/api"
const ApiService = {
    async get(endpoint) {
        const headers = createHeader();

        const response = await axios.get(baseUrl + endpoint, headers)
        return response;
    },

    async post(endpoint, body) {
        const headers = createHeader();

        const response = await axios.get(baseUrl + endpoint, headers);
        return response;
    }
}


export default ApiService;