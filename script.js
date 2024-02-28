let text = document.getElementById('text');
let bulan = document.getElementById('bulan');
let gunung = document.getElementById('gunung');
let langit = document.getElementById('langit');
let hill4 = document.getElementById('hill4');
let orang = document.getElementById('orang');
let beruang = document.getElementById('beruang');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.2 + 'px';
    bulan.style.marginTop = value * 0.7 + 'px';
    bulan.style.marginLeft = value * 1 + 'px';
    gunung.style.marginTop = value * 0.4 + 'px';
    langit.style.marginTop = value * 0.4 + 'px';
    orang.style.marginTop = value * 0.265 + 'px';
    orang.style.marginLeft = value * -0.2 + 'px';
    beruang.style.marginLeft = value * -0.6 + 'px';
    beruang.style.marginTop = value * 0.4 + 'px';
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY > offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};


let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});

//loaded text
window.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('loaded');
});