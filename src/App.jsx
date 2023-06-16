import { Fragment, useState,useEffect } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Listado from './Components/Listado'


function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

    useEffect(() => {
      const ConsultaAPI = async () => {
        const url =  `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=132632e65f354d569e43e6923862f39e`
          const respuesta = await  fetch(url);
          const noticias = await respuesta.json();

          setNoticias(noticias.articles);
      }
      ConsultaAPI();
    },[categoria])

  return (

    <Fragment>
      <Header
        titulo="Buscador de Noticis"
      />
      <div className="container white">
        <Form
          setCategoria={setCategoria}
        />
        <Listado
        noticias={noticias}
        />
      </div>
    </Fragment>

  )
}

export default App
