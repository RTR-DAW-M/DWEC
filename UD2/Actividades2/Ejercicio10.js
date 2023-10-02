let num = parseInt(prompt ("Introduce un número:"));
let num2;
for (let i = 0; num != num2; i++)
{
    num2 = parseInt(prompt ("Adivina el número introducido:"));    
    if (num > num2)
    {
        alert("El número es mas mayor.");
    }
    else if (num < num2)
    {
        alert("El número es mas pequeño.");
    } 
}
alert("Numero acertado");