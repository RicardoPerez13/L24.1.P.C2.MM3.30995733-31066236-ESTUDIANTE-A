import CL_estudiante from "./CL_estudiante.js";
export default class CL_becado extends CL_estudiante{
    constructor(nombre,acumNotas,cantidadM){
        super(nombre,acumNotas,cantidadM)
    }

    montoBeca(){
        if(this.promNotas()<10)
        return 0;
        else
        if(this.promNotas<15)
        return 20;
        else
        return 30;
    }
}