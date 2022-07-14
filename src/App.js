import { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Cart  from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';


function App() {
  
  return (
    <div className="App">
  <CartProvider >
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer  />} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/checkout' element={<Checkout/>} /> */}
      </Routes> 
     </BrowserRouter>
  </CartProvider>
     
    </div>
  );
}

export default App;
