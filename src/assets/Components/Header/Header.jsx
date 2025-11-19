// src/assets/Components/Header/Header.jsx

import React from 'react';
import './Header.css';

import LanguageSwitchButton from '../LanguageSwitchButton/LanguageSwitchButton.jsx';

const Header = ({ headerClasses }) => {
    return (
        <header className={headerClasses || 'navbar'}>
            <div className="navbar-left">
                <a href="./">
                    <img src="logo.png" className="logo" alt="Logo" />
                </a>
                <div className="navbar-links">
                    <ul className="menu">
                        {/* 6 Links que se encaixam no layout de 4 colunas (4 na 1ª linha, 2 na 2ª) */}
                        <li><a href="industria">Indústria</a></li>
                        <li><a href="projetos">Projetos</a></li>
                        <li><a href="sobre-nos">Sobre nós</a></li>
                        <li><a href="carreira">Carreira</a></li>
                        <li><a href="servicos">Serviços</a></li>
                        <li><a href="publicacoes">Publicações</a></li>
                        {/* ⚠️ REMOVIDO: O botão Contate-nos! não deve estar aqui. */}
                    </ul>
                </div>
            </div>

            <div className="navbar-right">
                <a href="contate-nos" className="ctt-button">Contate-nos!</a> 
                <LanguageSwitchButton />
                <a href="#"><div className="circle-icon">🔍</div></a>
            </div>
        </header>
    );
};

export default Header;