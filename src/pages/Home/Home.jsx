// src/pages/Home/Home.jsx

import React, { useEffect, useState, useRef } from 'react';

// IMPORTAÇÕES GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// IMPORTAÇÕES DE COMPONENTES (Usando caminhos relativos e capitalização correta)
import Header from '../../assets/Components/Header/Header.jsx';
import Footer from '../../assets/Components/Footer/Footer.jsx';
import IndustriaCard from '../../assets/Components/IndustriaCard/IndustriaCard.jsx';
import Hero from '../../assets/Components/Hero/Hero.jsx';

// Registra os plugins GSAP globalmente (necessário no React)
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
// 2. SEÇÃO INDÚSTRIAS (Com lógica de scroll e botões)
// ------------------------------------------------------------------
const IndustriasSection = () => {
    const scrollContainerRef = useRef(null);
    // Estados para controlar a visibilidade dos botões
    const [leftBtnVisible, setLeftBtnVisible] = useState(false);
    const [rightBtnVisible, setRightBtnVisible] = useState(true); // Assume que começa com o scroll no início

    // Lógica para rolagem manual (migrada do scrollIndustria original)
    const scrollIndustria = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = container.querySelector('.industria-card')?.offsetWidth || 0;
            // Usamos itemWidth + 24 (gap) para rolar um item de cada vez
            const scrollAmount = (itemWidth + 24) * direction;

            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Lógica para verificar a visibilidade dos botões (migrada do checkScrollButtons original)
    const checkScrollButtons = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // Atualiza o estado:
        setLeftBtnVisible(container.scrollLeft > 50); // Adicionei uma pequena margem (50)
        setRightBtnVisible(container.scrollLeft < maxScrollLeft - 50);
    };

    // useEffect para anexar o listener de scroll e executar a checagem inicial
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Anexa o listener de scroll
            container.addEventListener('scroll', checkScrollButtons);
            // Executa a checagem inicial após a renderização
            checkScrollButtons();

            // Cleanup: remove o listener quando o componente é desmontado
            return () => container.removeEventListener('scroll', checkScrollButtons);
        }
    }, []); // Roda apenas na montagem e desmontagem

    return (
        <section id="industrias">
            <div className="container">
                <div className="industria-header">
                    <h2 className="titulo-industrias">Indústrias Atendidas</h2>
                    <a href="/industrias" className="ver-tudo-btn">Ver tudo</a>
                </div>
            </div>

            <div className="scroll-wrapper">
                {/* Botão de Scroll Esquerdo (Visibilidade controlada pelo estado) */}
                <button
                    className="scroll-btn left"
                    onClick={() => scrollIndustria(-1)}
                    style={{ display: leftBtnVisible ? 'block' : 'none' }}
                >
                    &larr;
                </button>

                {/* Container de Cartões de Indústria */}
                <div className="scroll-container" id="industria-scroll" ref={scrollContainerRef}>
                    {INDUSTRIAS_DATA.map(industria => (
                        <IndustriaCard
                            key={industria.id}
                            titulo={industria.titulo}
                            imagemSrc={industria.imagemSrc}
                            corClasse={industria.corClasse}
                        />
                    ))}
                </div>

                {/* Botão de Scroll Direito (Visibilidade controlada pelo estado) */}
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
// 4. COMPONENTE HOME PRINCIPAL (Com lógica do Header)
// ------------------------------------------------------------------
const Home = () => {
    // LÓGICA DE SCROLL DO HEADER (mantida e funcional)
    const [headerClasses, setHeaderClasses] = useState('navbar');

    useEffect(() => {
        const header = document.querySelector('.navbar');
        // A lógica já estava encapsulada, mas a reafirmo aqui:
        let lastScrollY = window.scrollY;
        let ticking = false;

        const scrollHandler = () => {
            const currentScrollY = window.scrollY;
            let newClasses = 'navbar';

            if (currentScrollY > 50) newClasses += ' scrolled';

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                newClasses += ' hide-on-scroll';
            }
            setHeaderClasses(newClasses);
            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(scrollHandler);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        scrollHandler();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    // Fim da Lógica de Scroll

    return (
        <>
            <Header headerClasses={headerClasses} />

            <main>
                <Hero /> {/* 💡 Componente Hero é chamado corretamente */}
                <IndustriasSection />

                {/* Seções Sobre Nós e Contato */}
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