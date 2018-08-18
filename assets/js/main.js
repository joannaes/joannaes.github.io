$(function() {

//add show/hide text in section '#aboutMe'
        var $moreAbout = $('#aboutMe').find('#readMore');
        var $buttonMore = $('#aboutMe').find('.button');
        
        $moreAbout.hide();
        $buttonMore.on('click', function(e){
            e.preventDefault();
            $moreAbout.slideToggle('slow');
            $(this).text($(this).text() == 'Więcej' ? "Zwiń" : "Więcej");
        });      

// Dynammiczne dodanie obrazu tla do tagu a na podstawie src w html(dzięki temu nie trzeba tworzyć osobnego kodu dla każdego a w css)
			$('.item').each(function() {

				var $this = $(this),
					$header = $this.find('header'),
					$a = $header.find('a'),
					$img = $header.find('img');

				// Set background.
					$a.css('background-image', 'url(' + $img.attr('src') + ')');

				// Remove original image.
					$img.remove();

			});
});
