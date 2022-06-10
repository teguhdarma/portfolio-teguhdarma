// const sr = SrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })
// sr.reveal('.nama', { delay: 100 })
// sr.reveal('.card-group', { delay: 200 })
// sr.reveal('.card-title', { delay: 200 })


ScrollReveal().reveal('.nama', {
    delay: 375,
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.img', {
    delay: 375,
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});
ScrollReveal().reveal('.list-inline-item', {
    delay: 500,
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
ScrollReveal().reveal('.card-group', {
    delay: 500,
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
ScrollReveal().reveal('.skill', {
    delay: 500,
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
ScrollReveal().reveal('.row', {
    delay: 300,
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

ScrollReveal().reveal('.wrapper', {
    delay: 300,
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


var typed = new Typed(".type", {
    strings: [
        "teguh",
        "designer",
        "developer"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
VanillaTilt.init(document.querySelector(".img"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".img"));


function initialize() {
    var propertiPeta = {
        center: new google.maps.LatLng(34.6288519, 133.9341398),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);

    // membuat Marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(34.6288519, 133.9341398),
        map: peta,
        animation: google.maps.Animation.BOUNCE
    });

}
google.maps.event.addDomListener(window, 'load', initialize);


let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: { gradient: ['#32be8f', '#38afd3', '#26adc5'] }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.70
});
$(".react .bar").circleProgress({
    value: 0.60
});

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


