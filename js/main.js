$(document).ready(function(){
    $('#slider').slick({
        dots:true,
    })
    $('#slider-sales').slick({
        arrows:true,
    });
    
    $('#slider-sales .slick-prev').html('<i class="fa fa-angle-left"></i>')
    $('#slider-sales .slick-next').html('<i class="fa fa-angle-right"></i>')
    
    $('#slider-product').slick({
        arrows: true,
        dots:true,
    });
    $('#testimonials-slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        arrows: true,
    })
    
    $('#slider-product .slick-prev').html('<i class="fa fa-angle-left"></i>')
    $('#slider-product .slick-next').html('<i class="fa fa-angle-right"></i>')
    
    $('#testimonials-slider .slick-prev').html('<i class="fa fa-angle-left"></i>')
    $('#testimonials-slider .slick-next').html('<i class="fa fa-angle-right"></i>')
})
$(document).ready(function(){
     $('div#panoram').paver()
})
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        console.log(top);
        if(top != 0){            
            $('.menu-row').addClass('active-menu-row')
                          
        }
        else{
            $('.menu-row').removeClass('active-menu-row');

        }
    })
})