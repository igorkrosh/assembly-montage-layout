$(document).ready(Core);

function Core()
{
    OurWorksSlider();
}

function OurWorksSlider()
{
    $(".our-works-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsContainer: '.slider-nav .slider-dots',
        nav: true,
        navContainer: '.slider-nav .slider-btns'
    });
}