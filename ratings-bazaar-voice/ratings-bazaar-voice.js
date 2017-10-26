// build BV rating request
var productIds;

this.on('afterSearch', function($scope) {
  productIds = {};
  angular.forEach($scope.results, function(result) {
    productIds[result.uid] = { url: result.url };
  });
});

this.on('domReady', function($scope) {
  $BV.ui( 'rr', 'inline_ratings', { productIds : productIds, containerPrefix : 'BVRRInlineRating' });
});