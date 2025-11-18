// src/assets/Components/Header/Header.jsx

import React from 'react';
import './Header.css';

import LanguageSwitchButton from '../LanguageSwitchButton/LanguageSwitchButton.jsx';

const Header = ({ headerClasses }) => {
    // Nota: A lógica de scroll (scrolled/hide-on-scroll) fica no componente que chama o Header.

    return (
        <header className={headerClasses || 'navbar'}>
            <div className="navbar-left">
                <a href="./">
                    <img src="logo.png" className="logo" />
                </a>
                <div className="navbar-links">
                    <ul className="menu">
                        <li><a href="industria">Indústria</a></li>
                        <li><a href="projetos">Projetos</a></li>
                        <li><a href="sobre-nos">Sobre nós</a></li>
                        <li><a href="carreira">Carreira</a></li>
                        <li><a href="servicos">Serviços</a></li>
                        <li><a href="publicacoes">Publicações</a></li>
                        <li><a href="contate-nos" className="cta-button">Contate-nos!</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-right">
                <LanguageSwitchButton />
                <a href="#"><div className="circle-icon">🔍</div></a>
            </div>
        </header>
    );
};

export default Header;