import axios from "axios";

export default function Post() {
    axios.post("http://localhost:5000/portal", data)
        .then(res => {
            const dados = res.data;
            console.log(dados);
        })
        .catch(err => {
            console.log(err);
        })
} 