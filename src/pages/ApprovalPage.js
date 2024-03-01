// src/pages/ApprovalScreen.js
import React, { useContext } from 'react';


const ApprovalScreencreen = () => {
  

  return (
    <div>
      <h2>Tarjetas Solicitadas</h2>
      
      <h2>Tarjetas Solicitadas</h2>

<table>
  <tr>
    <th>Cliente</th>
    <th>Celular</th>
    <th>Monto</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>78558140</td>
    <td>25,100.00</td>
  </tr>
  <tr>
  <td>Roberto Listorit</td>
    <td>78258140</td>
    <td>23,100.00</td>
  </tr>
  <tr>
    <td>Ernsto Cañizares</td>
    <td>65215590</td>
    <td>10,000.00</td>
  </tr>
 
</table>
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
    
      <h3>Solicitar Tarjeta</h3>

        
  
    </div>
    
    <div class="icon">
    
      <i class="fa fa-fire"></i>
    
    </div>
    
    <a href="/" class="small-box-footer">

      Más info <i class="fa fa-arrow-circle-right"></i>

    </a>

  </div>
    </div>
    
  );
};

export default ApprovalScreencreen;
