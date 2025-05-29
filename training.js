document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% visible triggers animation
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // stops observing once revealed
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  revealElements.forEach((el) => {
    observer.observe(el);
  });
});

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

revealElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll(".slide-up");

  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    }
  );

  slideElements.forEach((el) => {
    appearOnScroll.observe(el);
  });
});
