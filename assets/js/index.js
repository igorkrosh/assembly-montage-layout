$(document).ready(Core);

function Core()
{
    OurWorksSlider();
    SetForm();
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

    $('.our-works-slider .slider-item').simpleLightbox();
}

function SetForm()
{
    $('.btn-contact-modal').on('click', function () {
        $('#modalContactForm').modal('show')
    });

    $('.btn-send-form').on('click', function () {
        $('.modal').modal('hide');
        $('#sendModal').modal('show');
    });
}