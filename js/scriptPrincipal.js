//CUANDO DOCUMENTO ESTE LISTO
$(document).ready(principal);

//Ejecutamos script principal controlador de slides 
function principal()
{ 

	var imgItems = $('.slider li').length; // Numero de Slides o fotos
	var imgPos = 1;
	// Agregando paginacion "puntos"
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 

	//------------------------
	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#EEF211'}); // Damos color al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 10000);
	//tiempo que se demora 10s en slides automatico 

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#D9D9D9'});
		$(this).css({'color': '#EEF211'});//color

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#D9D9D9'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#EEF211'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#D9D9D9'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#EEF211'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}
}









	