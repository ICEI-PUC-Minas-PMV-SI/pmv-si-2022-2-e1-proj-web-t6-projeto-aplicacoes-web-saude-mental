// ANIMAÇÕES

// 1 - Smooth scrooling

const buttonScroll = document.querySelector("#button-scroll");
const content01 = document.querySelector("#content01");

buttonScroll.addEventListener("click", function (e) {
  content01.scrollIntoView({ behavior: "smooth" });
});

// 2 - Reveal sections

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
