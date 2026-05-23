// FORCE PAGE TO START AT TOP

window.onbeforeunload = function () {

  window.scrollTo(0, 0);

};

// REGISTER GSAP

gsap.registerPlugin(ScrollTrigger);

// =============================
// CUSTOM CURSOR
// =============================

const cursor = document.getElementById("cursor");

if (cursor) {

  window.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15
    });

  });

}

// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

  });

}

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("#mobileMenu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.add("hidden");

  });

});

// =============================
// NAVBAR SCROLL EFFECT
// =============================

const navbar = document.getElementById("navbar");

if (navbar) {

  window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

      navbar.classList.add("nav-scrolled");

    } else {

      navbar.classList.remove("nav-scrolled");

    }

  });

}

// =============================
// HERO ANIMATION
// =============================

if(document.querySelector(".hero-content")){

  gsap.from(".hero-content p", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2

  });

  gsap.from(".hero-content h1", {

    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"

  });

  gsap.from(".hero-content a", {

    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: 0.6

  });

}

// =============================
// FACILITY SWIPER
// =============================

if(document.querySelector(".facilitySwiper")){

  new Swiper(".facilitySwiper", {

    loop: true,

    spaceBetween: 30,

    centeredSlides: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".facility-next",
      prevEl: ".facility-prev",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1,
      },

      1200: {
        slidesPerView: 1.2,
      }

    }

  });

}

// =============================
// GALLERY SWIPER
// =============================

if(document.querySelector(".gallerySwiper")){

  new Swiper(".gallerySwiper", {

    loop: true,

    centeredSlides: true,

    slidesPerView: 1.2,

    spaceBetween: 30,

    speed: 1400,

    grabCursor: true,

    autoplay: {

      delay: 3000,

      disableOnInteraction: false,

    },

    navigation: {

      nextEl: ".gallery-next",

      prevEl: ".gallery-prev",

    },

    breakpoints: {

      768: {

        slidesPerView: 1.4,

      },

      1200: {

        slidesPerView: 1.8,

      }

    }

  });

}

// =============================
// HERO PARALLAX
// =============================

if(document.querySelector(".hero-bg")){

  gsap.to(".hero-bg", {

    scale: 1.1,

    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }

  });

}

// =============================
// HERO CONTENT PARALLAX
// =============================

if(document.querySelector(".hero-content")){

  gsap.to(".hero-content", {

    y: 120,

    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }

  });

}

// =============================
// ABOUT ANIMATION
// =============================

if(document.querySelector("#about")){

  gsap.from(".about-content", {

    scrollTrigger: {
      trigger: "#about",
      start: "top 75%"
    },

    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"

  });

  gsap.from("#about img", {

    scrollTrigger: {
      trigger: "#about",
      start: "top 75%"
    },

    scale: 1.1,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"

  });

}

// =============================
// GALLERY ANIMATION
// =============================

if(document.querySelector(".gallery-card")){

  gsap.from(".gallery-card", {

    opacity: 0,
    y: 80,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger: "#gallery",
      start: "top 75%"
    }

  });

}

// =============================
// PRINCIPAL SECTION
// =============================

if(document.querySelector("#principal")){

  gsap.from("#principal img", {

    scrollTrigger: {
      trigger: "#principal",
      start: "top 75%"
    },

    scale: 1.1,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"

  });

  gsap.from("#principal h2, #principal p", {

    scrollTrigger: {
      trigger: "#principal",
      start: "top 75%"
    },

    y: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"

  });

}

// =============================
// FAQ ACCORDION
// =============================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const faqItem = question.parentElement;

    const answer = faqItem.querySelector(".faq-answer");

    const icon = faqItem.querySelector(".faq-icon");

    document.querySelectorAll(".faq-item").forEach((item) => {

      if (item !== faqItem) {

        item.querySelector(".faq-answer").style.maxHeight = null;

        item.querySelector(".faq-icon").innerHTML = "+";

      }

    });

    if (answer.style.maxHeight) {

      answer.style.maxHeight = null;

      icon.innerHTML = "+";

    } else {

      answer.style.maxHeight = answer.scrollHeight + "px";

      icon.innerHTML = "−";

    }

  });

});

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// =============================
// BUTTON RIPPLE EFFECT
// =============================

document.querySelectorAll(".hero-btn").forEach(button => {

  button.addEventListener("click", function(e){

    let ripple = document.createElement("span");

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;

    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;

    ripple.style.top = `${y}px`;

    setTimeout(() => {

      ripple.remove();

    }, 600);

  });

});

// =============================
// WORKING PREMIUM LOADER
// =============================

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  const loaderBar = document.getElementById("loaderBar");

  if(!loader) return;

  // BAR ANIMATION

  if(loaderBar){

    gsap.to(loaderBar, {

      width: "100%",
      duration: 2,
      ease: "power2.out"

    });

  }

  // REMOVE LOADER

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    loader.style.transition = "opacity 1s ease";

    setTimeout(() => {

      loader.remove();

      // PAGE REVEAL

      gsap.from("section", {

        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"

      });

    }, 1000);

  }, 2500);

});