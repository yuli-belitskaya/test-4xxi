$(document).ready(function () {
    'use strict';

    var _videoInit = function () {
        var video = document.getElementById('video');
        var poster = $('.video-container').find('img');
        var play = $('.play');

        play.on('click', function () {
            video.play();
            play.hide();
            poster.hide();
            $('.transparent-poster').hide();
        });

        video.addEventListener('ended', function () {
            play.show();
            poster.show();
        }, false);
    };

    _videoInit();

    $('.download_close').click(function () {
        $('.block_download').hide();
    });

    $('.white_block_url').click(function () {
        var popup = $(this).next();
        popup.selectText();
        if (popup.hasClass('active')) {
            popup.removeClass('active');
        } else {
            popup.addClass('active');
        }
    });
});

function initMap() {
    'use strict';
    var uluru = {lat: 40.7110316, lng: -74.0035103};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    return new google.maps.Marker({
        position: uluru,
        map: map
    });
}