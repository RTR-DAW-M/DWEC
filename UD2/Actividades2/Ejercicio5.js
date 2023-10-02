let num = parseInt(prompt ("Introduce un número:"));
if (num % 2 == 0 && num % 3 == 0 && num % 5 == 0)
{
    alert("El número " + num + " es par, es múltiplo de 3, es multiplo de 5.");
}
else if(num % 2 != 0 && num % 3 == 0 && num % 5 == 0)
{
    alert("El número " + num + " es impar, es múltiplo de 3, es multiplo de 5.");
}
else if(num % 2 == 0 && num % 3 != 0 && num % 5 == 0)
{
    alert("El número " + num + " es par, no es múltiplo de 3, es multiplo de 5.");
}
else if(num % 2 == 0 && num % 3 == 0 && num % 5 != 0)
{
    alert("El número " + num + " es par, es múltiplo de 3, no es multiplo de 5.");
}
else if(num % 2 == 0 && num % 3 == 0 && num % 5 != 0)
{
    alert("El número " + num + " es par, no es múltiplo de 3, no es multiplo de 5.");
}
else if(num % 2 != 0 && num % 3 != 0 && num % 5 != 0)
{
    alert("El número " + num + " es impar, no es múltiplo de 3, no es multiplo de 5.");
}
else if(num % 2 != 0 && num % 3 == 0 && num % 5 != 0)
{
    alert("El número " + num + " es impar, es múltiplo de 3, no es multiplo de 5.");
}
else if(num % 2 != 0 && num % 3 != 0 && num % 5 == 0)
{
    alert("El número " + num + " es impar, no es múltiplo de 3, es multiplo de 5.");
}