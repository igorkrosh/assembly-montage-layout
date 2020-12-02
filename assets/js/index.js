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

    $.validator.addMethod('checkMask', function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    })

    let validateSetting = {
        rules: {
            phone: {
                checkMask: true
            }
        },
        messages: {
            phone: {
                checkMask: "Введите полный номер телефона"
            }
        },
        submitHandler: SubmitForm
    }

    $('.contact-us form').validate(validateSetting);
    $('.modal form').validate(validateSetting);

    $('form input[name=phone]').mask("+7(999)999-9999", {autoclear: false});
}

function SubmitForm()
{
    $('.modal').modal('hide');
    $('#sendModal').modal('show');
}