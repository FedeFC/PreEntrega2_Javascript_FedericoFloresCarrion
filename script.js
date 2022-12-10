let carrito = []
let ofertas = []
let total = 0

let productos = [
    {id:"1", producto:"Televisor" , categoria:"tecnologia", precio:150000, en_oferta: true, },
    {id:"2", producto:"Camara de fotos" , categoria:"tecnologia", precio:10000., en_oferta: false, },
    {id:"3", producto:"Cinturon" , categoria:"indumentaria", precio:8000, en_oferta: true, },
    {id:"4", producto:"Tablet" , categoria:"tecnologia", precio:25000, en_oferta: true, },
    {id:"5", producto:"Remera" , categoria:"indumentaria", precio:5000, en_oferta: true, },
    {id:"6", producto:"Par de zandalias" , categoria:"indumentaria", precio:4500, en_oferta: false, },
    {id:"7", producto:"Gorro" , categoria:"indumentaria", precio:9800, en_oferta: false, },
    {id:"8", producto:"Cafetera" , categoria:"electrodomesticos", precio:11200, en_oferta: true, },
    {id:"9", producto:"Heladera" , categoria:"electrodomesticos", precio:98000, en_oferta: false, },
    {id:"10", producto:"Campera" , categoria:"indumentaria", precio:30000, en_oferta: true, },
    {id:"11", producto:"Equipo de música" , categoria:"tecnologia", precio:97999, en_oferta: false, },
    {id:"12", producto:"Celular" , categoria:"tecnologia", precio:190000, en_oferta: true, },
    {id:"13", producto:"Horno microondas" , categoria:"electrodomesticos", precio:23500, en_oferta: false, },
    {id:"14", producto:"Horno electrico" , categoria:"electrodomesticos", precio:32200, en_oferta: true, },
    {id:"15", producto:"Licuadora" , categoria:"electrodomesticos", precio:12700, en_oferta: false, },
    {id:"16", producto:"Lavarropas" , categoria:"electrodomesticos", precio:132000, en_oferta: true, },
    {id:"17", producto:"Aire Acondicionado" , categoria:"electrodomesticos", precio:150000, en_oferta: true, },
    {id:"18", producto:"Par de zapatos" , categoria:"indumentaria", precio:13000, en_oferta: true, },
    {id:"19", producto:"Par de medias" , categoria:"indumentaria", precio:2500, en_oferta: false, },
    {id:"20", producto:"Smart-Watch" , categoria:"tecnologia", precio:28000, en_oferta: true, }
]

alert("Bienvenido")

let usuarioInicio = prompt("Que tipo de productos desea adquirir ?. Seleccione la primer letra de su elemento para comenzar la busqueda \n - T -Tecnologia \n - I -Indumentaria \n - E -Electrodomesticos ").toUpperCase()


