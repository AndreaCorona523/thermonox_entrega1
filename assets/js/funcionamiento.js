var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$(document).ready(()=> {
	$('#texto_calefacciones').show();
	$('#texto_calentamiento').hide();
	$('#texto_circulacion').hide();
	$('#texto_regulacion').hide();
	$('#texto_aire').hide();
	$('#td_mostrarCalefactores').addClass("caracteristicas_funcionamiento_selected_button");

	$('#mostrarCalefactores').click(function() {
		$('#texto_calefacciones').show();
		$('#texto_calentamiento').hide();
		$('#texto_circulacion').hide();
		$('#texto_regulacion').hide();
		$('#texto_aire').hide();
		$('#td_mostrarCalefactores').addClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCalentamiento').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCirculacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarRegulacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarAire').removeClass("caracteristicas_funcionamiento_selected_button");

	});	

	$('#mostrarCalentamiento').click(function() {
		$('#texto_calefacciones').hide();
		$('#texto_calentamiento').show();
		$('#texto_circulacion').hide();
		$('#texto_regulacion').hide();
		$('#texto_aire').hide();
		$('#td_mostrarCalefactores').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCalentamiento').addClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCirculacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarRegulacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarAire').removeClass("caracteristicas_funcionamiento_selected_button");
	});

	$('#mostrarCirculacion').click(function() {
		$('#texto_calefacciones').hide();
		$('#texto_calentamiento').hide();
		$('#texto_circulacion').show();
		$('#texto_regulacion').hide();
		$('#texto_aire').hide();
		$('#td_mostrarCalefactores').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCalentamiento').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCirculacion').addClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarRegulacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarAire').removeClass("caracteristicas_funcionamiento_selected_button");
	});

	

	$('#mostrarRegulacion').click(function() {
		$('#texto_calefacciones').hide();
		$('#texto_calentamiento').hide();
		$('#texto_circulacion').hide();
		$('#texto_regulacion').show();
		$('#texto_aire').hide();
		$('#td_mostrarCalefactores').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCalentamiento').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCirculacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarRegulacion').addClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarAire').removeClass("caracteristicas_funcionamiento_selected_button");

	});

	

	$('#mostrarAire').click(function() {
		$('#texto_calefacciones').hide();
		$('#texto_calentamiento').hide();
		$('#texto_circulacion').hide();
		$('#texto_regulacion').hide();
		$('#texto_aire').show();
		$('#td_mostrarCalefactores').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCalentamiento').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarCirculacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarRegulacion').removeClass("caracteristicas_funcionamiento_selected_button");
		$('#td_mostrarAire').addClass("caracteristicas_funcionamiento_selected_button");
	});
	
})


