export default class CL_estudiante{
    constructor(nombre,acumNotas,cantidadM){
        this.nombre=nombre;
        this.acumNotas=acumNotas;
        this.cantidadM=cantidadM;
    }
    set nombre(n){
        return this._nombre=n;
        }
        
        get nombre(){
        return this._nombre;
        }
        set acumNotas(a){
            return this._acumNotas=+a;
            }
            
            get acumNotas(){
            return this._acumNotas;
            }
            set cantidadM(c){
                return this._cantidadM=+c;
                }
                
                get cantidadM(){
                return this._cantidadM;
                }
  
    promNotas(){
        return this.acumNotas/this.cantidadM
    }
}