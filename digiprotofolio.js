

function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function getSlideWidth() {
    return slides[0].getBoundingClientRect().width;
}

function moveToSlide(index) {
    const slideWidth = getSlideWidth();
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// next button
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
        track.style.transition = "none";
        track.style.transform = `translateX(0)`;
        return;
    }
    moveToSlide(currentIndex);
});

// prev button
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
        track.style.transition = "none";
        track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
        return;
    }
    moveToSlide(currentIndex);
});

// auto slide
setInterval(() => {
    nextButton.click();
}, 5000);

window.addEventListener('resize', () => moveToSlide(currentIndex));
// animatied content

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-left, .animate-right, .animate-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-active");
            } else {
                entry.target.classList.remove("animate-active");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));
});

// theme
const checkbox = document.getElementById("theme-checkbox");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});