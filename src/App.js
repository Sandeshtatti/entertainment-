import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Movies from './components/movies';
import Footer from './components/footers';
import Celebs from './components/celebs';
import PageNotFound from './components/404';
import AddFavourites from './components/addFavourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <Movies/>
      <Celebs/>
      <Footer/> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/celebs' element={<Celebs />} />
          <Route path='/add-favourites' element={<AddFavourites />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;

