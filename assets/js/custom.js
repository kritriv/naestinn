// Repples Effect 
// $(document).ready(function () {

//     $('#ripple_effect').ripples({
//         resolution: 1920,
//         dropRadius: 10,
//         perturbance: 0.04
//     });

// });

$(document).ready(function () {
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'assets/js/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    } else {
        console.error('particlesJS is not defined. Make sure you have included the Particles.js library.');
    }
});

