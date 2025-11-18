import './App.css'
import 'C:/Users/heide/Desktop/meu-site/src/assets/Components/Header/Header.css'
import 'C:/Users/heide/Desktop/meu-site/src/assets/Components/Footer/Footer.css'
import 'C:/Users/heide/Desktop/meu-site/src/assets/Components/IndustriaCard/IndustriaCard.css'
import './pages/Home/Home.css'
import Servicos from './pages/Servicos/Servicos.jsx'
import Carreira from './pages/Carreira/Carreira.jsx'
import Publicacoes from './pages/Publicacoes/Publicacoes.jsx'
import Projetos from './pages/Projetos/Projetos.jsx'
import Industria from './pages/Industria/Industria.jsx'
import ContateNos from './pages/ContateNos/ContateNos.jsx'
import SobreNos from './pages/SobreNos/SobreNos.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="sobre-nos" element={<SobreNos/>} />
          <Route exact path="contate-nos" element={<ContateNos/>} />
          <Route exact path="industria" element={<Industria/>} />
          <Route exact path="projetos" element={<Projetos/>} />
          <Route exact path="carreira" element={<Carreira/>} />
          <Route exact path="publicacoes" element={<Publicacoes/>} />
          <Route exact path="servicos" element={<Servicos/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
