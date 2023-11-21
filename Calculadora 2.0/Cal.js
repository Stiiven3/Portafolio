const pantalla=document.querySelector(".pantalla");
const botones= document.querySelectorAll(".btn");


botones.forEach(boton=>{

    boton.addEventListener("click", (event) => {
        const botonApretado = boton.textContent;
       
            
        if(pantalla.textContent==="0"||pantalla.textContent==="Error"){
            pantalla.textContent=botonApretado;
       }else{
        pantalla.textContent += botonApretado; /* me le asigna nuevamente el boton si no es el caracter 0  
        y asi puedo escribir de manera indefinida*/
       }

    });

});
