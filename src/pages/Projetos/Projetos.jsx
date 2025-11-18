
import React, { useEffect, useState, useRef } from 'react';

// IMPORTAÇÕES GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '../../assets/Components/Header/Header.jsx';
import Footer from '../../assets/Components/Footer/Footer.jsx';

function SobreNos() {
    return (
        <>
        <Header/>
            <main className="content-shift">
                <h1>Projota</h1>
                <p>Textos e tal</p>
                </main>
        <Footer/>
        </>
    );
}

export default SobreNos;