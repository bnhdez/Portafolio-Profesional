import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

import Layout from './components/Layout';
import Home from './pages/Home';
import Robot from './pages/Robot';
import Wompi from './pages/Wompi';
import MueblesCorp from './pages/MueblesCorp';
import GifsApp from './pages/GifsApp';
import Reciclaje from './pages/Reciclaje';
import Globalia from './pages/Globalia';
import Encriptador from './pages/Encriptador';
import JuegoSecreto from './pages/JuegoSecreto';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/robot" element={<Robot />} />
              <Route path="/wompi" element={<Wompi />} />
              <Route path="/muebles-corp" element={<MueblesCorp />} />
              <Route path="/gifs-app" element={<GifsApp />} />
              <Route path="/reciclaje" element={<Reciclaje />} />
              <Route path="/globalia" element={<Globalia />} />
              <Route path="/encriptador" element={<Encriptador />} />
              <Route path="/juego-secreto" element={<JuegoSecreto />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;