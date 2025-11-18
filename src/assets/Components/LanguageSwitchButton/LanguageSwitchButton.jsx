// src/assets/Components/LanguageSwitchButton/LanguageSwitchButton.jsx

import React, { useState } from 'react';
import './LanguageSwitchButton.css'; 

const LanguageSwitchButton = () => {
    // Estado para controlar se o menu dropdown está aberto/fechado
    const [isOpen, setIsOpen] = useState(false);
    // Estado para a linguagem atualmente selecionada
    const [currentLang, setCurrentLang] = useState('PT'); 
    // Você pode usar o estado para definir qual opção tem o "ponto" de seleção

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectLang = (langCode) => {
        setCurrentLang(langCode);
        setIsOpen(false); 
        // ⚠️ Aqui entrará a função i18n real
        console.log(`Linguagem selecionada: ${langCode}`); 
    };

    return (
        <div className="language-dropdown-container">
            {/* O botão principal agora usa o ícone de globo (&#127760; ou 🌐) */}
            <button 
                className="lang-button globe-icon-button" 
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                &#127760; {/* Ícone de Globo 🌐 */}
            </button>

            {/* O Menu Dropdown */}
            {isOpen && (
                <div className="lang-dropdown-menu">
                    {/* Opção English (EN) */}
                    <div 
                        className="lang-option" 
                        onClick={() => handleSelectLang('EN')}
                    >
                        {/* Se EN for a linguagem atual, exibe o ponto */}
                        <span className="lang-indicator">{currentLang === 'EN' ? '•' : ''}</span> English (EN)
                    </div>

                    {/* Opção Português (PT) */}
                    <div 
                        className="lang-option" 
                        onClick={() => handleSelectLang('PT')}
                    >
                        <span className="lang-indicator">{currentLang === 'PT' ? '•' : ''}</span> Português (PT)
                    </div>
                    {/* Adicione outras línguas aqui (Deutsch, Français, Español) */}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitchButton;