// Node Modules imports
import React from 'react';
import { FiGlobe, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// Local imports
import './style.css';
import brlImg from '../../../assets/brl.svg';

function Footer() {
    return (
        <footer>
            <div className="container">
                <section className="footer-grid">
                    <div className="footer-item">
                        <h3>Sobre</h3>
                        <ul>
                            <li><a href="/">Diversidade e pertencimento</a></li>
                            <li><a href="/">Acessibilidade</a></li>
                            <li><a href="/">Confiança e segurança</a></li>
                            <li><a href="/">Airbnb Citizen</a></li>
                            <li><a href="/">Newsroom</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Comunidade</h3>
                        <ul>
                            <li><a href="/">Airbnb Magazine</a></li>
                            <li><a href="/">Airbnb for Work</a></li>
                            <li><a href="/">Convide amigos</a></li>
                            <li><a href="/">Carreiras</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Anfitrião</h3>
                        <ul>
                            <li><a href="/">Hospede em sua acomodação</a></li>
                            <li><a href="/">Ofereça uma experiência</a></li>
                            <li><a href="/">Hospedagem responsável</a></li>
                            <li><a href="/">Open Homes</a></li>
                            <li><a href="/">Olimpíadas</a></li>
                            <li><a href="/">Central de recursos</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Atendimento</h3>
                        <ul>
                            <li><a href="/">Central de ajuda</a></li>
                            <li><a href="/">Atendimento ao bairro</a></li>
                        </ul>
                    </div>
                </section>
                <section className="footer-flex">
                    <div className="left">
                        <p>© 2020 Made with ReactJS</p>
                        <a href="/">Privacidade</a>
                        <a href="/">Termos</a>
                        <a href="/">Mapa do site</a>
                    </div>
                    <div className="right">
                        <div className="lang">
                            <a href="/">
                                <FiGlobe color='#000' size={ 15 } />
                                Português (BR)
                            </a>
                            <a href="/">
                                <img src={ brlImg } width={ 15 } alt="brl"/>
                                BRL
                            </a>
                        </div>
                        <div className="social">
                            <a href="/"><FiFacebook color='000' size={ 20 } /></a>
                            <a href="/"><FiTwitter color='000' size={ 20 } /></a>
                            <a href="/"><FiInstagram color='000' size={ 20 } /></a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;