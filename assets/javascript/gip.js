
	
$('button').on('click',function(){
	var w = $(this).data("comedian");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+w+"&api_key=SUe379a9GnY0DhdBCF7MQo7hGHbYpDGY&limit=10";
	

	$.ajax({url:queryURL,
	method:'GET'
}).done(function(response){
	for (var i = 0;i<response.data.lenght;i++) {
		var comedianDiv = $('<div>');
		var p = $('<p>').text("Rating "+response.data[i].rating);
		var comedianImage = $('<img>');
		comedianImage.attr('src',response.data[i].images.fixed_height.url);
		comedianDiv.append(p);
		comedianDiv.append(comedianDiv);
		$('#gifs').append(comedianDiv);

		}

	})

})
