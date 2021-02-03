$(function () {
    

    if ($(window).outerWidth() <= 991.98) {
//        $("#top-nav").addClass("navbar-dark bg-dark").removeClass("navbar-light");
        
        $("#subjects .card").click(function () {
            if($(this).find(".details").css("display") == "none"){
                $("#subjects .card .details").slideUp();
                $("#subjects .card").removeClass("open");
                $(this).find(".details").stop(true, true).slideDown();
                $(this).addClass("open");
            }else{
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
                if($(this).find(".details").css("display") == "none"){
                    $("#subjects .card .details").slideUp();
                    $("#subjects .card").removeClass("open");
                    $(this).find(".details").stop(true, true).slideDown();
                    $(this).addClass("open");
                }else{
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
    
    
});
