let empezar = prompt("escriba ¨prestamo¨ para comenzar")

    while(empezar == "prestamo"){
        let prestamo = prompt ("ingrese el monto del prestamo solicitado")

        let cuotas = prompt ("Ingrese la cantidad de cuotas que desea pagar")

        function costoCuotas (cuotas,prestamo) {return cuotas * (prestamo * 0.01)}

        let resultado = costoCuotas (prestamo,cuotas) + prestamo / cuotas;

        alert ("vas a pagar" + cuotas + "CUOTAS DE $" + resultado)
    }