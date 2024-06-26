import React from 'react';
import style from'../Components/Sementinha.module.css';
import luana from '../assets/luana.jpg';
import gisele from '../assets/gisele.jpg';
import Header from './Header';


function Sementinha() {
    const handleFiltroClick = (especialidadeId) => {
        const elementos = document.getElementsByClassName({Packvids});
        for (let i = 0; i < elementos.length; i++) {
            if (especialidadeId === 'e') {
                elementos[i].style.display = 'block';
            } else if (elementos[i].id === especialidadeId) {
                elementos[i].style.display = 'block';
            } else {
                elementos[i].style.display = 'none';
            }
        }
    };

    return (

        <>
        <Header/>
        <div className={style.App}>
            <div className={style.Packparte1}>
                <h3>MUNDO <span style={{ color: 'rgba(4, 98, 98, 1)' }}>SEMENTINHAS</span></h3>
                <p>Vídeos produzidos por profissionais especialmente para crianças com paralisia cerebral.</p>
            </div>

            <div className={style.Packparte2}>
                <div className={style.filtrar}>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('e')}>Todos</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('a')}>Fisioterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('b')}>Fonoaudiologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('c')}>Musicoterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('d')}>Terapia Ocupacional</a>
                </div>

                <div id='a' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                        
                    </div><h3>Fisioterapia</h3>
                </div>
                <div id='a' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fisioterapia</h3>
                </div>
                <div id='a' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fisioterapia</h3>
                </div>
                <div id='a' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fisioterapia</h3>
                </div>


                <div id='b' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fonoaudiologia</h3>
                </div>
                <div id='b' className={style.Packvids}>
                    <div className={style.Packprofissional}style={{ backgroundImage: `url(${gisele})` }}>
                    
                    </div><h3>Fonoaudiologia</h3>
                </div>
                <div id='b' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fonoaudiologia</h3>
                </div>
                <div id='b' className={style.Packvids}>
                    <div className={style.Packprofissional}style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fonoaudiologia</h3>
                </div>
                <div id='b' className={style.Packvids}>
                    <div className={style.Packprofissional}style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fonoaudiologia</h3>
                </div>
                <div id='b' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Fonoaudiologia</h3>
                </div>


                <div id='c' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Musicoterapia</h3>
                </div>
                <div id='c' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Musicoterapia</h3>
                </div>
                <div id='c' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Musicoterapia</h3>
                </div>
                <div id='c' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}></div><h3>Musicoterapia</h3>
                    
                </div>
                <div id='c' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Musicoterapia</h3>
                </div>


                <div id='d' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Terapia Ocupacional</h3>
                </div>
                <div id='d' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Terapia Ocupacional</h3>
                </div>
                <div id='d' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Terapia Ocupacional</h3>
                </div>
                <div id='d' className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    </div><h3>Terapia Ocupacional</h3>
                </div>
                <div className={style.maisVideos}><h3>Mais vídeos em breve!</h3></div>


            </div>
        </div>
        </>
    );
}

export default Sementinha;
