document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  content.style.opacity = "1";
  content.style.transform = "translateY(0)";
});

//for slide up

document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".profile-hero p");
  const listItems = document.querySelectorAll(".profile-hero li");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // trigger only once
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  paragraphs.forEach((el) => observer.observe(el));
  listItems.forEach((el) => observer.observe(el));
});
  