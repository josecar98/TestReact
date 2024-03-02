// src/pages/CardRequestList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { GetSolicitud } from '../components/SolicTarjeta';

//import { CardRequestContext } from '../context/CardRequestContext';

const CardRequestList = () => {
  //const { cardRequests } = useContext(0);
  const inputSearch = useRef(null);
  const [textSearch, setTextSearch] = useState("");
  const [nombre, setNombre]= useState("");
  const [ci, setCi]= useState("");
  const [email, setEmail]= useState("");
  const [tel, setTelefono]= useState("");
  const onChangeNomSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setNombre(text);
  };
  const onChangeCiSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setCi(text);
  };
  const onChangeEmailSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setEmail(text);
  };
  const onChangeTelSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setTelefono(text);
  };
  const onSearchSubmit = (event) => {
    if (event.key !== "Enter") return;

    inputSearch.current.value = "";
    setNombre("");
    setCi("");
    setEmail("");
    setTelefono("");
    ;
  };
  return (
    <div>
      <h1>Banco Credit Suise</h1>
      
      <div >
        <h2 align="Center">Solicitud de Tarjeta de Crédito</h2>
        <div>
        Nombre
        
        <input 
         ref={inputSearch}
         onChange={e => setNombre(e.target.value)}
         type="text"
         placeholder="Nombre"     required  />
        <span >CI</span> 
        <input   
        ref={inputSearch}
        onChange={e => setCi(e.target.value)} type="text"  
         placeholder="CI" name="ciInput"/>

        <span >Correo Eléctronico</span> 
        <input   
         type="email"
         onChange={e => setEmail(e.target.value)}
         placeholder="Email" />

        <span >Teléfono</span> 
        <input    type="text" 
        onChange={e => setTelefono(e.target.value)}
        placeholder="Teléfono" />
        <button type="submit" onClick={()=>
          {
            GetSolicitud(nombre, ci, email, tel);

          }}
            onSubmit={onSearchSubmit}>
          Enivar
          </button>
      </div>
  <div >
    
    <div >
    
      <h3>Tarjetas Aprobadas</h3>

        
  
    </div>
    

    
    <a href="Aprobado">

      Más info 

    </a>
    <div >
    
      <h3>Tarjetas Solicitadas</h3>

        
  
    </div>
    

    
    <a href="Solicitado">

      Más info 

    </a>

  </div>
      </div>
    </div>
  );
  
};

export default CardRequestList;
