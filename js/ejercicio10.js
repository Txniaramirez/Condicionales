// Ejercicio 10
// Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses

// let course = (4999 * 2)
// let carrera = (3999 * 6)
// let master = (2999 * 12)

// let facebook = 0.2
// let google = 0.15
// let jesua = 0.5

// let nivel = prompt('Ingresa nombre del nivel')
// nivel = nivel.toLowerCase()
// let descuento = prompt('Ingresa nombre de la beca, en caso de no tener digitar "no tengo beca"')
// descuento = descuento.toLowerCase()

// console.log(nivel)
// console.log(descuento)

// if (nivel === 'course' && descuento === 'no tengo beca'){
//     alert(`El precio total del curso elegido es ${course}`)
// }else if (nivel === 'carrera' && descuento === 'no tengo beca'){
//     alert(`El precio total del curso elegido es ${carrera}`)
// }else if (nivel === 'master' && descuento === 'no tengo beca'){
//     alert(`El precio total del curso elegido es ${master}`)
// }else if(nivel === 'course' && descuento === 'facebook'){
//     let total1 = (course * facebook)
//     let total2 = (course - total1)
//     alert(`El precio total del curso elegido es ${total2}`)
// }else if (nivel === 'carrera' && descuento === 'facebook'){
//     let total3 = (carrera * facebook)
//     let total4 = (carrera - total3)
//     alert(`El precio total del curso elegido es ${total4}`)
// }else if (nivel === 'master' && descuento === 'facebook'){
//     let total5 = (master * facebook)
//     let total6 = (master - total5)
//     alert(`El precio total del curso elegido es ${total6}`)
// }else if (nivel === 'course' && descuento === 'google'){
//     let total7 = (course * google)
//     let total8 = (course - total7)
//     alert(`El precio total del curso elegido es ${total8}`)
// }else if (nivel === 'carrera' && descuento === 'google'){
//     let total9 = (carrera * google)
//     let total10 = (carrera - total9)
//     alert(`El precio total del curso elegido es ${total10}`)
// }else if (nivel === 'master' && descuento === 'google'){
//     let total11 = (master * google)
//     let total12 = (master - total11)
//     alert(`El precio total del curso elegido es ${total12}`)
// }else if (nivel === 'course' && descuento === 'jesua'){
//     let total13 = (course * jesua)
//     let total14 = (course - total13)
//     alert(`El precio total del curso elegido es ${total14}`)
// }else if (nivel === 'carrera' && descuento === 'jesua'){
//     let total15 = (carrera * jesua)
//     let total16 = (carrera - total15)
//     alert(`El precio total del curso elegido es ${total16}`)
// }else if (nivel === 'master' && descuento === 'jesua'){
//     let total17 = (master * jesua)
//     let total18 = (master - total17)
//     alert(`El precio total del curso elegido es ${total18}`)
// }else {
//     alert('Intentar nuevamente')
// }