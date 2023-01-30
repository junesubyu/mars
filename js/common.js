$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.gotop').fadeIn()
    } else {
        $('.gotop').fadeOut()
    }
})

$('.gotop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400)
    return false
})

$('.hamburger').on('click', function () {
    $('.menu').addClass('on')
})

$('.close').on('click', function () {
    $('.menu').removeClass('on')
})
