import { Link } from 'react-router-dom';
import '../home/index.js';

export default function Index() {
    return(
        <main className="colo">
                    <div className="bora"> 
            <div className="numero">
                <p className="ecia">4</p><p className="sangue">0</p><p className="ecia">4</p>
                <h1 className="amelhor">OOOPS!</h1>
                <img class="kong" src="../../assets/image/logoHambúrguer.png"/>
            </div>
            <div>
                <h1 className="page">Pagina Não Emcontrada Erro</h1>
            </div>
            <br/><br/>
        <div>
            <Link className="botão" href="../home/index.html">Voltar</Link>
        </div>
        </div>   
    </main>
    )
}