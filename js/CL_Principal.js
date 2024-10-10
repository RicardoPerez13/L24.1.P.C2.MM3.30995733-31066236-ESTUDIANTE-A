import CL_becado from "./CL_becado.js";

let estudiante=new CL_becado("Mary",132,8)

let salida=document.getElementById("salida")

salida.innerHTML=`
Nombre del estudiante: ${estudiante.nombre}
<br>Acumulado de notas: ${estudiante.acumNotas}
<br>Cantidad de Materias: ${estudiante.cantidadM}
<br>Notas promedio: ${estudiante.promNotas()} 
<br>${estudiante.nombre} recibe una beca de: $${estudiante.montoBeca()}`