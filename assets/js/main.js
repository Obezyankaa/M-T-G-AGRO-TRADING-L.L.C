
/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== VIDEO ====================*/
// const videoFile = document.getElementById('video-file'),
//       videoButton = document.getElementById('video-button'),
//       videoIcon = document.getElementById('video-icon')

// function playPause(){
//     if (videoFile.paused){
//         // Play video
//         videoFile.play()
//         // We change the icon
//         videoIcon.classList.add('ri-pause-line')
//         videoIcon.classList.remove('ri-play-line')
//     }
//     else {
//         // Pause video
//         videoFile.pause();
//         // We change the icon
//         videoIcon.classList.remove('ri-pause-line')
//         videoIcon.classList.add('ri-play-line')

//     }
// }
// videoButton.addEventListener('click', playPause)

// function finalVideo(){
//     // Video ends, icon change
//     videoIcon.classList.remove('ri-pause-line')
//     videoIcon.classList.add('ri-play-line')
// }
// ended, when the video ends
// videoFile.addEventListener('ended', finalVideo)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
  console.log("функция  <-- scrollUp -->");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
});

sr.reveal(
  `.section__title, .test1, .home__social-link, .home__info,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__data,
  .test2, 
           .video__description,
           .subscribe__description,
           .geography__container_img,
           .btn__products`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content,
           .subscribe__form, .geography__text, .btn__products_no, .swiper`,
  {
    origin: "right",
    interval: 100,
  }
);

sr.reveal(`.footer, .test3`, {
  origin: "bottom",
  interval: 100,
});

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== КНОПКИ ВЫБОРА КАТЕГОРИИ ====================*/

// получаем кнопки ( ХАЛЯЛЬ / НЕ ХАЛЯЛЬ )
const btn1 = document.querySelector(".btn__products");
const btn2 = document.querySelector(".btn__products_no");

// открывает категорию ( ХАЛЯЛЬ )
btn1.addEventListener("click", () => {
  const swiper1 = document.querySelector(".block_swiper_one");
  const swiper2 = document.querySelector(".block_swiper_two");
  // в зависимость от нажатой кнопки, присваивается тот или иной класс
  swiper2.style.display = "none";
  swiper1.style.display = "block";

  let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });
});

// открывает категорию ( НЕ ХАЛЯЛЬ )
btn2.addEventListener("click", () => {
  const swiper1 = document.querySelector(".block_swiper_one");
  const swiper2 = document.querySelector(".block_swiper_two");

  // в зависимость от нажатой кнопки, присваивается тот или иной класс
  swiper1.style.display = "none";
  swiper2.style.display = "block";

  let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });
});

/*==================== КНОПКИ КАТЕГОРИЙ ICON ====================*/

// получаем иконки категорий на которые мы можем нажать
const button_chixken = document.querySelector(".button_chixken");
const button_beef = document.querySelector(".button_beef");
const button_rose_veal = document.querySelector(".button_rose_veal");
const button_sausage_products = document.querySelector(
  ".button_sausage_products"
);
const button_chixken_nuggets = document.querySelector(
  ".button_chixken_nuggets"
);
const button_wagyu_beef = document.querySelector(".button_wagyu_beef");
const button_mix_breed = document.querySelector(".button_mix_breed");
const button_lamb_dorper = document.querySelector(".button_lamb_dorper");
const button_pork = document.querySelector(".button_pork");
const button_dumplings = document.querySelector(".button_dumplings");


// иконка BEEF ( говядина )
setTimeout(() => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_chixken = document.querySelector(".swiper_chixken");

  swiper_dumplings.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_beef_block.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
    console.log("BEEF");
},1000);

// иконка ROSE_VEAL ( розовая телятина )
button_rose_veal.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_chixken = document.querySelector(".swiper_chixken");

  swiper_dumplings.style.display = "none";
  swiper_pork.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_rose_veal.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
    console.log("ROSE_VEAL");
});

// иконка CHIXKEN (курица )
button_chixken.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_chixken = document.querySelector(".swiper_chixken");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");

  swiper_dumplings.style.display = "none";
  swiper_pork.style.display = "none"
  swiper_lamb_dorper.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_chixken.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
    console.log("button_chixken");
});

// иконка SAUSAGE_PRODUCTS ( колбаса )
button_sausage_products.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_chixken = document.querySelector(".swiper_chixken");

  swiper_dumplings.style.display = "none";
  swiper_pork.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_sausage_products.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
    console.log("SAUSAGE_PRODUCTS");
});

// иконка CHIXKEN_NUGGETS (нагетцы )
button_chixken_nuggets.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_chixken = document.querySelector(".swiper_chixken");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  
  swiper_dumplings.style.display = "none";
  swiper_pork.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_chixken_nuggets.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
    console.log("CHIXKEN_NUGGETS");
});

// иконка Wagyu Beef ( бык )
button_wagyu_beef.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_chixken = document.querySelector(".swiper_chixken");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");

  swiper_dumplings.style.display = " none";
  swiper_pork.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_wagyu_beef.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
  console.log("swiper_wagyu_beef");
});

// иконка Mix Breed ( телята )
button_mix_breed.addEventListener("click", () => {
    const swiper_dumplings = document.querySelector(".swiper_dumplings");
    const swiper_pork = document.querySelector(".swiper_pork");  
    const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
    const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
    const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
    const swiper_chixken = document.querySelector(".swiper_chixken");
    const swiper_chixken_nuggets = document.querySelector(
      ".swiper_chixken_nuggets"
    );
    const swiper_sausage_products = document.querySelector(
      ".swiper_sausage_products"
    );
    const swiper_beef_block = document.querySelector(".swiper_beef_block");
    const swiper_rose_veal = document.querySelector(".swiper_rose_veal");

    swiper_dumplings.style.display = "none";
    swiper_pork.style.display = "none";
    swiper_lamb_dorper.style.display = "none";
    swiper_sausage_products.style.display = "none";
    swiper_beef_block.style.display = "none";
    swiper_rose_veal.style.display = "none";
    swiper_chixken.style.display = "none";
    swiper_chixken_nuggets.style.display = "none";
    swiper_wagyu_beef.style.display = "none";
    swiper_mix_breed.style.display = "block";

    let swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
    console.log("swiper_wagyu_beef");
});

// иконка Lamb Dorper ( овцы )
button_lamb_dorper.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_chixken = document.querySelector(".swiper_chixken");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");
  
  swiper_dumplings.style.display = "none";
  swiper_pork.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_lamb_dorper.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
  console.log("swiper_wagyu_beef");
});

// иконка Pork ( свинина )
button_pork.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_chixken = document.querySelector(".swiper_chixken");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");

  swiper_dumplings.style.display = "none";
  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
   swiper_pork.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
  console.log("swiper_wagyu_beef");
});

// иконка dumplings ( пельмени )
button_dumplings.addEventListener("click", () => {
  const swiper_dumplings = document.querySelector(".swiper_dumplings");
  const swiper_pork = document.querySelector(".swiper_pork");
  const swiper_lamb_dorper = document.querySelector(".swiper_lamb_dorper");
  const swiper_mix_breed = document.querySelector(".swiper_mix_breed");
  const swiper_wagyu_beef = document.querySelector(".swiper_wagyu_beef");
  const swiper_chixken = document.querySelector(".swiper_chixken");
  const swiper_chixken_nuggets = document.querySelector(
    ".swiper_chixken_nuggets"
  );
  const swiper_sausage_products = document.querySelector(
    ".swiper_sausage_products"
  );
  const swiper_beef_block = document.querySelector(".swiper_beef_block");
  const swiper_rose_veal = document.querySelector(".swiper_rose_veal");

  swiper_sausage_products.style.display = "none";
  swiper_beef_block.style.display = "none";
  swiper_rose_veal.style.display = "none";
  swiper_chixken.style.display = "none";
  swiper_chixken_nuggets.style.display = "none";
  swiper_wagyu_beef.style.display = "none";
  swiper_mix_breed.style.display = "none";
  swiper_lamb_dorper.style.display = "none";
  swiper_pork.style.display = "none";
  swiper_dumplings.style.display = "block";

  let swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
  console.log("swiper_wagyu_beef");
});


    const swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });


const scroll_down = document.querySelector(".scroll-down");
scroll_down.style.display = "none";
setTimeout(() => {
scroll_down.style.display = "block";
},3000)