if(usuarioInicio == "T"){
        alert("Ah seleccionado la categoria Tecnologia")
        
        let primeraSel = prompt("Desea ver todos los productos o solo las ofertas?. Ingrese : \n - 'T' para Todos \n - 'O' para las ofertas").toUpperCase()
        
        if(primeraSel == "T") {   
            const resultado = productos.filter((el) => el.categoria == "tecnologia")
            // console.log(resultado)
            const nombres = (resultado.map((el) => el.producto + "\n" )).join(' ')
            
            alert(`Todos los productos de tecnologia son los siguientes : \n ${nombres} `)
            alert("A continuacion indique cuales desea agregar al carrito de compras")
            

            for(i = 0; i < resultado.length; i++){
                let pregunta = prompt("Desea agregar al carrito un " + resultado[i].producto + " ?. Ingrese: \n 'S' para agregar. \n 'N' para continuar.").toUpperCase()
                if (pregunta == "S"){
                    carrito.push(resultado[i])
                }else{
                    continue
                }
            }

            // console.log(carrito)


        }else if(primeraSel == "O"){
            const resultado = productos.filter((el) => el.en_oferta == true && el.categoria == "tecnologia")
            // console.log(resultado)
            const nombres = (resultado.map((el) => el.producto + "\n" )).join(' ')

            alert(`Las ofertas de tecnologia son las siguientes : \n ${nombres} `)
            alert("A continuacion indique cuales desea agregar al carrito de compras")
           
            for(i = 0; i < resultado.length; i++){
                let pregunta = prompt("Desea agregar al carrito un " + resultado[i].producto + " ?. Ingrese: \n 'S' para agregar. \n 'N' para continuar.").toUpperCase()
                if (pregunta == "S"){
                    carrito.push(resultado[i])
                }else{
                    continue
                }
            }

            // console.log(carrito)

        }
}else if( usuarioInicio == "I"){
        alert("Ah seleccionado la categoria Indumentaria")
        let primeraSel = prompt("Desea ver todos los productos o solo las ofertas?. Ingrese : \n - 'T' para Todos \n - 'O' para las ofertas").toUpperCase()
        if(primeraSel == "T"){
            const resultado = productos.filter((el) => el.categoria == "indumentaria")
            // console.log(resultado)
            const nombres = (resultado.map((el) => el.producto + "\n" )).join(' ')

            alert(`Todos los productos de indumentaria son los siguientes : \n ${nombres} `)
            alert("A continuacion indique cuales desea agregar al carrito de compras")
           
            for(i = 0; i < resultado.length; i++){
                let pregunta = prompt("Desea agregar al carrito un " + resultado[i].producto + " ?. Ingrese: \n 'S' para agregar. \n 'N' para continuar.").toUpperCase()
                if (pregunta == "S"){
                    carrito.push(resultado[i])
                }else{
                    continue
                }
            }

            // console.log(carrito)



        }else if(primeraSel == "O"){
            const resultado = productos.filter((el) => el.en_oferta == true && el.categoria == "indumentaria")
            // console.log(resultado)
            const nombres = (resultado.map((el) => el.producto + "\n" )).join(' ')
            
            alert(`Las ofertas de indumentaria son las siguientes : \n ${nombres} `)
            alert("A continuacion indique cuales desea agregar al carrito de compras")
           
            for(i = 0; i < resultado.length; i++){
                let pregunta = prompt("Desea agregar al carrito un " + resultado[i].producto + " ?. Ingrese: \n 'S' para agregar. \n 'N' para continuar.").toUpperCase()
                if (pregunta == "S"){
                    carrito.push(resultado[i])
                }else{
                    continue
                }
            }

            // console.log(carrito)
        }
}else if (usuarioInicio == "E"){
        alert("Ah seleccionado la categoria Electrodomesticos")
        let primeraSel = prompt("Desea ver todos los productos o solo las ofertas?. Ingrese : \n - 'T' para Todos \n - 'O' para las ofertas").toUpperCase()
        if(primeraSel == "T"){
            const resultado = productos.filter((el) => el.categoria == "electrodomesticos")
            // console.log(resultado)
            const nombres = (resultado.map((el) => el.producto + "\n" )).join(' ')
            
            alert(`Todos los productos de electrodomesticos son los siguientes : \n ${nombres} `)
            alert("A continuacion indique cuales desea agregar al carrito de compras")
           
            for(i = 0; i < resultado.length; i++){
                let pregunta = prompt("Desea agregar al carrito un " + resultado[i].producto + " ?. Ingrese: \n 'S' para agregar. \n 'N' para continuar.").toUpperCase()
                
                if (pregunta == "S"){
                    carrito.push(resultado[i])
                }else{
                    continue
                }
            }

            // console.log(carrito)

        }else if(primeraSel == "O"){
            const resultado = productos.filter((el) => el.en_oferta == true && el.categoria == "electrodomesticos")
            // console.log(resultado)
            const nombres = (resultado.map((el) => el.producto + "\n" )).join(' ')
            
            alert(`Las ofertas de electrodomesticos son las siguientes : \n ${nombres} `)
            alert("A continuacion indique cuales desea agregar al carrito de compras")
           
            for(i = 0; i < resultado.length; i++){
                let pregunta = prompt("Desea agregar al carrito un " + resultado[i].producto + " ?. Ingrese: \n 'S' para agregar. \n 'N' para continuar").toUpperCase()
                if (pregunta == "S"){
                    carrito.push(resultado[i])
                }else{
                    continue
                }
            }

            // console.log(carrito)
        }
}        
 
const montos = carrito.map((el) => el.precio)

function totalCarrito() {    

    const carritoProductos = (carrito.map((el) => el.producto + "\n" )).join(' ') 

    for(let i of montos){
        total+=i

    }
        
    alert(`Detalle de la compra : \n ${carritoProductos} \n Total : $${(total).toFixed(2)} `)
    confirmacionFinal()
}

totalCarrito()

function confirmacionFinal (){
    confirm("Desea confirmar la compra ?")
    confirm == true ? alert("Felicitaciones por la compra ?") : alert("Muchas gracias por su compra")
}



