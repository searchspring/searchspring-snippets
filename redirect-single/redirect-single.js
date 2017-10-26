this.on('afterSearch', function($scope) {
        // if single product goto product page
        if ($scope.singleResult && $scope.q && $scope.breadcrumbs.length <= 1 && !$scope.moduleName) {
                window.location.replace($scope.singleResult);
        }
});