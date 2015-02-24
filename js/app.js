var app = angular.module('pokedex',[ ]);
var pokelist;

app.controller('PokedexController',['$scope','$http', function($scope,$http)
{
	$scope.pokemon = {};

	$http({
		method: 'GET',
		url: 'http://pokeapi.co/api/v1/pokedex/1/'
	})
	.success(function (data, status, headers, config) {
 	console.log(data);
   
})
	.error(function (data, status, headers, config) {
    // Une erreur est survenue
});
}]);
