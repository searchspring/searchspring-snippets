this.on('afterSearch', function($scope) {
	// ratings star classes
	var star = 'yotpo-icon-star';
	var half_star = 'yotpo-icon-half-star';
	var empty_star = 'yotpo-icon-empty-star';
	
	angular.forEach($scope.results, function(result) {
		// create array of ratings stars
		var rating = result.reviews_product_score;
		if (rating) {
			var rating_array = [];
			var full_stars = Math.floor(rating / 1);

			for (var i = 0; i < full_stars; i++) {
				rating_array.push(star);
			}

			if (rating - full_stars >= .75) {
				rating_array.push(star);
			} else if (rating - full_stars >= .3) {
				rating_array.push(half_star);
			}

			for (var i = rating_array.length; i < 5; i++) {
				rating_array.push(empty_star);
			}

			result.rating_array = rating_array;
		}
	});
});