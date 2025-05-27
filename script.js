document.addEventListener("DOMContentLoaded", function () {
  // Navigation menu toggle for mobile
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Industries Slider
  const sliderContainer = document.querySelector(".slider-container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slides = document.querySelectorAll(".slide");

  if (sliderContainer && prevBtn && nextBtn) {
    let slideWidth = slides[0].clientWidth + 20; // slide width + margin
    let slideIndex = 0;
    const slidesPerView =
      window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
    const totalSlides = slides.length;

    // Update slide width on window resize
    window.addEventListener("resize", function () {
      slideWidth = slides[0].clientWidth + 20;
      moveToSlide(slideIndex);
    });

    // Next button click event
    nextBtn.addEventListener("click", function () {
      if (slideIndex < totalSlides - slidesPerView) {
        slideIndex++;
        moveToSlide(slideIndex);
      } else {
        slideIndex = 0;
        moveToSlide(slideIndex);
      }
    });

    // Previous button click event
    prevBtn.addEventListener("click", function () {
      if (slideIndex > 0) {
        slideIndex--;
        moveToSlide(slideIndex);
      } else {
        slideIndex = totalSlides - slidesPerView;
        moveToSlide(slideIndex);
      }
    });

    // Move to specific slide
    function moveToSlide(index) {
      sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // Auto slide every 5 seconds
    setInterval(function () {
      if (slideIndex < totalSlides - slidesPerView) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      moveToSlide(slideIndex);
    }, 5000);
  }

  // Gallery Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      tabBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to current button
      this.classList.add("active");

      const category = this.getAttribute("data-tab");

      // Filter gallery items
      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (category === "all" || category === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Image Modal
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModal = document.querySelector(".close-modal");
  const viewBtns = document.querySelectorAll(".view-image");

  viewBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const galleryItem = this.closest(".gallery-item");
      const img = galleryItem.querySelector("img");
      const caption = galleryItem.querySelector("h4").textContent;

      modal.style.display = "block";
      modalImg.src = img.src;
      modalCaption.textContent = caption;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Testimonials Slider
  const dots = document.querySelectorAll(".dot");
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  // Show the first testimonial initially
  showTestimonial(currentTestimonial);

  // Dot click event
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
    });
  });

  // Function to show a specific testimonial
  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.style.display = "none";
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    testimonials[index].style.display = "block";
    dots[index].classList.add("active");
  }

  // Auto switch testimonials every 3 seconds
  setInterval(function () {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  }, 3000);

  // Form submission with toast notification
  const contactForm = document.getElementById("contactForm");
  const joinTeamForm = document.getElementById("joinTeamForm");
  const newsletterForm = document.querySelector("#newsletterForm");
  const toast = document.getElementById("toast");

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("contactName").value;
      const email = document.getElementById("contactEmail").value;
      const phone = document.getElementById("contactPhone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("contactMessage").value;

      // Here you would typically send this data to a server
      console.log("Contact Form Submitted:", {
        name,
        email,
        phone,
        subject,
        message,
      });

      // Show success toast
      showToast("Message sent successfully! We'll contact you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Join team form submission
  if (joinTeamForm) {
    joinTeamForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const position = document.getElementById("position").value;
      const experience = document.getElementById("experience").value;
      const message = document.getElementById("message").value;

      // Here you would typically send this data to a server
      console.log("Application Submitted:", {
        name,
        email,
        phone,
        position,
        experience,
        message,
      });

      // Show success toast
      showToast(
        "Application submitted successfully! We'll review your details and get back to you."
      );

      // Reset form
      joinTeamForm.reset();
    });
  }

  // Newsletter form submission
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get email value
      const email = this.querySelector('input[type="email"]').value;

      // Here you would typically send this data to a server
      console.log("Newsletter Subscription:", { email });

      // Show success toast
      showToast("Thank you for subscribing to our newsletter!");

      // Reset form
      newsletterForm.reset();
    });
  }

  // Function to show toast notification
  function showToast(message) {
    const toastMessage = document.querySelector(".toast-message");
    toastMessage.textContent = message;

    toast.classList.add("show");

    // Hide toast after animation completes (5 seconds)
    setTimeout(function () {
      toast.classList.remove("show");
    }, 5000);
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Adjust for header height

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
