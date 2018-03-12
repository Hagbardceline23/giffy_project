
$(document).ready(function(){

    var bands = [ 
        "Eric Clapton", "Led Zeppelin", "The Rolling Stones", "The Grateful Dead", "Lynard Skynard", "Journey", "Kiss", "Bon Jovi", "Pearl Jam", "Blind Melon", "Phish",];

    function renderGifButtons() {
        $("gifButtonsArea").empty();
        for (var i = 0; i < bands.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("band");
            newButton.attr("band-name");
            newButton.text(bands[i]);
            $("gifButtonsArea").append(newButton);
        }
    }
          $(document).on("click",".bandName", displayGifs);
          $(document).on("click", ".image", function(){
              var state = $(this).attr('data-state');
              if (state == 'still') {
                  $(this).attr('src', $(this).data('animate'));
                  $(this).attr('data-state', 'animate');
              }else {
                  $(this).attr('src', $(this).data)('still');
              }
              });
              

function displayGifs(){
    var bandName = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bandName + "&api_key=cZiV2AINGkNpCav0JZezImfr6E7441yc";
}
$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(reponse){
    $("#gifsDisplay").empty();
    var bandObjects = response.data;


  for (var i = 0; i < results.length; i ++){
      var bandDiv = $("<div>");
      var bandRating = $("<p>").text("Rating" + results[i].rating);
      bandDiv.append(bandRating);
      var bandImg = $("<img>");

      bandImg.attr("src", results[i].images.fixed_width_still.url);
      bandImg.atr("alt", results[i].title);
      bandImg.attr("data-still", results[i].images.fixed_width_still.url);
      bandImg.attr("data-animate", results[i].images.fixed_width.url);
      bandImg.attr("data-state", "still");
      bandDiv.append(bandImg);
      BandDiv.append(rating);
      $("#gifsDisplay").prepend(bandDiv);
  }
});