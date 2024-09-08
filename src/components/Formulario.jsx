import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
const Formulario = ({setCategoria}) => {
    const handleChange=(e)=>{
        setCategoria(e.target.value);
    }
    return (
        <>
        <div className='row'>
        <div className="col-6">Buscar por categoria</div>
        <div className="col-6">
        <Form.Select  onChange={handleChange}>
      <option>Open this select menu</option>
      <option value="business">business</option>
      <option value="crime">crime</option>
      <option value="domestic">domestic</option>
      <option value="education">education</option>
      <option value="entertainment">entertainment</option>
      <option value="enviorment">enviorment</option>
      <option value="food">food</option>
      <option value="health">health</option>
      <option value="lifestyle">lifestyle</option>
      <option value="other">other</option>
      <option value="science">science</option>
      <option value="sports">sports</option>
      <option value="technology">technology</option>
      <option value="top">top</option>
      <option value="tourism">tourism</option>
      <option value="word">word</option>
    </Form.Select>
        </div>
        </div>
        
    </>
    );
};

export default Formulario;