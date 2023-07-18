import { useState } from "react"
import Api from "../Api";

export default function Admin() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("")

    const Login = async (e) => {

        e.preventDefault();

        const info = {
            loginEnviado: nome,
            senhaEnviada: senha
        }

        try {
            const res = await Api.post("/portal/admin", info, { withCredentials: true });
            console.log(res.data);
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <div>
            <form action="" onSubmit={(e) => {Login(e)}}>
                <input type="text" placeholder="Nome" onChange={(e) => {setNome(e.target.value)}} />
                <input type="text" placeholder="Senha" onChange={(e) => {setSenha(e.target.value)}} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}