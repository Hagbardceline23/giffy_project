
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



function displayGifs(){
    var bandName = $(this).attr("data-name");
    
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bandName + "&api_key=cZiV2AINGkNpCav0JZezImfr6E7441yc&tag=cats";
$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(reponse){
    var imageURL = response.data.image_original_url;
}


});