// src/pages/CardRequestList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { CardRequestContext } from '../context/CardRequestContext';

const CardRequestList = () => {
  //const { cardRequests } = useContext(0);

  return (
    <div>
      <h1>Banco Credit Suise</h1>
      
      <div>
        <h2 align="Center">Solicitud de Tarjeta de Crédito</h2>
        <div class="input-group">
        <span class="input-group-addon">Nombre</span> 
        <input    type="text"    placeholder="Nombre"       />
        <span class="input-group-addon">Nombre</span> 
        <input    type="text"   placeholder="CI" />

        <span class="input-group-addon">Correo Eléctronico</span> 
        <input    type="text"   placeholder="Email" />

        <span class="input-group-addon">Teléfono</span> 
        <input    type="text"   placeholder="Teléfono" />
        
      </div>
      <div class="small-box bg-yellow">
    
    <div class="inner">
    
      <h3>Tarjetas Aprobadas</h3>

        
  
    </div>
    
    <div class="icon">
    
      <i class="fa fa-fire"></i>
    
    </div>
    
    <a href="Aprobado" class="small-box-footer">

      Más info <i class="fa fa-arrow-circle-right"></i>

    </a>
    <div class="inner">
    
      <h3>Tarjetas Solicitadas</h3>

        
  
    </div>
    
    <div class="icon">
    
      <i class="fa fa-fire"></i>
    
    </div>
    
    <a href="Solicitado" class="small-box-footer">

      Más info <i class="fa fa-arrow-circle-right"></i>

    </a>

  </div>
      </div>
    </div>
  );
  
};

export default CardRequestList;
