// src/pages/Home/Home.jsx

import React, { useEffect, useState, useRef } from 'react';

// IMPORTAÇÕES GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// IMPORTAÇÕES DE COMPONENTES
import Header from '../../assets/Components/Header/Header.jsx';
import Footer from '../../assets/Components/Footer/Footer.jsx';
import IndustriaCard from '../../assets/Components/IndustriaCard/IndustriaCard.jsx';
import Hero from '../../assets/Components/Hero/Hero.jsx';

// Registra o ScrollTrigger globalmente
gsap.registerPlugin(ScrollTrigger);

// ------------------------------------------------------------------
// 1. DADOS DAS INDÚSTRIAS
// ------------------------------------------------------------------
const INDUSTRIAS_DATA = [
    { id: 1, titulo: "Mineração e Metais", imagemSrc: "mineracao.jpg", corClasse: "ouro", descricao: "teste" },
    { id: 2, titulo: "Siderurgia e Fertilizantes", imagemSrc: "siderurgia.jpg", corClasse: "azul-escuro", descricao: "teste" },
    { id: 3, titulo: "Projetos Portuários", imagemSrc: "porto.jpg", corClasse: "ciano", descricao: "teste" },
    { id: 4, titulo: "Geração de Energia e Subestações", imagemSrc: "subestacao.jpg", corClasse: "verde-escuro", descricao: "teste" },
    { id: 5, titulo: "Outras Indústrias", imagemSrc: "outras.jpg", corClasse: "outras", descricao: "teste" },
];

// ------------------------------------------------------------------
// 2. SEÇÃO INDÚSTRIAS
// ------------------------------------------------------------------
const IndustriasSection = () => {
    const scrollContainerRef = useRef(null);
    const [leftBtnVisible, setLeftBtnVisible] = useState(false);
    const [rightBtnVisible, setRightBtnVisible] = useState(true);

    const scrollIndustria = (direction) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const itemWidth = container.querySelector('.industria-card')?.offsetWidth || 0;
        container.scrollBy({
            left: (itemWidth + 24) * direction,
            behavior: 'smooth'
        });
    };

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        setLeftBtnVisible(container.scrollLeft > 50);
        setRightBtnVisible(container.scrollLeft < maxScrollLeft - 50);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            checkScrollButtons();
            return () => container.removeEventListener('scroll', checkScrollButtons);
        }
    }, []);

    return (
        <section id="industrias">
            <div className="container">
                <div className="industria-header">
                    <h2 className="titulo-industrias">Indústrias Atendidas</h2>
                    <a href="/industrias" className="ver-tudo-btn">Ver tudo</a>
                </div>
            </div>

            <div className="scroll-wrapper">
                <button
                    className="scroll-btn left"
                    onClick={() => scrollIndustria(-1)}
                    style={{ display: leftBtnVisible ? 'block' : 'none' }}
                >
                    &larr;
                </button>

                <div className="scroll-container" id="industria-scroll" ref={scrollContainerRef}>
                    {INDUSTRIAS_DATA.map((industria) => (
                        <IndustriaCard
                            key={industria.id}
                            titulo={industria.titulo}
                            imagemSrc={industria.imagemSrc}
                            corClasse={industria.corClasse}
                        />
                    ))}
                </div>

                <button
                    className="scroll-btn right"
                    onClick={() => scrollIndustria(1)}
                    style={{ display: rightBtnVisible ? 'block' : 'none' }}
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
};

// ------------------------------------------------------------------
// 3. HOME COMPLETA
// ------------------------------------------------------------------
const Home = () => {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <IndustriasSection />

                <section id="sobre" style={{ padding: '60px 20px', textAlign: 'center' }}>
                    {/* ... */}
                </section>

                <section id="contato" style={{ padding: '60px 20px', textAlign: 'center' }}>
                    {/* ... */}
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
