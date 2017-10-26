this.on('afterSearch', function($scope) {
    var collectionMatch = window.location.pathname.match(/\/collections\/([^\/]+)/);
    
    if(!collectionMatch || !collectionMatch[1]) {
        return;
    }
    
    var collection = collectionMatch[1];
    
    angular.forEach($scope.results, function(result) {
        result.url = result.url.replace('/products/', '/collections/' + collection + '/products/');
    });
});