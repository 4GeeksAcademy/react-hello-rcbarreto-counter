//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";

let digito = 0
let intervalo = null
let intervaloPausado = false
let intervaloNegativo = false


let app = ReactDOM.createRoot(document.getElementById('app'))
const appRenderizada = () => {app.render(<><SecondsCounter digito = {digito} />

<div className="d-flex">

    <input type="text" id="ponerEnReversa" className="form-control" style={{ width : "335px" }} 
   placeholder="Ingrese un numero para la cuenta regresiva" />
    
    <div  className="btn-group" role="group" aria-label="Basic example">

    <button onClick={()=>{
            
            digito = document.getElementById("ponerEnReversa").value
            intervaloReverso()
             
    }} type="button" className="btn btn-primary">Poner en reversa</button>

        <button onClick={()=>
            
            pausarIntervalo()
             
        } type="button" className="btn btn-primary">Pausar</button>
        
        <button onClick={()=>
          reiniciarInervalo()
        } type="button" className="btn btn-primary">Reiniciar</button>
        
        <button onClick={()=>
           
           resumirIntervalo()

        } type="button" className="btn btn-primary">Resumir</button>

    </div>
   
 </div>


</>
);
};


const startInterval = () => {
     
      intervalo = setInterval(() => {
        digito++;
        
        appRenderizada(); 
        
      }, 1000);
    
  };
 
const resumirIntervalo = () => {

    if (!intervaloNegativo && intervaloPausado) {
                        
            startInterval()
           
        } else if(intervaloNegativo && intervaloPausado) {

        intervaloReverso();
        
      }
  };

const pausarIntervalo = () => {
    
    clearInterval(intervalo);
    intervaloPausado = true 
  
  };

  const reiniciarInervalo = () => {

    clearInterval(intervalo); 
    
    intervaloNegativo = false;
    digito = 0; 
    
    startInterval()

  };

  const intervaloReverso = () =>{

    clearInterval(intervalo);
    
   
    intervalo = setInterval(() => {
        digito--;
        appRenderizada(); 
      }, 1000);
      intervaloNegativo = true
    }

 startInterval()