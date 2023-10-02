let num = parseInt(prompt ("Introduce un número:"));
let i = 1;
let factorial = 1;
while (i <= num)
{
    factorial = factorial * i;
    i++;
}
alert("El factorial de " + num + " es: " + factorial);