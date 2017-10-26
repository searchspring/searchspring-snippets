/*
  Basically "filled" is the filled star and "empty" is an empty star.
  So, "filled" and "empty" can be classes or an image file name, like filled.jpg/empty.jpg.
  Replace result.rating with whatever your rating field is.
*/

this.on('afterSearch', function ($scope) {
    // Create loop for rating stars
    angular.forEach($scope.results, function(result) {
        result.stars_array = [];
        // loop through 5 times (5 stars)
        for (var i = 1; i < 6; i++) {
            if (i <= result.rating) {
                result.stars_array.push('filled');
            } else {
                result.stars_array.push('empty');
            }
        }
    });
});