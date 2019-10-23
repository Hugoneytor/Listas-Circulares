export default class Ruta{
    constructor(ruta){
        this._numero = ruta.numero;
        this._matricula = ruta.matricula;
        this._siguiente = null;
        this._anterior = null;
    }
   //Lectura de los valores 
    get numero(){
        return this._numero;
    }
    get matricula(){
        return this._matricula;
    }
    get siguiente(){
        return this._siguiente;
    }
    get anterior(){
        return this._anterior;
    }
    //Cambio de Valores
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
    set anterior(anterior){
        this._anterior = anterior;
    }

    toString(){
        let s = `La ruta ${this._numero} tiene la matrícula ${this._matricula}`;
        return s
    }
}