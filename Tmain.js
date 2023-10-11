nombre_alumno_array=[]; //Este array sirve para guardar el nombre de los alumnos

function submit()
{
var ver_alumno_array=[]; //Para mostrar a los nombres de los alumnos

for (var j=1;j<=4; j++)
{
    var nombre_alumno= document.getElementById("nombre_alumno_"+j).value;
    console.log(nombre_alumno);
    nombre_alumno_array.push(nombre_alumno); //push agrega elementos al array
}
var longitud_nombre_alumnos_array=nombre_alumno_array.length;//Mostrar la longitud
console.log(longitud_nombre_alumnos_array);

for (var k=0;k<longitud_nombre_alumnos_array;k++)
{
    ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] + "</h4>");
    console.log(ver_alumno_array);
}

console.log(ver_alumno_array);
document.getElementById("ver_nombre_con_comas").innerHTML=ver_alumno_array;

var remove_comas=ver_alumno_array.join("");
console.log(remove_comas);
document.getElementById("ver_nombre_sin_comas").innerHTML = remove_commas;


    document.getElementById("botón_enviar").style.display = "none";


}
