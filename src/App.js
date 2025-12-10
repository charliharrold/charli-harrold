import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App;