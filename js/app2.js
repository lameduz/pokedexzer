var app = angular.module('app',['ngRoute']);

function Router($routeProvider)
{
	$routeProvider.when('/',{
	templateUrl: 'app/home/home.html',
	controller: 'HomeCtrl'
	}).otherwise({
		templateUrl: 'app/pokemon/pokemon.html',
		controller:'PokemonController'
	});
}

app.config(Route);