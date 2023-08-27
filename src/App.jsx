import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
    </>
  )
}

export default App