
import { Link } from "react-router-dom";
import './index.scss';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    async function entrarClick() {
        try {
            const r = await axios.post('http://localhost:5000/usuario/login', {
                email: email,
                senha: senha
            });

            navigate('/admin');
        }
        catch (err) {
            if (err.response.status === 401) {

                setErro(err.response.data.erro);
            }
        }
    }


    return (
        <main className="login">
            <br />
            <h1 className="">LOGIN EMPRESARIAL</h1>
            <div className="retangulo-1">
                <br />
                <p className="titulo2"> E-MAIL EMPRESARIAL </p>

                <input className="campo" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <br /> <br />
                <p className="titulo2"> SENHA</p>

                <input className="campo" type="password" value={senha} onChange={e => setSenha(e.target.value)} />

                <br /> <br />
                <div className="geito">
                    <div>
                        <Link className="botão" to="/home">Voltar</Link>
                    </div>
                    <div>
                        <Link className="botão" to="/pendentes" onClick={entrarClick}>Próximo</Link>
                    </div>
                </div>
            </div>
            <br /><br />
        </main>
    )
}