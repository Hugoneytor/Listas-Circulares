import Ruta from "./ruta.js";
import Base from "./base.js";

class Main{
    constructor(){
        let base = new Base(
            document.querySelector("#tablaArt"),            
        );        
    document.querySelector("#btnAgregar").addEventListener("click",()=>{
        let numero = Number(document.querySelector("#codigo").value);
        let matricula = Number(document.querySelector("#nombre").value);
          
        let toString = document.querySelector("#toString");
        
        let objRuta = {
            numero: numero,
            matricula: matricula,

        };

        let ruta = new Ruta(objRuta);
        
            base.AgregarRuta(ruta);
            base.AgregarEnTabla(ruta);
            //inventario._invertirRutas(ruta);

        toString.textContent = ruta.toString();
        
    });
    
    }
}

var m = new Main()