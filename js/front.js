$(function () {

    onepage();
    utils();
    demo();

});


function demo() {

    $("#page").change(function () {

        if ($(this).val() !== '') {

            window.location.href = $(this).val();

        }

        return false;
    });
}

function onepage() {

    $(".main").onepage_scroll({
        sectionContainer: "section", 
        easing: "ease",
        animationTime: 1000, 
        pagination: true, 
        updateURL: false, 
        beforeMove: function (index) {
        }, 
        afterMove: function (index) {
        }, 
        loop: false, 
        keyboard: true, 
        responsiveFallback: 1000, 
       
        direction: "vertical"            
    });

}

function utils() {

    

    $('[data-toggle="tooltip"]').tooltip();

  

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
   
    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
   
    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
   
    $('.scroll-to, .scroll-to-top').click(function (event) {

        var full_url = this.href;
        var parts = full_url.split("#");
        if (parts.length > 1) {

            scrollTo(full_url);
            event.preventDefault();
        }
    });
    function scrollTo(full_url) {
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
    }
}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}
$.fn.alignSections = function () {

    if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        $('section .content').each(function () {
            var element = $(this);
            var contentHeight = element.height();
            var paddingTop = -(contentHeight) / 2;

            if ($(window).width() > 1000) {

                element.css('-webkit-transform', 'translate(0,0)');
                element.css('-ms-transform', 'translate(0,0)');
                element.css('transform', 'translate(0,0)');
                element.css('margin-top', paddingTop + 'px');
            }
            else {
                element.css('margin-top', 0);
            }
        });
    }
}

$(window).load(function () {

    windowWidth = $(window).width();

    $(this).alignElementsSameHeight();
    $(this).alignSections();


});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
            $(this).alignSections();
        }, 100);
        windowWidth = newWindowWidth;
    }

});
