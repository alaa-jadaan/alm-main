$(function () {
    //Replace all SVG images with inline SVG
    function imgToSvg() {
        $('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }

    //convert svg images on page first load
    imgToSvg();

    if ($(window).outerWidth() <= 991.98) {
        //        $("#top-nav").addClass("navbar-dark bg-dark").removeClass("navbar-light");

        $("#subjects .card").click(function () {
            if ($(this).find(".details").css("display") == "none") {
                $("#subjects .card .details").slideUp();
                $("#subjects .card").removeClass("open");
                $(this).find(".details").stop(true, true).slideDown();
                $(this).addClass("open");
            } else {
                $(this).find(".details").stop(true, true).slideUp();
                $(this).removeClass("open");
            }

        });
    } else {
        //        $("#top-nav").removeClass("navbar-dark bg-dark").addClass("navbar-light");

        $("#subjects .card").hover(function () {
            $(this).find(".details").slideDown();
        }, function () {
            $(this).find(".details").stop(true, true).slideUp();
        });
    }

    $(window).resize(function () {
        $("#subjects .card .details").slideUp();
        $("#subjects .card").removeClass("open");
        if ($(window).outerWidth() <= 991.98) {
            //            $("#top-nav").addClass("navbar-dark bg-dark").removeClass("navbar-light");

            $("#subjects .card").unbind();
            $("#subjects .card").click(function () {
                if ($(this).find(".details").css("display") == "none") {
                    $("#subjects .card .details").slideUp();
                    $("#subjects .card").removeClass("open");
                    $(this).find(".details").stop(true, true).slideDown();
                    $(this).addClass("open");
                } else {
                    $(this).find(".details").stop(true, true).slideUp();
                    $(this).removeClass("open");
                }
            });
        } else {
            //            $("#top-nav").removeClass("navbar-dark bg-dark").addClass("navbar-light");

            $("#subjects .card").unbind();
            $("#subjects .card").hover(function () {
                $(this).find(".details").slideDown();
            }, function () {
                $(this).find(".details").stop(true, true).slideUp();
            });
        }
    });

    //    $('#top-nav .collapse').on('show.bs.collapse', function () {
    $('body').on('show.bs.collapse', '#top-nav .collapse', function () {
        $("#top-nav").addClass("navbar-dark bg-dark").removeClass("navbar-light");
    });

    //    $('#top-nav .collapse').on('hidden.bs.collapse', function () {
    $('body').on('hidden.bs.collapse', '#top-nav .collapse', function () {
        $("#top-nav").removeClass("navbar-dark bg-dark").addClass("navbar-light");
    });

    //plugins initialization
    if ($('#courses-slider').length > 0) {
        //slick slider
        $('#courses-slider').slick({
            dots: false,
            infinite: true,
            rtl: true,
            speed: 300,
            variableWidth: true,
            slidesToScroll: 1
        });

    };

    if ($('#courses').length > 0) {
        //truncate multiple lines of text
        $('#courses .card-text').succinct({
            size: 135
        });
    };

    if ($(window).outerWidth() <= 767.98) {
        $("#search-wrapper").addClass("minimized");
    }
    $("#search-wrapper img").click(function () {
        if ($("#search-wrapper").hasClass("minimized")) {
            $("#search-wrapper").removeClass("minimized");
            $("#search-wrapper input").focus();
        }
    });
    $("#search-wrapper input").focusout(function () {
        if ($(window).outerWidth() <= 767.98) {
        $("#search-wrapper").addClass("minimized");
        }
    });
    $(window).resize(function () {
        
        if ($(window).outerWidth() <= 767.98) {
            $("#search-wrapper").addClass("minimized");
        } else{
            $("#search-wrapper").removeClass("minimized");
        }
    });
    
//    $("#success-modal").modal("show");
});
