import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import ScorePage from './pages/ScorePage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/result" element={<ResultPage />} />
        {/* <Route path="/editproduct/:id" element={<EditProducts/>} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
