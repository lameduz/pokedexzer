var app = angular.module('pokedex',['ngResource']);
var pokelist = {};

app.controller('PokedexController',['$scope','$http', function($scope,$http)
{
	$scope.pokemon = [];

	$http({
		method: 'GET',
		url: 'http://pokeapi.co/api/v1/pokedex/1/'
	})
	.success(function (data, status, headers, config) {

		//$scope.pokemon = data.pokemon;
		angular.forEach(data.pokemon,function(pokemon,key)
		{
			$scope.pokemon = $resource(pokemon.resource_uri);
		});


	})
	.error(function (data, status, headers, config) {
		console.log('ya un blem');
	});
}]);
