
var message = 'Wczytywanie zdjęcia...';
$(function () {
    $('.gallery').on('click', 'ul.gallery-thumb a', function (e) {
        e.preventDefault();

        var galleryFull = $(e.delegateTarget).children('.gallery-full'),
            imageSrc = $(this).attr('href'),
            imageTitle = $(this).attr('title') || 'Domyślny opis zdjęcia';
        galleryFull.children('img').attr(
            {
                'src': imageSrc,
                'alt': imageTitle
            }
        );
      
        galleryFull.children('h1').html(message);

        $(this).parents('ul.gallery-thumb').find('img').removeClass('active');
        $(this).children('img').addClass('active');
    });

    $('.gallery .gallery-full img').on('load', function () {
        $(this).prev().html($(this).attr('alt'));
    });
});