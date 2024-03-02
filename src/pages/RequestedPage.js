// src/pages/ApprovalScreen.js
import React, { useContext } from 'react';
import { useState, useEffect, useRef } from "react";

const RequestedScreen = () => {
  var [estado, setEstado] = useState("");

  return (
    <div>
      <h2>Tarjetas Solicitadas</h2>
      
        <div>
          <p>Nombre: Juan Carlos</p>
          <p>Email: juan@hotmail.com </p>
          <p>Celular: 65523845</p>
          
        <button onClick={() => setEstado="Aprobado"}>
          Aprobar
          </button>
          <button onClick={() => setEstado="Reprobado"}>
          Reprobar
          </button>
        </div>
        <div class="small-box bg-yellow">
    
    <div class="inner">
    
      <h3>Solicitar Tarjeta</h3>

        
  
    </div>
    
    <div class="icon">
    
      <i class="fa fa-fire"></i>
    
    </div>
    
    <a href="/" class="small-box-footer">

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
    
  );
};

export default RequestedScreen;
