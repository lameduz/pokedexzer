var pokedex = angular.module('pokedex',['ngRoute','ngResource']);

pokedex.config(['$routeProvider',
	function($routeProvider)
	{
		$routeProvider
			.when('/',{
				templateUrl: 'layout/home.html',
				controller: 'HomeController'
			}).
			when("/pokedex",{
				templateUrl:'layout/pokedex.html',
				controller:'PokedexController'
			}).
			when('/pokemon/:pokemonId',{
				templateUrl: 'layout/pokemon-info.html',
				controller:'PokemonController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);

pokedex.controller('HomeController',['$scope',function($scope)
{
	$scope.message = 'WOLLUP LA HOME';
}]);

pokedex.controller('PokedexController',['$scope','$http','$resource', function($scope,$http,$resource)
{
	$scope.pokedex = [];

	$scope.message = 'COOL LE POKEDEX BRO';
	$http.get('app/pokedex.json')
	.success(function (data, status, headers, config) {
		angular.forEach(data.objects, function(pokemon,key)
		{
			$scope.pokedex.push(pokemon);
			
		});		
	})
	.error(function (data, status, headers, config) {
		console.log('ya un blem');
	});
	$scope.getEventId = function(idFromClick)
	{
		$scope.pokefiche = angular.fromJson(idFromClick.target.attributes.data.value);
		console.log($scope.pokefiche);
		angular.forEach($scope.pokefiche.sprites, function(sprite)
		{
			$http.get('http://pokeapi.co' + sprite.resource_uri).success(function(data)
				{
					$scope.pokesprite = data.image;
				})
		})	
	}

}]);
		
		
	
		
		
			

pokedex.controller('PokemonController',['$scope','$http','$routeParams','$resource',function($scope,$http,$routeParams,$resource)
{
	var pkdx_id = $routeParams.pokemonId;
	$scope.pokemon = $resource('app/pokedex.json');
	$scope.pokemon = $scope.pokemon.get({pkdx_id: pkdx_id});
	console.log($scope.pokemon);
}]);




