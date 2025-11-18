// src/pages/ContateNos/ContateNos.jsx

import React, { useEffect, useState, useRef } from 'react';

// IMPORTAÇÕES GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '../../assets/Components/Header/Header.jsx';
import Footer from '../../assets/Components/Footer/Footer.jsx';

// 💡 Importa o CSS específico para esta página/formulário
import './ContateNos.css'; 

function ContateNos() {
    // 💡 Lógica de Estado para o Formulário
    const [formData, setFormData] = useState({
        subject: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        industry: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Formulário:', formData);
        alert('Formulário enviado! (Verifique o console)');
        // ⚠️ Aqui vai a lógica de envio real (e.g., fetch API)
    };
    
    // Você pode registrar plugins GSAP aqui se quiser animações específicas na página de contato.
    // gsap.registerPlugin(ScrollTrigger);

    return (
        <>
            <Header/>
            
            {/* 💡 A main agora contém a seção do formulário com fundo verde */}
            <main className="content-shift">
                
                <section className="contato-section dark-green-bg"> 
                    <div className="container">
                        
                        <form onSubmit={handleSubmit} className="contact-form">
                            
                            {/* 1. Subject (Linha Única) */}
                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input type="text" id="subject" name="subject" required onChange={handleChange} />
                            </div>

                            {/* 2. First Name / Last Name (Duas Colunas) */}
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First name *</label>
                                    <input type="text" id="firstName" name="firstName" required onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last name *</label>
                                    <input type="text" id="lastName" name="lastName" required onChange={handleChange} />
                                </div>
                            </div>

                            {/* 3. Email / Phone Number (Duas Colunas) */}
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" name="email" required onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone number *</label>
                                    <input type="tel" id="phone" name="phone" required onChange={handleChange} />
                                </div>
                            </div>
                            
                            {/* 4. Country / State (Duas Colunas) */}
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="country">Country *</label>
                                    <input type="text" id="country" name="country" required onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State/Province *</label>
                                    <input type="text" id="state" name="state" required onChange={handleChange} />
                                </div>
                            </div>
                            
                            {/* 5. Select an Industry (Dropdown) */}
                            <div className="form-group">
                                <label htmlFor="industry">Select an Industry</label>
                                <select id="industry" name="industry" onChange={handleChange}>
                                    <option value="">(Nenhuma)</option>
                                    <option value="mineracao">Mineração e Metais</option>
                                    {/* ... Adicionar todas as indústrias */}
                                </select>
                            </div>

                            {/* 6. Message (Área de Texto Grande) */}
                            <div className="form-group">
                                <label htmlFor="message">MESSAGE *</label>
                                <textarea id="message" name="message" rows="5" placeholder="Write your message" onChange={handleChange}></textarea>
                            </div>

                            {/* Botão de Envio */}
                            <button type="submit" className="submit-btn">Enviar</button>
                        </form>
                    </div>
                </section>
                
            </main>

            <Footer/>
        </>
    );
}

export default ContateNos;