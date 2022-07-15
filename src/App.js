import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import FeedbackPage from './Pages/FeedbackPage';
import { FaQuestion, FaHome } from 'react-icons/fa';
import { RatingProvider } from './Contexts/RatingContext';

function App() {

  return (
    <div className='App'>
      <RatingProvider>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/feedback' element={<FeedbackPage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
            </Routes>
            <Link to='/about' className='about-button'><FaQuestion color='purple' size={20}/></Link>
            <Link to='/' className='home-button'><FaHome color='purple' size={30}/></Link>
        </Router>
      </RatingProvider>
    </div>
  );
}

export default App;
