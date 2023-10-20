<script>
function validar(){

	let nombre= document.getElementById("nombre");
	let mensaje=document.getElementById("mensaje");
	let mail=document.getElementById("mail");
	let ltaErrores=document.getElementById("ltaErrores");

	if (nombre.value==""){
		console.log("nombre invalido")
	}

	if (mensaje.value=="" || mensaje.value.length > 200){
		console.log("mensaje invalido")
	}


	let item=document.createElement("li");
	ltaErrores.appendChild(item);
	item.innerHTML="";
	return false;
	

}
</script>
