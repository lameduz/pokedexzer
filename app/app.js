var app = angular.module('pokedex',['ngResource']);
var pokelist = [{}];

app.controller('PokedexController',['$scope','$http', function($scope,$http)
{
	$scope.pokedex = []

	$http({
		method: 'GET',
		url: 'http://pokeapi.co/api/v1/pokedex/1/'
	})
	.success(function (data, status, headers, config) {

		//$scope.pokemon = data.pokemon;
		angular.forEach(data.pokemon,function(pokemon,key)
		{
			$scope.pokedex.push({info:pokemon});
		});
	console.log($scope.pokedex);

	})
	.error(function (data, status, headers, config) {
		console.log('ya un blem');
	});

}]);
