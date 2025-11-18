// src/assets/Components/IndustriaCard/IndustriaCard.jsx (Apenas o JSX com o painel de descrição)

import React from 'react';
import './IndustriaCard.css'; 

// Adicionaremos uma prop 'isExpanded' que será controlada pelo Home.jsx
const IndustriaCard = ({ titulo, imagemSrc, corClasse, isExpanded, descricao }) => {

    return (
        // A classe 'expanded' será aplicada pelo Home.jsx
        <div className={`industria-card ${corClasse} ${isExpanded ? 'expanded' : ''}`}> 
            
            <div className="card-img-wrapper">
                <img src={imagemSrc} className="card-img" alt={titulo} />
                <div className="card-overlay"></div>
                
                <div className="card-header">
                    <span>{titulo}</span>
                </div>
            </div>

            {/* Painel Lateral (Ele deve estar **FORA** da largura do card normal) */}
            <div className="card-side-panel">
                <h3 className="side-title">{titulo}</h3>
                <p className="side-description">{descricao}</p>
                <a href="/detalhes" className="side-btn">Ver Detalhes</a>
            </div>
        </div>
    );
};

export default IndustriaCard;