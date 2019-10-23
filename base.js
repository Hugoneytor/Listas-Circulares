export default class Base{
    constructor(tableRutas){
        //Tabla de los Artículos
        this._tableRutas = tableRutas;
        //Número de Artículos
        this._numRutas = 0;
        //Lista de las Rutas
        this._primeraRuta = null;
        this._ultimaRuta = null;
        
    }

    crearRecoorrido(baseInicio, horaInicio, horaFin){
      
    }

    _borrar(row,ruta){
        let btnBorrar = document.createElement("input");
        btnBorrar.type="button";
        btnBorrar.value = "Borrar";
        btnBorrar.className = "btn btn-danger";
        btnBorrar.addEventListener("click",()=>{
          this.borrarRuta(row, ruta);
        });
        row.cells[5].innerHTML="";
        row.cells[5].appendChild(btnBorrar);
    }

    AgregarRuta(objRuta){
      if(this._primeraRuta == null){
        this._primeraRuta = objRuta;
        this._ultimaRuta = objRuta;
      }else{
      this._agregarYOrdenar(objArticulo);
      }
      // }else{
      //   let anterior = this._ultimaRuta;
      //   this._ultimaRuta.siguiente = objRuta;
      //   this._ultimaRuta = objRuta;
      //   this._ultimaRuta.anterior = anterior;

       
      // }
      this._ultimaRuta.siguiente = this._primeraRuta;
      this._primeraRuta.anterior = this._ultimaRuta;
      
     console.log(this._primeraRuta);
    }
    _agregarYOrdenar(objArticulo){
      let obj = objArticulo;
     if(obj < this._primerArticulo){
       obj.siguiente = this._primerArticulo;
       this._primerArticulo.anterior = obj;
       this._primerArticulo = obj;
     }else if(obj > this._ultimoArticulo){
       obj.anterior = this._ultimoArticulo;
       this._ultimoArticulo.siguiente = obj;
       this._ultimoArticulo = obj;
     }else{
       let guardar = this._primerArticulo.siguiente;
       while(guardar != null && obj.siguiente == null){
         if(guardar > obj){
           obj.siguiente = guardar;
           obj.anterior = guardar.anterior;
           guardar.anterior.siguiente = obj;
           guardar.anterior = obj;
         }
         guardar = guardar.siguiente;
       }
     }
     this._ultimaRuta.siguiente = this._primeraRuta;
     this._primeraRuta.anterior = this._ultimaRuta;
    }


    //Método para borrar un artículo
    borrarRuta(row,ruta){
      let pos = this._buscarRuta(ruta.codigo);
      if(pos.siguiente == pos){
        pos = null;
      }else{
      if(pos == this._primeraRuta){
        this._primeraRuta = pos.siguiente;
        this._ultimaRuta.siguiente = this._primeraRuta;
        this._primeraRuta.anterior = this._ultimaRuta;
      }
      else if(this._ultimaRuta == pos){
        let posA = this._buscarAnterior(ruta.codigo);
        pos.siguiente.anterior = posA; 
        posA.siguiente = pos.siguiente;
      }else{
        let posA = this._buscarAnterior(articulo.codigo);
        posA.siguiente = pos.siguiente; 
        pos.siguiente.anterior = posA; 
      }
      }
      console.log(this._primeraRuta);
      row.remove();
    }

    _buscarAnterior(codigo){
      var buscar = this._primeraRuta;
      while(buscar.siguiente.codigo != codigo){
          buscar = buscar.siguiente;
        }
        return buscar;
    }
    
  
    _buscarRuta(codigo){
      var buscar = this._primeraRuta;
      while(buscar.codigo != codigo){
          buscar = buscar.siguiente;
        }
        return buscar;
      }

    //Agrega la ruta a la interfaz de la tabla
    AgregarEnTabla(ruta, objRuta){
        //Creación de las filas y columnas
        let row = this._tableRutas.insertRow(-1);
        let cellRuta = row.insertCell(0);
        let cellMatricula = row.insertCell(1);
        row.insertCell(2);
        

        cellRuta.innerHTML = ruta.numero;
        cellMatricula.innerHTML = ruta.matricula;
        
        this._borrar(row,ruta);

        this._numRutas++; //Se aumenta el número de rutas totales



        //Se imprime la información del total de artículos y el precio


        //Se crea un objeto con toda la información del artículo
         objRuta = {
            numero: ruta.codigo,
            matricula: ruta.matricula,
        };
        return objRuta;
      
        //Se agrega el artículo al vector 

    }
  }
