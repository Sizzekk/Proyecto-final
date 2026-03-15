document.getElementById("submitpago").addEventListener("click", function(){
    Swal.fire({
  position: "center",
  icon: "success",
  title: "Pago Realizado",
  showConfirmButton: false,
  timer: 1500
});
setTimeout(() => {
location.href = "../index.html"
}, 3000);
})
