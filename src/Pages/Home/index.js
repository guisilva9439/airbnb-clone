// Node Modules imports
import React, { useEffect } from 'react';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

// Local imports
import './style.css';
import logoImg from '../../assets/logo.svg';
import brlImg from '../../assets/brl.svg';

function Home() {
    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY >= 10) {
                document.querySelector('header')
                    .classList.add('fixed');
            } else {
                document.querySelector('header')
                    .classList.remove('fixed');
            }
        });
    }, []);

    function handleClick() {
        document.querySelector('header .navbar .dropdown .dropdown-content')
            .classList.toggle('hide');
    }

    return (
        <div className="home">
            <header>
                <div className="container">
                    <a href='/' className='logo'>
                        <img src={ logoImg } alt="logo Airbnb" width={ 128 } />
                    </a>

                    <ul className='navbar'>
                        <li className='dropdown'>
                            <button 
                                onClick={ handleClick } 
                                className='dropdown-toggler'
                            >
                                <div className='globe'>
                                    <FiGlobe className='globesvg' color='#000' size={ 22 } />
                                    <FiChevronDown color='#000' size={ 20 } />
                                </div>
                            </button>

                            <div className='dropdown-content hide'>
                                <a href='/'>
                                    <div className="dropdown-item">
                                        <FiGlobe className='globesvg' color='#000' size={ 22 } />
                                        Português (BR)
                                    </div>
                                </a>
                                <a href='/'>
                                    <div className="dropdown-item">
                                        <img src={ brlImg } width={ 22 } alt='brl' />
                                        BRL
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href='/'>Hospede em sua acomodação</a>
                        </li>
                        <li>
                            <a href='/'>Hospede uma experiência</a>
                        </li>
                        <li>
                            <a href='/'>Ajuda</a>
                        </li>
                        <li>
                            <a href='/'>Entrar</a>
                        </li>
                        <li className='signup'>
                            <a href='/'>Cadastrar-se</a>
                        </li>
                    </ul>
                </div>
            </header>

            <main>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
                <p>sdsdsdsdsdsd sdsdsdsdsdsdsd dsdsdsdsds sdsdsds</p>
            </main>
        </div>
    );
}

export default Home;