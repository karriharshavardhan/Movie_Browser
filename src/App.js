import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Routes, Route } from 'react-router-dom';
//in latest version of react-router-dom switch is updated or replaced by routes

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutView/>}/>
      </Routes>
    </div>
  );
}

export default App;
