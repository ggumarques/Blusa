/* import React from 'react';
import style from '../Components/Profissionais.module.css';
import luana from '../assets/luana.jpg';
import gisele from '../assets/gisele.jpg';
import Header from './Header';

function Profissionais() {
    const handleFiltroClick = (especialidadeId) => {
        const elementos = document.getElementsByClassName('Packvids');
        for (let i = 0; i < elementos.length; i++) {
            if (especialidadeId === 'g') { // 'g' para "Todos"
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
                <h3><span style={{ color: 'rgba(4, 98, 98, 1)' }}>PROFISSIONAIS</span></h3>
                <p>Os melhores e mais especializados profissionais à disposição para ajudar no desenvolvimento.</p>
            </div>

            <div className={style.Packparte2}>
            <div className={style.filtrar}>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('g')}>Todos</a> 
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('a')}>Fisioterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('b')}>Fonoaudiologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('c')}>Musicoterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('d')}>Terapia Ocupacional</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('e')}>Psicologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('f')}>Educação</a>
                </div>

                <div id={style.a} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}></div>
                        <h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                    </div>
                <div id={style.a} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.a} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.a}className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>


                <div id={style.b} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.b} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${gisele})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.b} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.b} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.b}className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>
                <div id={style.b} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Fisioterapeuta</p><a>Conhecer</a>
                </div>


                <div id={style.c} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Musicoterapia</p><a>Conhecer</a>
                </div>
                <div id={style.c} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Musicoterapia</p><a>Conhecer</a>
                </div>
                <div id={style.c} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Musicoterapia</p><a>Conhecer</a>
                </div>
                <div id={style.c} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}></div><h3>Luana M. Sutt</h3><p>Musicoterapia</p><a>Conhecer</a>
                    
                </div>
                <div id={style.c} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Musicoterapia</p><a>Conhecer</a>
                </div>


                <div id={style.d} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Terapia Ocupacional</p><a>Conhecer</a>
                </div>
                <div id={style.d} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Terapia Ocupacional</p><a>Conhecer</a>
                </div>
                <div id={style.d} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    
                    </div><h3>Luana M. Sutt</h3><p>Terapia Ocupacional</p><a>Conhecer</a>
                </div>
                <div id={style.d} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    </div><h3>Luana M. Sutt</h3><p>Terapia Ocupacional</p><a>Conhecer</a>
                </div>


                <div id={style.e} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    </div><h3>Luana M. Sutt</h3><p>Psicologia</p><a>Conhecer</a>
                </div>
                <div id={style.e} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    </div><h3>Luana M. Sutt</h3><p>Psicologia</p><a>Conhecer</a>
                </div>


                <div id={style.f}className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    </div><h3>Luana M. Sutt</h3><p>Educação</p><a>Conhecer</a>
                </div>
                <div id={style.f} className={style.Packvids}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                    </div><h3>Luana M. Sutt</h3><p>Educação</p><a>Conhecer</a>
                </div>
                <div className={style.maisVideos}><h3>Mais vídeos em breve!</h3></div>


            </div>
        </div>
        </>
    );
}

export default Profissionais;
 */

import React, { useState } from 'react';
import style from './Profissionais.module.css';
import luana from '../assets/luana.jpg';
import gisele from '../assets/gisele.jpg';
import rafael from '../assets/rafael.jpg';
import Header from './Header';

function Profissionais() {
    const [profissionalAtivo, setProfissionalAtivo] = useState(null);

    const handleFiltroClick = (especialidadeId) => {
        const elementos = document.getElementsByClassName('Packvids');
        for (let i = 0; i < elementos.length; i++) {
            if (especialidadeId === 'g') { // 'g' para "Todos"
                elementos[i].style.display = 'block';
            } else if (elementos[i].id === especialidadeId) {
                elementos[i].style.display = 'block';
            } else {
                elementos[i].style.display = 'none';
            }
        }
        // Ao mudar o filtro, desativa o profissional ativo
        setProfissionalAtivo(null);
    };

    const handleDivClick = (especialidadeId) => {
        if (profissionalAtivo === especialidadeId) {
            setProfissionalAtivo(null); // Desativa o profissional se clicado novamente
        } else {
            setProfissionalAtivo(especialidadeId); // Ativa o novo profissional clicado
        }
    };

    return (
        <>
      <Header/>
        <div className={style.App}>

            <div className={style.Packparte1}>
                <h3><span style={{ color: 'rgba(4, 98, 98, 1)' }}>PROFISSIONAIS</span></h3>
                <p>Os melhores e mais especializados profissionais à disposição para ajudar no desenvolvimento.</p>
            </div>

            <div className={style.filtrar}>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('g')}>Todos</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('a')}>Fisioterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('b')}>Fonoaudiologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('c')}>Musicoterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('d')}>Terapia Ocupacional</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('e')}>Psicologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('f')}>Educação</a>
                </div>
            <div className={style.Packparte2}>


                <div id={style.a} className={style.Packvids} onClick={() => handleDivClick('a')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                        {profissionalAtivo === 'a' && (
                            <Profissionais
                                nome_profissional={"Luana Matheus Sutt"}
                                imagem_profissional={luana}
                                especialidade={"Fisioterapeuta"}
                                numero_identificador={"CREFITO: 8 100257-TO"}
                                sobre_mim={"Me chamo Luana, tenho 98 anos e eu sou a universal!"}
                                minha_experiencia={"Minha experiência como soldado do Vietnã começou em meados da década de 55..."}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Luana M. Sutt</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Fisioterapeuta</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>

                <div id={style.f} className={style.Packvids} onClick={() => handleDivClick('b')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${gisele})` }}>
                        {profissionalAtivo === 'b' && (
                            <Profissionais
                                nome_profissional={"Gisele Pires Teixeira"}
                                imagem_profissional={gisele}
                                especialidade={"Educadora"}
                                numero_identificador={""}
                                sobre_mim={"Texto sobre Gisele adwadawaaaa..."}
                                minha_experiencia={"Experiência profissional de Gisele..."}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Gisele Pires Teixeira</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Educadora</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>


                <div id={style.f} className={style.Packvids} onClick={() => handleDivClick('c')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${rafael})` }}>
                        {profissionalAtivo === 'c' && (
                            <Profissionais
                                nome_profissional={"Rafael San Vicentea"}
                                imagem_profissional={rafael}
                                especialidade={"Psicomotricista"}
                                numero_identificador={""}
                                sobre_mim={"Psicomotricista"}
                                minha_experiencia={"Experiência profissional de Gisele..."}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Rafael San Vicente</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Psicomotricista</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>


                <div className={style.maisVideos}><h3>Mais profissionais em breve!</h3></div>
            </div>
        </div>
        </>
    );
}

export default Profissionais;