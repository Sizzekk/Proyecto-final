var productos = []
getData()
let carrito = []

let productwrapper = document.getElementById ("productwrapper")

function visualitem (productsguide){
    productsguide.forEach(perifericos =>  {
    const lista = document.createElement ("div")
    lista.innerHTML = `<div class = "producto">
                        <img src="../assets/img/${perifericos.img}"></img>
                        <h2>${perifericos.Nombre}</h2>
                        <h3>Precio: ${perifericos.Precio}</h3>
                        <h4>id: ${perifericos.id}</h4>
                        <button class = "agregarcarrito" id = "${perifericos.id}"> agregar </button> </div>`
    productwrapper.appendChild (lista)
    });
    document.querySelectorAll(".agregarcarrito").forEach(button => {
        button.addEventListener("click", function(ev){
        const idbutton = ev.currentTarget.id
        const selectproduct = productos.find (producto => producto.id == idbutton)
        carrito.push (selectproduct)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        reloadcarrito()
        })
    });
}

async function getData() {
  const url = "../json/productos.json"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    productos = result
    init()
  } catch (error) {
    console.error(error.message)
  }
}

function init(){
  visualitem(productos)
}

function reloadcarrito(){
let carritostring = localStorage.getItem("carrito")
let carritoarray = JSON.parse (carritostring)
document.getElementById("contadorcarrito").innerHTML=carritoarray.length
}
reloadcarrito()