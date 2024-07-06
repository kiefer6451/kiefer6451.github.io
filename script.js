$(window).on('load', () => {
    $('#loading-screen').hide()
});

$(document).ready(() => {
    $('#copyright-text').html(`Copyright &copy; 2020 - ${new Date().getFullYear()} Eric Kiefer. <br class="mobile-break"> All rights reserved.`);
});

$('.nav-link').on('click', () => {
    $('#navbarTogglerDemo02').collapse('hide')
});

$('nav').find('a').click(e => {
    const section = e.target.href.split('#')[1]
    if (section == 'about-section' || section == 'projects-section'){
        e.preventDefault()
        if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))      
            $('html, body').scrollTop($(`#${section}`).offset().top - 40)
        else
            $('html, body').scrollTop($(`#${section}`).offset().top - $('.navbar').height())       
    }   
});

$('#change4better').on('click', _ => {
    window.location.href = "https://www.youtube.com/watch?v=TOfReUk7KR0&feature=youtu.be"
}); 

$('#snipgen').on('click', _ => {
    window.location.href = "https://github.com/kiefer6451/snipgen"
});

$('#mxt').on('click', _ => {
    window.location.href = "https://github.com/stairs1/memory-expansion-tools"
});

$('#wqa').on('click', _ => {
    window.location.href = "./assets/docs/AquaMonitor Application Manual.pdf"
});

$('#nutrition-app').on('click', _ => {
    window.location.href = "./assets/docs/Nutrition Tracker Application Manual.pdf"
});

$('#sketchpad').on('click', _ => {
    window.location.href = "https://youtu.be/ajDvEba-A44"
})

$('#knowyourcourse').on('click', _ => {
    window.location.href = "https://youtu.be/uWliabmkp5E"
})

$('#zombieplaza').on('click', _ => {
    const is_mobile = 'ontouchstart' in window || navigator.maxTouchPoints
    if (!is_mobile) {
        window.location.href = "./assets/builds/Zombie Plaza.zip"
    }
});