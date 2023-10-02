let num;
let res = 0;
for (let i = 0; num != 0; i++)
{
    num = parseInt(prompt ("Introduce un número:"));
    res = res + num;
}
document.write("El resultado es: " + res);