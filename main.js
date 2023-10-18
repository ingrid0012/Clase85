canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d"); //esta variable me permite crear un lienzo en 2d

color="red";

ctx.beginPath(); //le indica al lienzo que empiece a dibujar
ctx.strokeStyle=color; //establece el color del objeto dibujado
ctx.lineWidth=2; //establecer el ancho de la linea de nuestro objeto
ctx.arc(200,200,40,0,2*Math.PI);

canvas.addEventListener("mousedown", mymousedown);
function mymousedown()
{
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLef; //obtener las coordenadas en el lienzo
    mouse_y=e.clientY-canvas.offsetTop;
}
