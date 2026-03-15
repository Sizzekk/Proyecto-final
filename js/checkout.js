document.getElementById("submitcheckout").addEventListener("click", function(e){

    e.preventDefault();

    localStorage.removeItem("carrito");

    window.location.href = "tarjeta.html";
});

function shownotification(notificacion, mensaje){
    const lista = document.getElementById ("notify1")
    lista.innerHTML = `<div class="alert alert-${notificacion}" role="alert">
                        ${mensaje}
                                                                </div>`
}
shownotification("success","Formulario Rellenado correctamente")

