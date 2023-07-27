// Ejercicio 11
//Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

// let coche = 0.20
// let moto = 0.10
// let autobus = 0.5
// let litro1 = 5
// let litro2 = 10

// let vehiculo = prompt('Tipo vehículo')
// vehiculo = vehiculo.toLowerCase()
// let km = prompt('Kilometros recorridos')
// let litro = prompt('Litros extra consumidos')

// if (vehiculo === 'coche' && litro >= 0 && litro <= 100){
//     let total1 = ((coche * km)+litro1)
//     alert(`El total a pagar es $${total1}`)
// }else if (vehiculo === 'coche' && litro > 100){
//     let total2 = ((coche * km)+litro2)
//     alert(`El total a pagar es $${total2}`)
// }else if (vehiculo === 'moto' && litro >= 0 && litro <= 100){
//     let total1 = ((moto * km)+litro1)
//     alert(`El total a pagar es $${total1}`)
// }else if (vehiculo === 'moto' && litro > 100){
//     let total2 = ((moto * km)+litro2)
//     alert(`El total a pagar es $${total2}`)
// }else if (vehiculo === 'autobus' && litro >= 0 && litro <= 100){
//     let total1 = ((autobus * km)+litro1)
//     alert(`El total a pagar es $${total1}`)
// }else if (vehiculo === 'autobus' && litro > 100){
//     let total2 = ((autobus * km)+litro2)
//     alert(`El total a pagar es $${total2}`)
// }else{
//     alert('Intentar nuevamente')
// }