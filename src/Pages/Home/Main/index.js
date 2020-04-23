// Node Modules imports
import React from 'react';

// Local imports
import './style.css';

function Main() {
    function handleClick(e) {
        const listItems = document.querySelectorAll('main .nav li');

        for (const item of listItems) {
            item.className = '';
        }

        e.target.className = 'active';
    }

    return (
        <main className='container'>
            <ul className='nav'>
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
            </ul>
        </main>
    );
}

export default Main;