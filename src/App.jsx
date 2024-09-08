import { useState } from 'react'
import './App.css'
import ListaNoticia from './components/ListaNoticia';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
function App() {
 const [categoria, setCategoria ] = useState('')
  return (
    <section className='container'>
      <div className='my-3'>
        <Titulo></Titulo>
      </div>
     <Formulario setCategoria={setCategoria} ></Formulario>
   
     <ListaNoticia categoria={categoria}></ListaNoticia>
    </section>
  )
}

export default App
