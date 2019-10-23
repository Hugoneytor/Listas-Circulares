import Ruta from "./ruta.js";
import Base from "./base.js";

class Main{
    constructor(){
        let base = new Base(
            document.querySelector("#tablaArt"),            
        );        
    document.querySelector("#btnAgregar").addEventListener("click",()=>{
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objRuta = {
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion
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