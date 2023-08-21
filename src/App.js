import './App.css';
import {useState, useEffect} from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView'
import { Routes, Route } from 'react-router-dom';
//in latest version of react-router-dom switch is updated or replaced by routes

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(searchText, "is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b57483b8b14ba0abe86259dd97b537b&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json)
      .then(data => {
        setSearchResults(data.reults)
      })
  }, [searchText])

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutView/>}/>
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
      </Routes>
    </div>
  );
}

export default App;
