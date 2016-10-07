/*
	- Générer un tableau selon paramètres OK
		récupérer dimensions via input OK
	- Créer un déplacement aléatoire
		
*/
var width;
var height;

function createTable(x, y){
	for (var i = 1; i <= y; i++) {
		$('table').append('<tr data-row ='+i+'></tr>');
	}
	for (var i = 1; i <= x; i++){
		$('tr').append('<td></td>');
	}

}




$('button').on('click', function(){
	$('table').html('');
	width = $('#x').val();
	height = $('#y').val();
	createTable(width, height);

});
