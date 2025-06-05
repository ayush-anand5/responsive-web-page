
// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-icon');

if (searchInput && searchButton) {
    const handleSearch = () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Implement actual search functionality here
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Category navigation
const categoryPrev = document.querySelector('.nav-arrow.prev');
const categoryNext = document.querySelector('.nav-arrow.next');
const categoriesGrid = document.querySelector('.categories-grid');

if (categoryPrev && categoryNext && categoriesGrid) {
    let scrollPosition = 0;
    const scrollAmount = 200;

    categoryPrev.addEventListener('click', () => {
        scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
        categoriesGrid.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    categoryNext.addEventListener('click', () => {
        scrollPosition = Math.min(
            scrollPosition + scrollAmount,
            categoriesGrid.scrollWidth - categoriesGrid.clientWidth
        );
        categoriesGrid.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
}

// Newsletter form
const emailInput = document.querySelector('.email-input input');
const emailSubmitButton = document.querySelector('.email-input button');

if (emailInput && emailSubmitButton) {
    emailSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (email && isValidEmail(email)) {
            console.log('Newsletter signup:', email);
            // Implement newsletter signup functionality here
            emailInput.value = '';
            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});


//  slick--------------
$(document).ready(function () {
    $('.categories-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: $('.nav-arrow.prev'),
        nextArrow: $('.nav-arrow.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// squarel image
document.addEventListener("DOMContentLoaded", function () {
    // const modelButtons = document.querySelectorAll('.model-button');
  const modelImage = document.getElementById("model-image");
  const modelDescription = document.getElementById("model-description");

  const models = {
    "3D-Models": {
      image: "public/shutterstock-154734689-1.png",
      description: "This is a 3D-Modles PBR 3D Model suitable for gaming and AR/VR applications."
    },

    "low-poly": {
      image: "public/shutter-low-poly.png",
      description: "This is a high-performance Low-poly PBR 3D Model suitable for gaming and AR/VR applications."
    },
    "printing": {
      image: "public/shutter-printing.png",
      description: "This 3D Printing Model is designed for high-accuracy prototyping and manufacturing."
    }
  };

  document.querySelectorAll(".model-button").forEach(button => {
    button.addEventListener("click", function () {
      const modelKey = this.getAttribute("data-model");
      if (models[modelKey]) {
        modelImage.src = models[modelKey].image;
        modelDescription.textContent = models[modelKey].description;
      }
    });
  });
});
