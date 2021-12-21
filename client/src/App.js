import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='routes'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
