$('nav a').on('click', function(e) {
    e.preventDefault()
    let url = this.href

    $('nav a.current').removeClass('current')
    $(this).addClass('current')

    $('#container').remove()
    $('#content').load(`${url}#container`).hide().fadeIn('slow')

})