$('#risky').click(function () {
	$.ajax('https://www.thecocktaildb.com/api/json/v1/1/random.php').done(function (data) {
		console.log(data);
		jumbotron(data.drinks[0]);
	});
});

// Creating jumbotron (damn that sounds cool)
function jumbotron(data) {
	const $jumb = $('<div class="jumbotron row"> </div>');
	
	const jumbLeft = $('<div class="col-7"> </div>')
		.appendTo($jumb);

	$('<h1>')
		.addClass('display-4')
		.text(data['strDrink'])
		.appendTo(jumbLeft);
	
	$('<h2>')
		.addClass('font-italic')
		.text(data['strCategory'])
		.appendTo(jumbLeft);
	
	$('<h5>')
		.addClass('mt-5')
		.text('Instructions')
		.appendTo(jumbLeft);

	$('<p>')
		.addClass('lead')
		.text(data['strInstructions'])
		.appendTo(jumbLeft);
	
	const jumbRight = $('<div class="col-5"> </div>')
		.appendTo($jumb);

	$("<img>")
		.attr('src', data["strDrinkThumb"])
		.addClass('w-100 rounded')
		.appendTo(jumbRight)

	$($jumb)
		.hide()
		.appendTo('.container')
		.fadeIn();
	
	const $jumbMore = $('<div>')
		.addClass('w-100 p-2')
		.appendTo($jumb);

	$('<hr>')
		.appendTo($jumbMore);

	// Ingredients
	$('<h5>')
		.text('Ingredients')
		.appendTo($jumbMore);
	
	const inglist = $('<ul>')
		.addClass('list-unstyled')
	
	let ingredientCount = 1;
	while (data[`strIngredient${ingredientCount}`] !== null) {
		$('<li>')
			.text(data[`strIngredient${ingredientCount}`]
				+ " - "
				+ data[`strMeasure${ingredientCount}`]
			)
			.appendTo(inglist);
		
		ingredientCount++;
	}
	inglist.appendTo($jumbMore);


}