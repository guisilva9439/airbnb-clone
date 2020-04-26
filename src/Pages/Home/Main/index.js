// Node Modules imports
import React from 'react';

// Local imports
import SearchBar from './SearchBar';
import './style.css';
import experienceImg from '../../../assets/experience.webp';
import staysImg from '../../../assets/stays.webp';
import infoImg from '../../../assets/info.webp';

function Main() {
    return (
        <main className="container">
           <SearchBar />

           <section class='highlights'>
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

           <p>aaa</p>
           <p>aaa</p>
           <p>aaa</p>
           <p>aaa</p>
        </main>
    );
}

export default Main;