this.on('afterSearch', function($scope) {
	// Reset 'storage' for facet selects
	$scope.storage = {}; 
	
	angular.forEach($scope.facets, function(facet) {
		// Change facet.field storage value
		if (!$scope.storage[facet.field]) {
			$scope.storage[facet.field] = '';
		}
	});

	// Update filter for select menus
	angular.forEach($scope.location().get('filter'), function(filter) {
		$scope.storage[filter[1]] = filter[2];
	});		
}); 