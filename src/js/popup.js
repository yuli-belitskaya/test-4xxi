$(function () {
    'use strict';
    var popwindow = $('.popwindow'); // Класс окна
    var popbutton = $('.popbutton'); // Класс кнопки
    $("body").prepend("<div class='mask'></div>");
    function preparewindow(windowobject) {
        var winwidth = windowobject.data("width");
        var winheight = windowobject.data("height");
        var winmargin = winwidth / 2;

        windowobject.wrap("<div class='box_window'></div>");
        windowobject.addClass("box_window_in");
        windowobject.parent(".box_window").prepend("<div class='bw_close'></div>");

        windowobject.parent(".box_window").css({
            'width': winwidth,
            'height': winheight,
            'margin-left': '-' + winmargin
        });
        windowobject.css({'height': winheight});
    }
    if (popwindow.length) {
        preparewindow(popwindow);
        popbutton.click(function () {
            var idwind = $(this).data("window");
            $("#" + idwind).parent(".box_window").fadeIn().addClass("windactiv");
            $(".mask").fadeIn();
            $(".to_blur").addClass("blur");
        });
    }
    $(".mask, .bw_close").click(function () {
        $(".windactiv").fadeOut();
        $(".windactiv").removeClass("windactiv");
        $(".mask").fadeOut();
        $(".to_blur").removeClass("blur");
    });
});