$(window).on('load', () => {
    $('#loading-screen').hide();
});

$('.nav-link').on('click', () => {
    $('#navbarTogglerDemo02').collapse('hide'); 
});

$('nav').find('a').click(e => {
    const section = e.target.href.split('#')[1];
    if (section == 'about-section' || section == 'projects-section'){
        e.preventDefault(); 
        $('html, body').scrollTop($(`#${section}`).offset().top - $('.navbar').get(0).clientHeight); 
    }   
});

$('#change4better').on('click', e => {
    window.location.href = "https://www.youtube.com/watch?v=TOfReUk7KR0&feature=youtu.be";
}); 

$('#snipgen').on('click', e => {
    window.location.href = "https://github.com/kiefer6451/snipgen";
});
