import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Noticia = ({noticia}) => {
    return (
        <div className='col-12 col-md-4 col-lg-3'>
        <Card className='h-100' >
      <Card.Img variant="top" src={noticia.image_url} />
      <Card.Body>
        <h6>{noticia.source_id} </h6>
        <Card.Title>{noticia.title} </Card.Title>
        <Card.Text>
          {noticia.description}
        </Card.Text>
        <a target='_blank' href={noticia.link} className='btn btn-primary' > ver noticia completa</a>
      </Card.Body>
    </Card>
    </div>
    );
};

export default Noticia;