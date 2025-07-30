document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const indicator = document.createElement('span');
    indicator.classList.add('nav-indicator');
    document.querySelector('.nav-links').appendChild(indicator);

    function moveIndicator(el) {
        const left = el.offsetLeft;
        const width = el.offsetWidth;
        indicator.style.left = left + 'px';
        indicator.style.width = width + 'px';
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => moveIndicator(e.target));
        link.addEventListener('focus', (e) => moveIndicator(e.target));
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            moveIndicator(e.target);
        });
    });

    // Set initial position
    const active = document.querySelector('.nav-links a.active') || navLinks[0];
    active.classList.add('active');
    moveIndicator(active);
});