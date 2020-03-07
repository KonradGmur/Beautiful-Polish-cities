$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
	autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        }
    }
});