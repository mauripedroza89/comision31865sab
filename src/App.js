import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {
    Button,
    Stack
} from '@chakra-ui/react';


function App() {
  /* const [page,setPage] = useState('list') */

  return (
    <div className="App">
      {/* <Stack direction={'row'} align={'center'}>
      <Button color={'blue.200'} onClick={()=> setPage('list')}>Lista</Button>
      <Button color={'blue.200'} onClick={()=> setPage('detail')} >Detalle</Button>
      </Stack>
     {page === 'list' && <ItemListContainer/>}
     {page === 'detail' &&  <ItemDetailContainer/>}*/}

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer/>} />

        <Route path='/category/:categoryId' element={<ItemDetailContainer/>} />

      

     </Routes> 

     </BrowserRouter>
    </div>
  );
}

export default App;
