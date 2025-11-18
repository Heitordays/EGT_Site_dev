// src/assets/Components/Hero/Hero.jsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText'; 
import './Hero.css';

const Hero = () => { 
    // 1. Definição dos Refs (três refs para os três elementos animados/monitorados)
    const heroRef = useRef(null);
    const circleOverlayRef = useRef(null);
    const heroTextRef = useRef(null); 

    useEffect(() => {
        let textSplitter; 
        
        // -----------------------------------------------------
        // 2. LÓGICA GSAP COMPLETA
        // -----------------------------------------------------

        // A. Animação do Círculo (ScrollTrigger)
        gsap.to(circleOverlayRef.current, {
            scale: 50,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "1500%", // Scroll muito longo para durar bastante tempo
                scrub: true, // Animação atrelada ao scroll
                id: "CircleOverlay"
            },
            transformOrigin: "center center",
            ease: "power1.out"
            // Nota: O duration não é necessário quando scrub: true é usado
        });

        // B. Animação do Texto (SplitText)
        if (heroTextRef.current) {
            // Garante que o texto está pronto para ser animado e visível
            gsap.set(heroTextRef.current, { opacity: 1 });
            
            // Cria a instância do SplitText
            textSplitter = new SplitText(heroTextRef.current, { 
                type: "lines", 
                linesClass: "line", // Essencial se você tem a regra .hero-text .line { overflow: hidden; } no seu CSS
                mask: true 
            });
            
            // Animação de revelação
            gsap.from(textSplitter.lines, { 
                duration: 2.0, 
                yPercent: 100, // Move 100% para baixo
                opacity: 0, // Inicia invisível
                stagger: 0.1, // Atraso entre as linhas
                ease: "power3.out",
                delay: 0.8 // Atraso no início da animação
            });
        }

        // -----------------------------------------------------
        // 3. FUNÇÃO DE LIMPEZA
        // -----------------------------------------------------
        return () => {
            // Limpa o ScrollTrigger do círculo
            ScrollTrigger.getById("CircleOverlay")?.kill();
            
            // Limpa o SplitText para reverter o DOM
            if (textSplitter) {
                textSplitter.revert();
            }
        };
    }, []); // Array de dependências vazio para rodar apenas uma vez na montagem

    return (
        <section className="hero-img-section" ref={heroRef}>
            <img src="1584695878990.jpg" alt="Imagem Mineração" className="hero-img" />
            <div className="hero-text">
                <h1 ref={heroTextRef} style={{ opacity: 0 }}>
                    Fostering ingenuity to better value nature.
                </h1>
            </div>

            <div className="circle-overlay" ref={circleOverlayRef}></div>
            <a href="https://twitch.tv/_preitor" target="_blank" className="play-button">
                ▶
            </a>
        </section>
    );
};

export default Hero;