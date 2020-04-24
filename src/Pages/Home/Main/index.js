// Node Modules imports
import React from 'react';
import { FaSearch } from 'react-icons/fa';

// Local imports
import './style.css';

function Main() {
    function handleClick(e) {
        const listItems = document.querySelectorAll('main .searchbar .search-options li');
        const paddle = document.querySelector('main .searchbar .search-options span');
        const container = document.querySelector('main.container');

        const containerRect = container.getBoundingClientRect();
        const targetRect = e.target.getBoundingClientRect();

        for (const item of listItems) {
            item.className = '';
        }

        e.target.className = 'active';

        paddle.style.left = `${ targetRect.left - containerRect.left }px`;
        paddle.style.width = `${ targetRect.width }px`;
    }

    function handleMouseMove(e) {
        const effect = document.querySelector('main .searchbar .inline-form button span ');
        const button = document.querySelector('main .searchbar .inline-form button');

        const buttonRect = button.getBoundingClientRect();

        effect.style.top = `${ e.clientY - (buttonRect.top + 10) }px`;
        effect.style.left = `${ e.clientX - (buttonRect.left + 10) }px`;
    }

    function handleFocus(e) {
        e.target.parentElement.className = 'focused';
    }

    function handleBlur(e) {
        e.target.parentElement.className = '';
    }

    return (
        <main className='container'>
            <section className='searchbar'>
                <ul className='search-options'>
                    <li className='active'
                        onClick={ handleClick }
                    >
                        Lugares para ficar
                    </li>
                    <li onClick={ handleClick }>
                        Estadias longas
                    </li>
                    <li onClick={ handleClick }>
                        Experiências
                    </li>
                    <span></span>
                </ul>

                <form className='inline-form'>
                    <label 
                        onFocus={ handleFocus }
                        onBlur={ handleBlur }
                    >
                        Localização
                        <input placeholder='Insira a cidade, ponto de referência ou endereço' />
                    </label>
                    <label
                        onFocus={ handleFocus }
                        onBlur={ handleBlur }
                    >
                        Check-in/Checkout
                        <input placeholder='Insira as datas' />
                    </label>
                    <label
                        onFocus={ handleFocus }
                        onBlur={ handleBlur }
                    >
                        Hóspedes
                        <input placeholder='Insira o número de hóspedes' />
                    </label>
                    <button
                        type="submit"
                        onMouseMove={ handleMouseMove }
                    >
                        <span></span>
                        <FaSearch color='#fff' size={ 13 } />
                        <p>Buscar</p>
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Main;