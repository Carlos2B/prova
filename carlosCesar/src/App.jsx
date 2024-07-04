import './App.css'
import Home from './componentes/Home';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Conteudo from './componentes/Conteudo';

const Spinner = styled(motion.div)`
width: 100px;
height: 100px;
margin-left: 45vw;
border: 4px solid white;
border-top: 4px solid blue;
border-radius: 50%;

`

function App() {

  const[Carregando, setCarregando] = useState(true);
useEffect(() =>{
const timer = setTimeout(() =>{
  setCarregando(false)
}, 5000)
return () => clearTimeout(timer)
}, [])
  

  return (
    <>

<div className='center'>
      {Carregando ? (
     <Spinner 
     
     animate={{rotate:360}}
     transition={{duration: 0.5, repeat: Infinity, ease:'linear'}}

     />):(
      <Conteudo visivel={!Carregando}/>
     )
    }
     </div>

    </>
  )
}

export default App
