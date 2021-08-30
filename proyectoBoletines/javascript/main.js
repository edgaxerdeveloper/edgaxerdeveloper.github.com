// DOM 
/*let link = document.querySelectorAll("a");

link.forEach(function(link) {
	console.log(link);
});

let celdas  = document.querySelectorAll("td");

celdas.forEach(function(td) {
	td.addEventListener('click',function () {
		console.log(this);
	});

});*/
//Obtener los elementos de la clase .close 

let links = document.querySelectorAll(".close");

links.forEach(function (link) {
	link.addEventListener("click",function (link) {
		link.preventDefault();
		let content = document.querySelector(".content");
		//Quitarle las clases de animacionse que ya tiene
		content.classList.remove("animate__fadeInDown");
		content.classList.remove("animate__animated");
		//Agregar clases para animar su salida
		content.classList.add("animate__fadeOutUp");
		content.classList.add("animate__animated");

		setTimeout(function () {
			location.href = "/";
		},600);

		return false;
	});

});

let iconos = document.querySelectorAll("i");

iconos.forEach(function (icono) {
	//icono.classList.remove("fa-star");
});