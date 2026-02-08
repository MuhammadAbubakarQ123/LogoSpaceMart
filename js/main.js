/**
* Template Name: Clinic
* Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
* Updated: Jul 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();


  const slides = document.querySelectorAll(".slider .slide");
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 5000);

  const texts = [
    { text: "Smart Solutions for Your Business Growth .", highlight: "Solutions" },
    { text: "We Build Digital Experiences That Matter .", highlight: "Digital Experiences" },
    { text: "Reliable Services. Real Results .", highlight: "Services" },
    { text: "Turning Ideas Into Powerful Solutions .", highlight: "Powerful Solutions" }
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const speed = 100;
  const delay = 1100;
  const el = document.getElementById("typewriter");

  function typeWriter() {
    const current = texts[textIndex];
    const fullText = current.text;

    charIndex += isDeleting ? -1 : 1;

    let visibleText = fullText.substring(0, charIndex);

    // apply highlight only when full word is typed
    if (visibleText.includes(current.highlight)) {
      visibleText = visibleText.replace(
        current.highlight,
        `<span class="highlight">${current.highlight}</span>`
      );
    }

    el.innerHTML = visibleText;

    if (!isDeleting && charIndex === fullText.length) {
      setTimeout(() => isDeleting = true, delay);
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
  }

  typeWriter();



setInterval(() => {
  const stack = document.querySelector(".image-stack");
  const firstImage = stack.firstElementChild;
  stack.appendChild(firstImage);
}, 5000);



setInterval(() => {
  const stack = document.getElementById("imageStack");
  const frontImage = stack.firstElementChild;
  stack.appendChild(frontImage);
}, 5000);
 setInterval(() => {
    const front = document.querySelector('.img-front');
    const back = document.querySelector('.img-back');

    // classes swap
    front.classList.remove('img-front');
    front.classList.add('img-back');

    back.classList.remove('img-back');
    back.classList.add('img-front');
  }, 5000); // 5 seconds




