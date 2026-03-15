let carritowrapper = document.getElementById ("carritowrapper")
function visualitem (){
    let carritostring = localStorage.getItem("carrito")
    let carritoarray = JSON.parse (carritostring)
    carritoarray.forEach((perifericos, index) =>  {
    const lista = document.createElement ("div")
    lista.innerHTML = ` <div class = "producto">
                        <img src="../assets/img/${perifericos.img}"></img>
                        <h2>${perifericos.Nombre}</h2>
                        <h3>Precio: ${perifericos.Precio}</h3>
                        <h4>id: ${perifericos.id}</h4>
                        <button class = "eliminardelcarrito" id = "${index}"> quitar </button>
                        </div>
                        `
   carritowrapper.appendChild (lista)
    }); 
        document.querySelectorAll(".eliminardelcarrito").forEach(button => {
        button.addEventListener("click", function(ev){
        const idbutton = ev.currentTarget.id
        const carritocom = carritoarray.splice (idbutton, 1)
        localStorage.setItem("carrito", JSON.stringify(carritoarray))
        console.log(carritoarray)
        location.reload()
        })
    });
}
visualitem()