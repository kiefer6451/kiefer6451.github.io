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
        if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))      
            $('html, body').scrollTop($(`#${section}`).offset().top - 40); 
        else
            $('html, body').scrollTop($(`#${section}`).offset().top - $('.navbar').height());        
    }   
});

$('#change4better').on('click', e => {
    window.location.href = "https://www.youtube.com/watch?v=TOfReUk7KR0&feature=youtu.be";
}); 

$('#snipgen').on('click', e => {
    window.location.href = "https://github.com/kiefer6451/snipgen";
});

$('#mxt').on('click', e => {
    window.location.href = "https://memoryexpansiontools.com/";
});

$('#wqa').on('click', e => {
    window.location.href = "./assets/docs/AquaMonitor Application Manual.pdf";
});

$('#nutrition-app').on('click', e => {
    window.location.href = "./assets/docs/Nutrition Tracker Application Manual.pdf";
});

$('#sketchpad').on('click', e => {
    window.location.href = "https://youtu.be/ajDvEba-A44";
})

$('#knowyourcourse').on('click', e => {
    window.location.href = "https://youtu.be/uWliabmkp5E";
})