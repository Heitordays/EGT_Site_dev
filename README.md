# EGT Site – Ambiente de Desenvolvimento

Projeto de site desenvolvido utilizando **Vite** como bundler e ambiente de desenvolvimento moderno para front-end.  
Este repositório contém a estrutura base do site, incluindo arquivos de configuração, código-fonte e assets estáticos.

---

## 📌 Tecnologias Utilizadas

- **Node.js**
- **Vite**
- **JavaScript**
- **HTML5**
- **CSS3**

---

## 📁 Estrutura Completa de Pastas e Arquivos

EGT_Site_dev/
│
├── public/
│   └── (arquivos estáticos)
│       ├── imagens
│       ├── ícones
│       └── outros assets públicos
│
├── src/
│   ├── assets/
│   │   ├── imagens
│   │   └── arquivos de mídia usados no site
│   │
│   ├── styles/
│   │   └── arquivos CSS globais e específicos
│   │
│   ├── main.js
│   │   └── ponto de entrada principal do JavaScript
│   │
│   └── (outros arquivos JS conforme evolução do projeto)
│
├── index.html
│   └── arquivo HTML principal carregado pelo Vite
│
├── package.json
│   └── configurações do projeto, scripts e dependências
│
├── package-lock.json
│   └── controle exato das versões das dependências
│
├── vite.config.js
│   └── configurações do Vite (build, servidor, plugins)
│
├── .gitignore
│   └── define arquivos/pastas ignorados pelo Git
│
└── README.md
    └── documentação do projeto
---

## 📄 Descrição dos Principais Arquivos

### `index.html`

Arquivo base da aplicação.
É o ponto inicial carregado pelo navegador e onde o Vite injeta os scripts do projeto.

---

### `src/`

Contém **todo o código-fonte do projeto**.

* `main.js`
  Arquivo principal de inicialização do JavaScript.
* `assets/`
  Imagens e arquivos utilizados pelo site.
* `styles/`
  Arquivos CSS responsáveis pelo layout e aparência.

---

### `public/`

Arquivos estáticos que não passam pelo processo de build do Vite.
Ideal para logos, ícones e imagens fixas.

---

### `vite.config.js`

Arquivo de configuração do Vite.
Controla:

* servidor de desenvolvimento
* build de produção
* plugins
* aliases de caminho (se houver)

---

### `package.json`

Define:

* nome do projeto
* dependências
* scripts de execução

Scripts comuns:

```bash
npm run dev     # inicia o servidor de desenvolvimento
npm run build   # gera a versão de produção
npm run preview # pré-visualiza o build
```

---

## ▶️ Como Rodar o Projeto Localmente

### 1️⃣ Instalar as dependências

```bash
npm install
```

### 2️⃣ Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

O projeto será iniciado normalmente em:

```
http://localhost:5173
```

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta:

```text
dist/
```

---

## 🧠 Observações

* Este repositório está em **ambiente de desenvolvimento**.
* A estrutura pode crescer conforme novas páginas, componentes ou estilos forem adicionados.
* O uso do Vite garante recarregamento rápido (HMR) durante o desenvolvimento.

---

## ✍️ Autor

**Heitor Days**
Repositório: `EGT_Site_dev`

---

## 📄 Licença

Projeto de uso interno / em desenvolvimento / A Daponta's® production.
