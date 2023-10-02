let pares = "";
for (let i = 1; i < 26; i++)
{
    if (i % 2 == 0)
    {
        pares = pares + i + ',';
    }
}
alert("Los numeros pares entre 25 y 1 son: " + pares);