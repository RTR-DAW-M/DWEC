let numHer = parseInt(prompt ("Introduce el número de hermanos que tienes:"));
let cantidad = parseInt(prompt ("Introduce una cantidad:"));
if (numHer >= 3)
{
    let descuento = cantidad * 0.85;
    alert("La cantidad es: " + descuento);
}
else if (numHer <= 3 && numHer > 0)
{
    let descuento = cantidad * 0.95;
    alert("La cantidad es: " + descuento);
}
if (numHer == 0)
{
    alert("La cantidad es: " + cantidad);
}
