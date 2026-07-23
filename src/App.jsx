import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AppLayout from './pages/AppLayout';
import ChapterPage from './pages/ChapterPage';
import ChapterActivitiesPage from './pages/ChapterActivitiesPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Plataforma — acesso direto */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ChapterPage chapterId="intro" />} />
          <Route path="intro/atividades" element={<ChapterActivitiesPage chapterId="intro" />} />
          <Route path="capitulo/:id" element={<ChapterPage />} />
          <Route path="capitulo/:id/atividades" element={<ChapterActivitiesPage />} />
        </Route>

        {/* Página Sobre — apresentação */}
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;