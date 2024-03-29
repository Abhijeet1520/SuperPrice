// import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Route, Routes } from 'react-router';


import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage';

import ProductDetail from './pages/product_detail/ProductDetail';
import SearchResults from './pages/searchResults/searchResults';
import OfferList from './components/offerList/offerList';
// import ResultList from './components/searchResults/resultList';


function App() {
  return (
    <div className="App">
        <div className='pg-content'>
      <Navbar/>
      {/* <div className='space'></div> */}
      
      {/**IDK how to do next.js routing so i did this for the time being */}

      {/**IMPORTANT: Also need to add path to index.tsx */}
      {/**See index.tsx for mor info */}

        <Routes>
          <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
          <Route path='/search' element={<SearchResults searchItem=''/>} />
          <Route path='/' element={<Homepage/>}>
            <Route path=":discount" element={<OfferList/>}/>
          </Route>
        </Routes>
      </div>

      <Footer/>     
       
    </div>
  );
}

export default App;
