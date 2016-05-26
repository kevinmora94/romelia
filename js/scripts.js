$(document).ready(function(){
	$(function(){
		$("#tooltip").tooltip();
		$("#tooltip2").tooltip();
	});//FIN DEL TOOLTIP////////////////////////////////
	//////SLIDER///////////////////////////////////////
	$("#banner").css({"height":$(window).height() + "px"});
	$('.slider').slider({full_width: true});
	////////FIN DEL SLIDER////////////////////////////
	$('.info,.info2').animate({
		top: '0%',
	},14000);

	$('.btnIniciar').click(function(){
		$('#romeliaHistoria').animate({
			top: '0%'
		},2000);
	});
	$('.btnShananda').click(function(){
		$('#romeliaHistoria').animate({
			left: '100%'
		},2400);
		$('#shananda').animate({
			left: '0%'
		},2000);
	});
	$('.volverRomeDer').click(function(){
		$('#romeliaHistoria').animate({
			left: '0%'
		},2000);
		$('#shananda').animate({
			left: '-100%'
		},2400);
	});
	$('.btnHomero').click(function(){
		$('#romeliaHistoria').animate({
			right: '100%'
		},2400);
		$('#homero').animate({
			right: '0%'
		},2000);
	});
	$('.volverRomeIzq').click(function(){
		$('#romeliaHistoria').animate({
			right: '0%'
		},2000);
		$('#homero').animate({
			right: '-100%'
		},2400);
	});
	$('.btnLiberacion').click(function(){
		$('#romeliaHistoria').animate({
			top: '-100%'
		},2400);
		$('#liberacion').animate({
			bottom: '0%'
		},2000);
	});

	var movil = $(window).width();
	if(movil <= 512){
		$(".principal").remove();
	}
});