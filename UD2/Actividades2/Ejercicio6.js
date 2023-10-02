let num1 = parseInt(prompt ("Introduce un número:"));
let num2 = parseInt(prompt ("Introduce un número:"));
let caracter = prompt ("Introduce un carácter(+,-,* o /):");

if (caracter == '+')
{
    let res = num1 + num2;
    alert("El resultado es: " + res);
}
if (caracter == '-')
{
    let res = num1 - num2;
    alert("El resultado es: " + res);
}
if (caracter == '*')
{
    let res = num1 * num2;
    alert("El resultado es: " + res);
}
if (caracter == '/')
{
    let res = num1 / num2;
    alert("El resultado es: " + res);
}