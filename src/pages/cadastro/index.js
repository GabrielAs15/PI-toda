import './index.scss';
import { useState } from 'react'
import { Link } from 'react-router-dom';


export default function index() {
    const [NomeCompleto, setNomeCompleto] = useState('');
    const [TelefoneCelular, setTelefonecelular] = useState('');
    const [rua, setRua] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Complemento, setComplemento] = useState('');
    const [Residencial , setResidencial ] = useState('');
    const [Hambúrgueres , setHambúrgueres] = useState('');
    const [Bebidas, setBebidas] = useState('');
    const [Calculadora, setCalculadora] = useState('');
    const [Porções, setPorções] = useState('');
    const [Sobremesa, setSobremesa] = useState('');
    const [Resposta, setResposta] = useState('');
   
async function salvarClick(){
    try{
        const salvar = storage('cadastro salvo ').id;
        const r = await cadastrarPedido(NomeCompleto, TelefoneCelular, rua, Bairro, Complemento, Residencial, Hambúrgueres, Bebidas, Calculadora, Porções, Sobremesa, Resposta, salvar);

        alert('Pedido cadastrado')
    }
    catch{
        alert(err.message)
    }
}

return(
    <main className='tela'>
        <h1> CADASTRO </h1>
        <br/>
    
    <div>
            <div className="informaçoes">
            
            <p className='cu'> Nome Completo </p>
            
            <input className="campo" type="text" value={NomeCompleto} onChange={e => setNomeCompleto(e.target.value)}/>
            
            <br/> <br/> <br/>
            <div className='contato-1'>
            <p className="cu2">Telefone/Celular </p>
            <p className='cu1'> Rua</p> 
            </div>
            <div className='contato-2'>
            <input className="campo-2" type="text" value={TelefoneCelular} onChange={e => setTelefonecelular(e.target.value)}/>    
            <input className="campo-7" type="text" value={rua} onChange={e => setRua(e.target.value)}/>
            <br/> <br/>
            </div>
            <div className='contato-1'>
            <p className="cu2">Bairro </p>
            <p> Complemento</p>
            </div>
            <div className='contato-2'>
            <input className="campo-2" type="text" value={Bairro} onChange={e => setBairro(e.target.value)}/>
            <input className="campo-7" type="text" value={Complemento} onChange={e => setComplemento(e.target.value)}/>
            <br/> <br/>
            </div>
            <div>
            <p className='cu'>Número Residencial </p>   
            <input className="campo-4" type="text" value={Residencial} onChange={e => setResidencial(e.target.value)}/>
            <br/> <br/>
            </div>
            <div className='contato-4'>
            <p className="espaço">Hambúrgueres </p>
            <p className='espaço'> Bebidas</p>
            <p className='espaço'>Calculadora</p>
            </div>
            <div className='contato-3'>
            <textarea className="campo-3" type="text" value={Hambúrgueres} onChange={e => setHambúrgueres(e.target.value)}></textarea>

            <textarea className="campo-6" type="text" value={Bebidas} onChange={e => setBebidas(e.target.value)}></textarea>

            <textarea className="campo-5" type="text" value={Calculadora} onChange={e => setCalculadora(e.target.value)}></textarea>
            </div>
            <br/>
            <div className='contato-4'>
            <p className="espaço">Porções</p>
            <p className="espaço">Sobremesa</p> 
            <p className="espaço">Resposta</p>
            <br/>
            </div>
            <div className="contato-3">     
                <textarea className="campo-9" type="text" value={Porções} onChange={e => setPorções(e.target.value)}></textarea>
            
                <textarea className="campo-8" type="text" value={Sobremesa} onChange={e => setSobremesa(e.target.value)}></textarea>
                
                <textarea className="campo-10" type="text" value={Resposta} onChange={e => setResposta(e.target.value)}></textarea>
            </div>
        </div>
        <br/>
        <div className='contato-5'>
        <div>
        <Link className="botão" to="/login">Voltar</Link>
        </div>
        <div>
        <button className="botão" href="">Resetar</button>
        </div>
        <div>
        <button className="botão" href="" onClick={salvarClick}> Salvar </button>
        </div>
        </div>
    </div>
</main> 


)
}
