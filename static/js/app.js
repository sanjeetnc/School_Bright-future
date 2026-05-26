// ============================================
// SCROLL RESTORATION
// ============================================

window.history.scrollRestoration = "manual";

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

// ============================================
// GSAP REGISTER
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.getElementById("cursor");

if (window.innerWidth < 768 && cursor) {
  cursor.style.display = "none";
}

if (cursor) {

  window.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.08,
      ease: "power2.out"
    });

  });

}

// ============================================
// MOBILE MENU
// ============================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

  menuBtn.addEventListener("click", () => {

    if (mobileMenu.classList.contains("hidden")) {

      mobileMenu.classList.remove("hidden");

      gsap.fromTo(
        "#mobileMenu",
        {
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out"
        }
      );

    } else {

      gsap.to("#mobileMenu", {

        opacity: 0,
        y: -20,
        duration: 0.3,

        onComplete: () => {
          mobileMenu.classList.add("hidden");
        }

      });

    }

  });

}

// ============================================
// CLOSE MOBILE MENU AFTER CLICK
// ============================================

document.querySelectorAll("#mobileMenu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.add("hidden");

  });

});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById("navbar");

if (navbar) {

  window.addEventListener("scroll", () => {

    requestAnimationFrame(() => {

      if (window.scrollY > 50) {

        navbar.classList.add("nav-scrolled");

      } else {

        navbar.classList.remove("nav-scrolled");

      }

    });

  });

}

// ============================================
// HERO ANIMATION
// ============================================

if (document.querySelector(".hero-content")) {

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

// ============================================
// FACILITY SWIPER
// ============================================

if (document.querySelector(".facilitySwiper")) {

  new Swiper(".facilitySwiper", {

    loop: true,

    centeredSlides: true,

    spaceBetween: 24,

    speed: 1200,

    grabCursor: true,

    autoplay: {
      delay: 3500,
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
        slidesPerView: 1.3,
      },

      1200: {
        slidesPerView: 2,
      }

    }

  });

}

// ============================================
// GALLERY SWIPER
// ============================================

if (document.querySelector(".gallerySwiper")) {

  new Swiper(".gallerySwiper", {

    loop: true,

    centeredSlides: true,

    slidesPerView: 1.2,

    spaceBetween: 30,

    speed: 1000,

    grabCursor: true,

    autoplay: {

      delay: 4000,

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

// ============================================
// HERO PARALLAX
// ============================================

if (document.querySelector(".hero-bg") && window.innerWidth > 768) {

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

// ============================================
// HERO CONTENT PARALLAX
// ============================================

if (document.querySelector(".hero-content") && window.innerWidth > 768) {

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

// ============================================
// ABOUT ANIMATION
// ============================================

if (document.querySelector("#about")) {

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

// ============================================
// GALLERY ANIMATION
// ============================================

if (document.querySelector(".gallery-card")) {

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

// ============================================
// PRINCIPAL SECTION
// ============================================

if (document.querySelector("#principal")) {

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

// ============================================
// FAQ ACCORDION
// ============================================

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

        item.classList.remove("active-faq");

      }

    });

    if (answer.style.maxHeight) {

      answer.style.maxHeight = null;

      icon.innerHTML = "+";

      faqItem.classList.remove("active-faq");

    } else {

      answer.style.maxHeight = answer.scrollHeight + "px";

      icon.innerHTML = "−";

      faqItem.classList.add("active-faq");

    }

  });

});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});

// ============================================
// SECTION REVEAL
// ============================================

gsap.utils.toArray("section").forEach(section => {

  gsap.from(section, {

    opacity: 0,
    y: 60,
    duration: 1,

    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    }

  });

});

// ============================================
// INTERSECTION OBSERVER
// ============================================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show-element");

    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// ============================================
// ACTIVE NAVIGATION
// ============================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {

      link.classList.add("active-link");

    }

  });

});

// ============================================
// PAGE TRANSITION
// ============================================

const transition = document.getElementById("page-transition");

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", (e) => {

    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http")
    ) {

      e.preventDefault();

      gsap.to(transition, {

        scaleY: 1,
        duration: 0.5,
        transformOrigin: "bottom",

        onComplete: () => {

          window.location.href = href;

        }

      });

    }

  });

});

// ============================================
// PREMIUM LOADER
// ============================================

window.addEventListener("load", () => {

  document.body.classList.remove("loading");

  const loader = document.getElementById("loader");

  const loaderBar = document.getElementById("loaderBar");

  if (!loader) return;

  // LOADER BAR

  if (loaderBar) {

    gsap.to(loaderBar, {

      width: "100%",
      duration: 1.8,
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

      gsap.from("section", {

        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"

      });

    }, 1000);

  }, 1800);

});