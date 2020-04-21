$('.nav-link').on('click', () => {
    $('#navbarTogglerDemo02').collapse('hide'); 
});

$("nav").find("a").click(e => {
    const section = e.target.href.split('#')[1];
    if (section == 'about-section' || section == 'projects-section'){
        e.preventDefault(); 
        $("html, body").scrollTop($(`#${section}`).offset().top - $('.navbar').get(0).clientHeight); 
    }   
});