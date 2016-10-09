/*
	- Générer un tableau selon paramètres OK
		récupérer dimensions via input OK
		donner des coordsonnées au tableau automatiquement OK
	- Créer l'apparition aléatoire de la fourmi OK
		random coordonées OK
		assigner les random coordonées à la fourmi OK
	- Créer le déplacement aléatoire OK
		random case à rejoindre OK
		rejoindre la case OK
	Eviter la sorties par les murs
		déterminer où sont les murs => utilise x, y et min/max pour déterminer les bords de map
		empêcher la sortie en relançant un random jusqu'à ce que déplacement possible
*/
var width;
var height;
var RandomRowFourmi;
var RandomColumnFourmi;
var movement;
var numberFourmi;
var fourmis = [];
	
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
function randomCaseFourmi(){
	RandomRowFourmi = Math.floor(Math.random() * height) + 1;
	RandomColumnFourmi = Math.floor(Math.random() * width) + 1;
	console.log('Random Case : ' + RandomColumnFourmi + ', ' + RandomRowFourmi);
}

	// Création de la fourmi qui apparait aléatoirement dans le tableau
function createFourmi(nombre){
		for( i = 1; i <= nombre; i++){
			randomCaseFourmi();
			$('td[data-row="'+RandomRowFourmi+'"][data-column="'+RandomColumnFourmi+'"]').text('#');
			fourmis[i] = { 'x' : RandomColumnFourmi, 'y' : RandomRowFourmi };
			console.log(fourmis[i]);
		}
}

	// Génère la case cible du déplacement
function randomCase(){
	movement = Math.floor(Math.random() * 8) + 1;
}

function movementFourmi(number){
	randomCase();
	console.log('case à bouger: ' + movement);

	if (movement === 1){
		fourmis[number].x--;
		fourmis[number].y--;
	}
	else if(movement === 2){
		fourmis[number].y--;
	}
	else if(movement === 3){
		fourmis[number].x++;
		fourmis[number].y--;
	}
	else if(movement === 4){
		fourmis[number].x++;
	}
	else if(movement === 5){
		fourmis[number].x++;
		fourmis[number].y++;
	}
	else if(movement === 6){
		fourmis[number].y++;
	}
	else if(movement === 7){
		fourmis[number].x--;
		fourmis[number].y++;
	}
	else if(movement === 8){
		fourmis[number].x--;
	}
}

  // Au moment du clic : génération du monde
$('button').on('click', function(){
	$('table').html('');
	width = parseInt($('#x').val());
	height = parseInt($('#y').val());
	numberFourmi = parseInt($('#number_fourmi').val());

	createTable(width, height);
	createFourmi(numberFourmi);

	setInterval(function(){
		for (i = 1 ; i <= numberFourmi ; i++){
			movementFourmi(i);
		}
		$('td').text('');

		for(i = 1 ; i <= numberFourmi ; i++){
			$('td[data-row="' + fourmis[i].y + '"][data-column="' + fourmis[i].x +'"]').text('#');
		}
	}, 1000);
});
