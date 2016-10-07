/*
	- Générer un tableau selon paramètres OK
		récupérer dimensions via input OK
		donner des coordsonnées au tableau automatiquement OK
	- Créer l'apparition aléatoire de la fourmi
		random coordonées
		assigner les random coordonées à la fourmi
	- Créer le déplacement aléatoire

		
*/
var width;
var height;
var RandomRowFourmi;
var RandomColumnFourmi;
	
	// Tableau selon les valeurs de l'input
function createTable(x, y){
	for (var i = 1; i <= y; i++) {
		$('table').append('<tr data-row ="'+i+'""></tr>');
		for (var j = 1; j <= x; j++){
			$('tr[data-row="'+i+'"]').append('<td data-row="'+i+'"data-column="'+j+'"></td>');
		}
	}
}

	// Génère des coordonnées pour l'apparition de la fourmi
function randomCase(){
	RandomRowFourmi = Math.floor(Math.random() * height) + 1;
	RandomColumnFourmi = Math.floor(Math.random() * width) + 1;
	console.log(RandomColumnFourmi + ', ' + RandomRowFourmi);
}

	// Création de la fourmi qui apparait aléatoirement dans le tableau
function createFourmi(){
	randomCase();
	$('td[data-row="'+RandomRowFourmi+'"][data-column="'+RandomColumnFourmi+'"]').text('#');
}

  // Au moment du clic : génération du monde
$('button').on('click', function(){
	$('table').html('');
	width = parseInt($('#x').val());
	height = parseInt($('#y').val());
	createTable(width, height);
	createFourmi();

	setInterval(function(){
		

		
	}, 1000);
});
