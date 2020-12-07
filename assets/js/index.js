$(document).ready(Core);

function Core()
{
    OurWorksSlider();
    SetForm();
    SetAncors();
    CheckScroll();
    InitWow();
    SetMobileMenu();
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
        $('#modalContactForm').modal('show');
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

function SubmitForm(form)
{
	let contactsData = $(form).serialize();

	$.ajax({
		type: "POST",	
		url: "mailer.php",	
		data: contactsData	
	});

	$(form).find("input").val("");
  
    $('.modal').modal('hide');
	$('#sendModal').modal('show');

	setTimeout(function() {
		$('#sendModal').modal('hide');
	}, 2000)
}

function CheckScroll() 
{
  $(window).scroll(function () {

    let windowPos = this.scrollY + window.innerHeight / 2;
    
    let firstSectionPos = $('section.first-section').position().top;
    let aboutUsPos = $('section.about-us').position().top;
    let ourWorksPos = $('section.our-works').position().top;
    let contactUsPos = $('section.contact-us').position().top;
    let pricesPos = $('section.prices').position().top;
    let lastSectionPos = $('section.last-section').position().top;
    let breadcrumbs = $('.menu .menu-item');

    if (windowPos > firstSectionPos && windowPos < aboutUsPos)
    {
      $(breadcrumbs).removeClass('active');
    }

    if (windowPos > aboutUsPos && windowPos < ourWorksPos)
    {
      SetActiveBreadcrumb('section.about-us', breadcrumbs)
    }

    if (windowPos > ourWorksPos && windowPos < contactUsPos)
    {
      SetActiveBreadcrumb('section.our-works', breadcrumbs)
    }

    if (windowPos > contactUsPos && windowPos < pricesPos)
    {
      SetActiveBreadcrumb('section.contact-us', breadcrumbs)
    }

    if (windowPos > pricesPos && windowPos < lastSectionPos)
    {
      SetActiveBreadcrumb('section.prices', breadcrumbs)
    }

    if (windowPos > lastSectionPos )
    {
      SetActiveBreadcrumb('section.last-section', breadcrumbs)
    }
  })
}

function SetActiveBreadcrumb(target, btns) 
{
  for (btn of btns)
  {
    if ($(btn).attr('ancore') != target)
    {
      $(btn).removeClass('active')
    }
    else
    {
      if (!$(btn).hasClass('active'))
      {
        $(btn).addClass('active')
      }
    }
  }
}

function SetAncors()
{
    $('[ancore]').on('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: $($(this).attr('ancore')).position().top - 90,
            left: 0,
            behavior: 'smooth'
        });
    })
}

function InitWow()
{
    let wow = new WOW({
        animateClass: 'animate__animated',
    })
    wow.init();
}

function SetMobileMenu()
{
    $('.btn-menu').on('click', function() {
        if ($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('lock');
        }
        else
        {
            $(this).addClass('active');
            $('.menu').addClass('active');
            $('body').addClass('lock');
        }        
    });

    $('.menu .menu-item').on('click', function() {
        $('.navbar .active').removeClass('active');
        $('body').removeClass('lock');
    })
}