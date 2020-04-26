// Node Modules imports
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Local imports
import './style.css';

function SearchBar() {
    const [experience, setExperience] = useState(false);

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

        document.querySelector('main .searchbar .search-options li:last-of-type')
            .className === 'active' ?
            setExperience(true) :
            setExperience(false);
    }

    function handleMouseMove(e) {
        const effect = document.querySelector('main .searchbar .inline-form button span ');
        const button = document.querySelector('main .searchbar .inline-form button');

        const buttonRect = button.getBoundingClientRect();

        effect.style.top = `${ e.clientY - (buttonRect.top + 10) }px`;
        effect.style.left = `${ e.clientX - (buttonRect.left + 10) }px`;
    }

    function handleFocus(e) {
        e.type === 'focus' ? e.target.parentElement.className = 'focused' : 
            e.target.parentElement.className = '';
    }

    return (
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
                    onBlur={ handleFocus }
                >
                    Localização
                    <input placeholder='Insira a cidade, ponto de referência ou endereço' />
                </label>
                {
                    experience ?
                    (
                        <label
                            onFocus={ handleFocus }
                            onBlur={ handleFocus }
                        >
                            Data
                            <input placeholder='Adicionar a data em que deseja ir' />
                        </label>
                    ) : (
                        <>
                            
                            <label
                                onFocus={ handleFocus }
                                onBlur={ handleFocus }
                            >
                                Check-in/Checkout
                                <input placeholder='Insira as datas' />
                            </label>
                            <label
                                onFocus={ handleFocus }
                                onBlur={ handleFocus }
                            >
                                Hóspedes
                                <input placeholder='Insira o número de hóspedes' />
                            </label>
                        </>
                    )
                }
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
    )
}

export default SearchBar;