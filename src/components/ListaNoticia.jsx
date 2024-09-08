import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Noticia from './Noticia';

const ListaNoticia = ({ categoria }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const url = categoria 
          ? `https://newsdata.io/api/1/latest?apikey=pub_52872b1ea97fbba75ab3e70dc084646551c9e&language=es&category=${categoria}`
          : `https://newsdata.io/api/1/latest?apikey=pub_52872b1ea97fbba75ab3e70dc084646551c9e&language=es`;
        
        const response = await axios.get(url);
        console.log(response.data.results)
        setNoticias(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (categoria) {
      getAPI();
    }
  }, [categoria]);

  return (
    <section className='row my-5'>
      {noticias.map((noticia, index) => (
        <Noticia noticia={noticia} key={index} />
      ))}
    </section>
  );
};

export default ListaNoticia;