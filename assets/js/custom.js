$(document).ready(function () {
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'assets/js/particles.json', function () {
        });
    } else {
        console.error('particlesJS is not defined. Make sure you have included the Particles.js library.');
    }
});


