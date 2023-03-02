
let valorVehiculo = 0
let seguroContraTodo=0
let totalSeguro=0
let seguros=0
let categoria=0
let total=0


const SERVICIO=12000

//Que la funcion sea si es un auto o moto...si es moto no hay seguro

ingreso=prompt("Desea solicitar asesoria para su seguro?SI o NO?")

while (ingreso == "SI"){
    seguros+=1;

    valorVehiculo=Number(prompt("Ingrese el valor aproximado de su vehiculo"));

    if (valorVehiculo < 500000){
        categoria=valorVehiculo*0.01
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        if (seguroTotal=="SI") {
            seguroContraTodo=valorVehiculo*0.015
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }

    }else if(valorVehiculo >500000){
        categoria=valorVehiculo*0.02
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        
        if (seguroTotal=="SI") {
            seguroContraTodo=valorVehiculo*0.018
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
            
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }

    }else if(valorVehiculo>1000000){
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        categoria=valorVehiculo*0.3

        if (seguroTotal=="SI") {
            seguroContraTodo=valorVehiculo*0.025
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }
    }
    function totalConImp(total){
        total*1,21
    }
    const SEGURO=(totalConImp)
    console.log(SEGURO)

    document.write("El valor de su seguro numero " + seguros + " es de " + SEGURO + "<br>")
    ingreso=prompt("Quiere volver a cotizar su seguro o cotizar algun auto mas? SI o NO?")

    if(ingreso == "SI"){
        console.log("Volveremos a calcular su seguro")
        console.log("-------")
        totalSeguro = 0 ;
    }
}


if(ingreso =="NO"){
    document.write("Esperamos vuelva pronto")
}

