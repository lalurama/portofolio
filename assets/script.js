
window.addEventListener('scroll', function () {
    var navbar = document.querySelector("nav");
    var range = window.pageYOffset;
    var serviceR = document.getElementById('serviceR');
    var serviceL = document.getElementById('serviceL');
    console.log(range)
    if (range >= 100) {
        navbar.style.position = 'fixed';
        navbar.style.top = 0;
    } else {
        navbar.style.position = 'relative';
        navbar.style.top = 20 + 'px'
    }
    
    if (range >= 900) {
        serviceL.style.marginRight = 10+'px';
        serviceR.style.marginLeft = 10+'px';
    } else {
        serviceL.style.marginRight= 400+'px';
        serviceR.style.marginLeft = 400+'px';
    }
})