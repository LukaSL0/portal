import { useEffect, useState } from "react"
import Api from "../Api";

export default function Admin() {

    const [nome, setNome] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Api.get("/portal/admin");
                console.log(res.data);
                setNome(res.data.info)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h2>{nome}</h2>
        </div>
    )
}