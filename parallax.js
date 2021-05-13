$(document).ready(function(){

	$(window).scroll(function(){   /*scroll: efecto de movimient de un objeto*/
		var windowWidth = $(window).width();
		if (windowWidth > 800){
			var scroll = $(window).scrollTop();  /* medida del scroll top hacia ariba, calculamos la posicion de la barra y luego lo dividimos en % paa ver que tan rapido se va a mover*/

			$('header .textos').css({   /*animamos textos con el codigo css transform, queemos que traslade el texto vertical el segundo valor colocamos el primero es 0 xq no va a moverse a los lados*/
				'transform': 'translate(0px,' + scroll / 2 + '%)' /* scroll posicion de la pantalla entre 2*/
			});     

			$('.acerca-de article').css({   /*animamos pero el acerca-de*/
				'transform': 'translate(0px, -' + scroll / 4 + '%)'  /* ponemos un - para que el valor quede en negativo y vaya pade arriba abajo*/
			});
		}
	});

	$(window).resize(function(){  /* condicional simple si hay medida cambiaria se genera  esa transformacion*/
		var windowWidth = $(window).width();
		if (windowWidth < 800){
			$('.acerca-de article').css({
					'transform': 'translate(0px, 0px)'
			});
		}
	});
});