// Node Modules imports
import React from 'react';

// Local imports
import SearchBar from './SearchBar';
import './style.css';

import experienceImg from '../../../assets/experience.webp';
import staysImg from '../../../assets/stays.webp';
import infoImg from '../../../assets/info.webp';

import img1 from '../../../assets/img1.webp';
import img2 from '../../../assets/img2.webp';
import img3 from '../../../assets/img3.webp';
import img4 from '../../../assets/img4.webp';

function Main() {
    return (
        <main>
            <div className="container">
                <SearchBar />

                <section className='highlights'>
                    <h1>Podemos estar afastados, mas vamos superar isso juntos.</h1>

                    <div className="highlights-content">
                        <a href='/' className="highlight-item">
                            <img src={ experienceImg } alt="Experiencia online" />
                            <div className="detail">
                                <h2>Experiências Online</h2>
                                <p>Atividades únicas que podemos fazer juntos, oferecidas por anfitriões de todo o mundo.</p>
                            </div>
                        </a>
                        <a href='/' className="highlight-item">
                            <img src={ staysImg } alt="Estadias longas" />
                            <div className="detail">
                                <h2>Estadias longas</h2>
                                <p>Sinta-se em casa no airbnb com estadias de um mês ou mais.</p>
                            </div>
                        </a>
                        <a href='/' className="highlight-item">
                            <img src={ infoImg } alt="Informações atualizadas" />
                            <div className="detail">
                                <h2>Informações atualizadas</h2>
                                <p>Saiba mais sobre as ações que estamos tomando em relação à COVID-19</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
          
            <section className="experience">
                <div className="container">
                    <div className="experience-header">
                        <div className="experience-title">
                            <h1>Apresentamos as experiências online</h1>
                            <p>Agora você pode conhecer pessoas do mundo 
                                inteiro enquanto experimenta algo novo. 
                                Participe de sessões de vídeo interativas ao 
                                vivo oferecidas por anfitriões especialistas — 
                                tudo isso sem sair de casa.
                            </p>
                        </div>
                        <button>Explorar tudo</button>
                    </div>
                    <div className="experience-content">
                        <a href='/' className="experience-item">
                            <img src={ img1 } alt="Experience" />
                            <div className="legend">
                                <p>Prepare um receita de sangria secreta com Pedro, de Lisboa</p>
                            </div>
                        </a>
                        <a href='/' className="experience-item">
                            <img src={ img2 } alt="Experience" />
                            <div className="legend">
                                <p>Alongue-se. Respire. Relaxe. Aula de ioga com amigos.</p>
                            </div>
                        </a>
                        <a href='/' className="experience-item">
                            <img src={ img3 } alt="Experience" />
                            <div className="legend">
                                <p>Medite ao som da musica com Janice, de Amsterdã</p>
                            </div>
                        </a>
                        <a href='/' className="experience-item">
                            <img src={ img4 } alt="Experience" />
                            <div className="legend">
                                <p>Desenhe com John e ajude os pinguins africanos.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="stay-in">
                <div className="container">
                    <h1>Fique por dentro</h1>
                    <div className="stay-in-grid">
                        <div className="stay-in-item">
                            <h2>Para hóspedes</h2>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Atualizações sobre viagens</h3>
                                    <p>O que você deve saber</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Opções de cancelamento</h3>
                                    <p>Saiba o que está coberto</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Central de ajuda</h3>
                                    <p>Ajuda</p>
                                </div>
                            </a>
                        </div>
                        <div className="stay-in-item">
                            <h2>Para anfitriões</h2>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Mensagem de Brian Chesky</h3>
                                    <p>Mensagem do nosso CEO</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Recursos para hospedagem</h3>
                                    <p>Como mitigar os efeitos da COVID-19</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Ofereça acomodações na linha de frente</h3>
                                    <p>Saiba como ajudar</p>
                                </div>
                            </a>
                        </div>
                        <div className="stay-in-item">
                            <h2>Para pessoas combatendo a COVID-19</h2>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Acomodações na linha de frente</h3>
                                    <p>Saiba mais sobre o programa</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Cadastre-se</h3>
                                    <p>Consulte as opções de acomodação</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Faça uma doação</h3>
                                    <p>Apoie organizações sem fins lucrativos</p>
                                </div>
                            </a>
                        </div>
                        <div className="stay-in-item">
                            <h2>Mais</h2>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Sala de Imprensa do Airbnb</h3>
                                    <p>Ultimas informações</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="item-link">
                                    <h3>Organização Mundial da Saúde</h3>
                                    <p>Recomendações e atualizações</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;