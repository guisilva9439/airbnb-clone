// Node Modules imports
import React, { useEffect } from 'react';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

// Local imports
import './style.css';
import logoImg from '../../../assets/logo.svg';
import brlImg from '../../../assets/brl.svg';

function handleClick() {
    document.querySelector('header .navbar .dropdown .dropdown-content')
        .classList.toggle('hide');
}

function Header() {
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

    return (
        <header>
            <div className="container">
                <a href='/' className='logo'>
                    <img src={ logoImg } alt="logo Airbnb" width={ 100 } />
                </a>

                <ul className='navbar'>
                    <li className='dropdown'>
                        <button 
                            onClick={ handleClick } 
                            className='dropdown-toggler'
                        >
                            <div className='globe'>
                                <FiGlobe className='globesvg' color='#333' size={ 19 } />
                                <FiChevronDown color='#333' size={ 15 } />
                            </div>
                        </button>

                        <div className='dropdown-content hide'>
                            <a href='/'>
                                <div className="dropdown-item">
                                    <FiGlobe className='globesvg' color='#000' size={ 15 } />
                                    Português (BR)
                                </div>
                            </a>
                            <a href='/'>
                                <div className="dropdown-item">
                                    <img src={ brlImg } width={ 15 } alt='brl' />
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
    );
}

export default Header;