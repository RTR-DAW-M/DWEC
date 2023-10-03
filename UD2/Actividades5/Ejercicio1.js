let nombre = prompt ("Introduce tu nombre:");
let apellidos = prompt ("Introduce tus apellidos:");
let salario = parseFloat(prompt ("Introduce tu salario:"));
let edad = parseInt(prompt ("Introduce tu edad:"));
let salarioSum = 0;
if(salario <= 2000 && salario >= 1000 && edad > 45)
{
    salarioSum = salario * 0.03;
    salario = salario + salarioSum;
}
else if(salario <= 2000 && salario >= 1000 && edad <= 45)
{
    salarioSum = salario * 0.1;
    salario = salario + salarioSum;
}
if (salario <= 1000 && edad < 30)
{
    salario = 1100;
}
else if(salario <= 1000 && edad >= 30 && edad <= 45)
{
    salarioSum = salario * 0.03;
    salario = salario + salarioSum;
}
else if(salario <= 1000 && edad > 45)
{
    salarioSum = salario * 0.15;
    salario = salario + salarioSum;
}
alert("Nombre: " + nombre + '\n' + "Apellidos: " + apellidos + '\n' + "Salario: " + salario + '\n' + "Edad: " + edad)