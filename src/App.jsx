import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AppLayout from './pages/AppLayout';
import ChapterPage from './pages/ChapterPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Plataforma — acesso direto */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ChapterPage chapterId="intro" />} />
          <Route path="capitulo/:id" element={<ChapterPage />} />
        </Route>

        {/* Página Sobre — apresentação */}
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;