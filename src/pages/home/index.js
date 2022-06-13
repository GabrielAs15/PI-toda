import { Link } from "react-router-dom";
import './index.scss';

export default function index(){
    return(
<main className="home">
        <nav> 
            <div className="retangolo">
                <img className="png" src='./image/logoHambúrguer.png'alt=""/>
                <Link className="botão" to="/login">Login</Link>
                <h1 className="titulo-1">ESCOLHA COM SABEDORIA</h1>
                <div className="direcao">
                    <p className="letra-2"> 
                       O nosso atendimento é feito por <br/>
                       nosso funcionarios, por favor <br/>
                       apertar no botão ao lado para <br/>
                       mais informações, sobre nosso <br/>
                       atendimento
                   </p>
                   <img className="seta" src='./image/seta-direita.png'alt=""/>  
                   <button className="botão-9" href="">Contatos</button>
                </div>
            </div>
        </nav>
        <div className="big-mãe">
                <br/><br/><br/>
                <h1 className="titulo"> Cardápio de Hambúrgueres </h1>
                <br/><br/><br/>
                <div className="hamburger">
                    <div className="tres">
                        <div className="n1">
                            <img className="borda"src='./image/n1.jpg'alt=""/>
                            <div className="numero"> N°1 </div>
                            <hr/>
                            <div> </div>
                            <div className="letra"> Mega typeburguer </div>
                            <div className="letra"> R$ 34,90 </div>
                        </div>
                        <div className="n2">
                            <img className="borda" src='./image/n2.jpg'alt=""/>
                            <div className="numero"> N°2 </div>
                            <hr/>
                            <div> </div>
                            <div className="letra"> Mega bacon </div>
                            <div className="letra"> R$ 20,00 </div>
                        </div>
                        <div className="n3">
                            <img className="borda" src='./image/n3.jpg'alt=""/>
                            <div className="numero"> N°3 </div>
                            <hr/>
                            <div className="letra"> Hambúrguer tripla 
                                <br/> carne </div>
                            <div className="letra">  R$ 27,00 </div>
                        </div>
                    </div>
                    <div className="seis">
                        <div className="n4">
                            <img className="borda" src='./image/n4.jpg'alt=""/>
                            <div className="numero"> N°4 </div>
                            <hr/>
                            <div> </div>
                            <div className="letra"> Burguer Kid </div>
                            <div className="letra"> R$ 18,00 </div>
                        </div>
                        <div className="n5">
                            <img className="borda" src='./image/n5.jpg'alt=""/>
                            <div className="numero"> N°5 </div>
                            <hr/>
                            <div> </div>
                            <div className="letra"> Burguer picanha 
                            <br/> dupla </div>
                            <div className="letra"> R$ 23,90 </div>
                        </div>
                        <div className="n6">
                            <img className="borda" src='./image/n6.jpg'alt=""/>
                            <div className="numero"> N°6 </div>
                            <hr/>
                            <div> </div>
                            <div className="letra"> Cheddar Burguer </div>
                            <div className="letra"> R$ 20,00 </div>
                        </div>
                    </div>
                    <div className="nove">
                        <div className="n7">
                            <img className="borda" src='./image/n7.jpg'alt=""/>
                            <div className="numero"> N°7 </div>
                            <hr/>
                            <div className="letra"> Burguer Cia </div>
                            <div className="letra"> R$ 25,00 </div>
                        </div>
                        <div className="n8">
                            <img className="borda" src='./image/n8.jpg'alt=""/>
                            <div className="numero"> N°8 </div>
                            <hr/>
                            <div className="letra"> Vegan Burguer </div>
                            <div className="letra"> R$ 25,00 </div>
                        </div>
                        <div className="n9">
                            <img className="borda" src='./image/n9.jpg'alt=""/>
                            <div className="numero"> N°9 </div>
                            <hr/>
                            <div className="letra"> Burguer Simple </div>
                            <div className="letra"> R$ 15,00 </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h1 className="titulo"> Cardápio de Bebidas </h1>
                <br/><br/><br/><br/><br/>
                <div className="doze">
                    <div className="n9">
                        <img className="borda" src='./image/n10.jpg'alt=""/>
                        <div className="numero"> N°10 </div>
                        <hr/>

                        <div className="letra"> Refrigerante 2L </div>
                        <div className="letra"> R$ 13,90 </div>
                    </div>
                    <div className="n10">
                        <img className="borda" src='./image/n10.jpg'alt=""/>
                        <div className="numero"> N°11 </div>
                        <hr/>

                        <div className="letra"> Refrigerante 1,5L </div>
                        <div className="letra"> R$ 10,45 </div>
                    </div>
                    <div className="n11">
                        <img className="borda" src='./image/n10.jpg'alt=""/>
                        <div className="numero"> N°12 </div>
                        <hr/>
                
                        <div className="letra"> Refrigerante 1L </div>
                        <div className="letra"> R$ 8,00 </div>
                    </div>
                </div>

                <div className="quinze">
                    <div className="n12">
                        <img className="borda" src='./image/n12.png'alt=""/>
                        <div className="numero"> N°13 </div>
                        <hr/>
            
                        <div className="letra"> Sucos Variados 1L </div>
                        <div className="letra"> R$ 10,00 </div>
                    </div>
                    <div className="n13">
                        <img className="borda" src='./image/n12.png'alt=""/>
                        <div className="numero"> N°14 </div>
                        <hr/>
            
                        <div className="letra"> Sucos Variados
                            <br/> 500ml </div>
                        <div className="letra"> R$ 7,00 </div>
                    </div>
                    <div className="n14">
                        <img className="borda" src='./image/n13.jpg'alt=""/>
                        <div className="numero"> N°15 </div>
                        <hr/>
                    
                        <div className="letra"> Budweiser <br/>
                            750ml </div>
                        <div className="letra"> R$ 11,00 </div>
                    </div>
                </div>
                <br/>
                <h1 className="titulo"> Cardápio de Porções </h1>
                <br/><br/><br/><br/><br/>
                <div className="dezoito">
                    <div className="n15">
                        <img className="borda" src='./image/n14.jpg'alt=""/>
                        <div className="numero"> N°16 </div>
                        <hr/>
            
                        <div className="letra"> Batata frita <br/> comum </div>
                        <div className="letra"> R$ 9,00 </div>
                    </div>
                    <div className="n16">
                        <img className="borda" src='./image/n15.jpg'alt=""/>
                        <div className="numero"> N°17 </div>
                        <hr/>
        
                        <div className="letra"> Batata frita c/ 
                            <br/> cheddar e bacon </div>
                        <div className="letra"> R$ 15,00 </div>
                    </div>
                    <div className="n17">
                        <img className="borda" src='./image/n16.jpg'alt=""/>
                        <div className="numero"> N°18 </div>
                        <hr/>
                    
                        <div className="letra"> Cebola Empanada </div>
                        <div className="letra">  R$ 12,90 </div>
                    </div>
                </div>
                <div className="vinteum">
                    <div className="n18">
                        <img className="borda" src='./image/n17.jpg'alt=""/>
                        <div className="numero"> N°19 </div>
                        <hr/>
                        
                        <div  className="letra"> Calabresa </div>
                        <div className="letra"> R$ 6,50 </div>
                    </div>
                    <div className="n19">
                        <img className="borda" src='./image/n18.jpg'alt=""/>
                        <div className="numero"> N°20 </div>
                        <hr/>
                    
                        <div className="letra"> Camarão <br/>
                             Empanado </div>
                        <div className="letra"> R$ 12,00 </div>
                    </div>
                    <div className="n20">
                        <img className="borda" src='./image/n19.jpg'alt=""/>
                        <div className="numero"> N°21 </div>
                        <hr/>
                        
                        <div className="letra"> Carne </div>
                        <div className="letra"> R$ 8,00 </div>
                    </div>

                </div>
                <br/>
                <h1 className="titulo"> Cardápio de Sobremesas </h1>
                <br/><br/><br/><br/>
                <div className="vintequatro">
                    <div className="n21">
                        <img className="borda" src='./image/n20.jpg'alt=""/>
                        <div className="numero"> N°22</div>
                        <hr/>
                    
                        <div className="letra"> Paçoca Recheada </div>
                        <div className="letra"> R$ 12,00 </div>
                    </div>
                    <div className="n22">
                        <img className="borda" src='./image/n21.jpg'alt=""/>
                        <div className="numero"> N°23</div>
                        <hr/>
                    
                        <div className="letra"> Mini churros </div>
                        <div className="letra"> R$ 5,00 </div>
                    </div>
                    <div className="n23">
                        <img className="borda" src='./image/n22.jpg'alt=""/>
                        <div className="numero"> N°24</div>
                        <hr/>
            
                        <div className="letra">  Mousse de Maracujá </div>
                        <div className="letra"> R$ 8,50 </div>
                    </div>
                </div>

                <div className="vintesete">
                    <div className="n24">
                        <img className="borda" src='./image/n23.jpg'alt=""/>
                        <div className="numero"> N°25</div>
                        <hr/>
                    
                        <div className="letra"> Bolo de churros </div>
                        <div className="letra"> R$ 10,00 </div>
                    </div>
                    <div className="n25">
                        <img className="borda" src='./image/n24.jpg'alt=""/>
                        <div className="numero"> N°26</div>
                        <hr/>
                
                        <div className="letra"> Torta de Limão </div>
                        <div className="letra"> R$ 6,00 </div>
                    </div>
                    <div className="n26">
                        <img className="borda" src='./image/n25.jpg'alt=""/>
                        <div className="numero"> N°27</div>
                        <hr/>
                
                        <div className="letra">Bomba de Chocolate </div>
                        <div className="letra">  R$ 4,50 </div>
                    </div>
                </div>
            </div>
            <footer>
                <img className="sangue" src='./image/sangue.png' alt=""/>
                <div className="pracima"> 
                 <h1 className="coco"> CONTATO </h1>
                    <div className="numeros"> 
                        <p className="t"> FIXO: 5698-5236 </p>
                        <p className="t"> CELULAR: 11 0000000000  </p>
                    </div>
                    <div className="hambúrguer"> 
                        <img src='/image/logoHambúrguer.png' alt=""/> 
                        <p className="t1"> HAMBÚRGUERES e CIA </p>
                        <p className="t2"> A melhor hamburgueria </p>
                        <img className="estrelas" src='/image/estrela.jpg' alt=""/> 
                    </div>
                    <div className="baixo"> 
                        <img className="whatsapp" src='./image/whatsapp.png' alt=""/>
                        <img className="telegram" src='./image/telegram.png' alt=""/>
                        <p className="t3"> Trabalhamos na Zona Sul de São Paulo </p>
                        <img className="uber" src='./image/uber.png' alt=""/>
                        <img className="ifood" src='./image/ifood.png' alt=""/> 
                    </div>
                </div>
            </footer>
    </main>
    )
    
}

