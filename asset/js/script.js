window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

document.getElementById("edukasi").style.display = "block";
document.getElementById("pengalaman").style.display = "none";
document.querySelector(".N-edu").classList.add("active");
document.querySelector(".N-exp").classList.remove("active");
function navigation(id) {
    if (id === "edu") {
        document.getElementById("edukasi").style.display = "block";
        document.getElementById("pengalaman").style.display = "none";
        document.querySelector(".N-edu").classList.add("active");
        document.querySelector(".N-exp").classList.remove("active");
    } else if (id === "exp") {
        document.getElementById("edukasi").style.display = "none";
        document.getElementById("pengalaman").style.display = "block";
        document.querySelector(".N-exp").classList.add("active");
        document.querySelector(".N-edu").classList.remove("active");
    }
}
