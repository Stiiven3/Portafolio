const pantalla = document.querySelector(".pantalla");/*
La línea de código que has proporcionado se refiere a la selección de un elemento HTML con la clase pantalla utilizando JavaScript. 
La variable pantalla ahora contiene una referencia al primer elemento HTML que tiene la clase pantalla. */
const botones = document.querySelectorAll(".btn");/*

La línea de código que has proporcionado se utiliza para seleccionar todos los elementos HTML que tienen la clase .btn utilizando JavaScript. 
La variable botones contendrá una NodeList (una lista de nodos) que contiene todos los elementos que coinciden con el selector.
*/ 

botones.forEach(boton => {
    boton.addEventListener("click", () => {
       const  botonApretado= boton.textContent;

    // Resetear la pantalla a 0 si se presiona el botón "C"
        if(boton.id==="c"){

            pantalla.textContent="0";
            return;
        }
 // Borrar el último carácter en la pantalla si se presiona el botón "borrar"
        if(boton.id==="borrar"){
            if(pantalla.textContent.length===1 || pantalla.textContent==="Error"){
                pantalla.textContent="0";
            }else{
                pantalla.textContent= pantalla.textContent.slice(0,-1);
            }
           
            return;
        }
// Calcular el resultado si se presiona el botón "igual"
        if(boton.id==="igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);// evaluando
            }catch{
                pantalla.textContent="Error";
            }
           
            return;
        }
       if(pantalla.textContent==="0"||pantalla.textContent==="Error"){
            pantalla.textContent=botonApretado;
       }else{
        pantalla.textContent += botonApretado;
       }

       
       
    });
});
