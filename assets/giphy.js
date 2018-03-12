$(document).ready(function () {

	var bands = [
		"Eric Clapton", "Led Zeppelin", "The Rolling Stones", "The Grateful Dead", "Lynard Skynard", "Journey", "Kiss", "Bon Jovi", "Pearl Jam", "Blind Melon", "Phish",
	];

	function renderGifButtons() {
		$("gifButtonsArea").empty();
		for (var i = 0; i < bands.length; i++) {
			console.log('hi')
			var newButton = $("<button>");
			newButton.addClass("band");
			newButton.attr("band-name", bands[i]);
			newButton.text(bands[i]);
			$("#gifButtonsArea").append(newButton);
		}
	}
	renderGifButtons();

	$(document).on("click", ".band", displayGifs);

	$(document).on("click", ".image", function () {
		var state = $(this).attr('data-state');
		if (state == 'still') {
			$(this).attr('src', $(this).data('animate'));
			$(this).attr('data-state', 'animate');
		} else {
			$(this).attr('src', $(this).data('still'));
			$(this).attr('data-state', 'still')
		}
	});


	function displayGifs() {
		var bandName = $(this).attr("band-name");
	
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bandName + "&api_key=cZiV2AINGkNpCav0JZezImfr6E7441yc";

		$.ajax({
				url: queryURL,
				method: "GET"
			})

			.then(function (response) {
				console.log(response.data);
				$("#gifsDisplay").empty();
				var results = response.data;


				for (var i = 0; i < results.length; i++) {
					console.log("this hit")
					var bandDiv = $("<div class='col-4'>");
					var bandRating = $("<p>").text("Rating" + results[i].rating);
					bandDiv.append(bandRating);
					var bandImg = $("<img>");
					bandImg.addClass("image")

					bandImg.attr("src", results[i].images.fixed_width_still.url);
					bandImg.attr("alt", results[i].title);
					bandImg.attr("data-still", results[i].images.fixed_width_still.url);
					bandImg.attr("data-animate", results[i].images.fixed_width.url);
					bandImg.attr("data-state", "still");
					bandDiv.append(bandImg);
					$("#gifsDisplay").prepend(bandDiv);
				}

			});
	}
});