// src/components/Header/Header.jsx

import React from 'react';
import './Header.css';
// import './Header.css'; // Não se esqueça de descomentar a importação dos estilos

const Header = ({ headerClasses }) => {
    // Nota: A lógica de scroll (scrolled/hide-on-scroll) fica no componente que chama o Header.

    return (
        <header className={headerClasses || 'navbar'}>
            <div className="navbar-left">
                <a href="./">
                    <img src="logo.png" className="logo" />
                </a>
                {/* O seu menu principal agora dividido em duas ULs */}
                <div className="navbar-links">
                    <ul className="menu">
                        <li><a href="industria">Industria</a></li>
                        <li><a href="projetos">Projetos</a></li>
                        <li><a href="sobre-nos">Sobre nos</a></li>
                        <li><a href="carreira">Carreira</a></li>
                        <li><a href="servicos">Serviços</a></li>
                        <li><a href="publicacoes">Publicações</a></li>
                        <li><a href="contate-nos">Contate-nos!</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-right">
                <span className="lang">pt-br ▼</span>
                <a href="mailto:contato@egt.com"><div className="circle-icon">📧</div></a>
                <a href="#"><div className="circle-icon">🔍</div></a>
            </div>
        </header>
    );
};

export default Header;