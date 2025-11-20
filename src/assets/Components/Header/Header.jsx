// src/assets/Components/Header/Header.jsx

import React, { useEffect, useState } from 'react';
import './Header.css';

import LanguageSwitchButton from '../LanguageSwitchButton/LanguageSwitchButton.jsx';

const Header = () => {
    const [headerClass, setHeaderClass] = useState('navbar');
    const [bgClass, setBgClass] = useState('navbar-fundo');

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const scrollHandler = () => {
            const currentScrollY = window.scrollY;

            let newHeaderClass = 'navbar';
            let newBgClass = 'navbar-fundo';

            if (currentScrollY > 50) {
                newHeaderClass += ' scrolled';
                newBgClass += ' scrolled';
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                newHeaderClass += ' hide-on-scroll';
                newBgClass += ' hide-on-scroll';
            }

            setHeaderClass(newHeaderClass);
            setBgClass(newBgClass);

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(scrollHandler);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        scrollHandler();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className={bgClass}></div>

            <header className={headerClass}>
                <div className="navbar-left">
                    <a href="./">
                        <img src="logo.png" className="logo" alt="Logo" />
                    </a>

                    <div className="navbar-links">
                        <ul className="menu">
                            <li><a href="industria">Indústria</a></li>
                            <li><a href="projetos">Projetos</a></li>
                            <li><a href="sobre-nos">Sobre nós</a></li>
                            <li><a href="carreira">Carreira</a></li>
                            <li><a href="servicos">Serviços</a></li>
                            <li><a href="publicacoes">Publicações</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-right">
                    <a href="contate-nos" className="ctt-button">Contate-nos!</a>
                    <LanguageSwitchButton />
                    <div className="circle-icon">🔍</div>
                </div>
            </header>
        </>
    );
};

export default Header;
