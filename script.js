const config = window.SITE_CONFIG || {};

document.title = config.siteTitle || document.title;
document.querySelectorAll("[data-coach-name]").forEach((element) => {
  element.textContent = config.coachName || "Your Coach";
});
document.querySelectorAll("[data-location]").forEach((element) => {
  element.textContent = config.location || "Local training";
});
document.querySelectorAll("[data-email]").forEach((element) => {
  element.textContent = config.email || "coach@example.com";
});
document.querySelectorAll("[data-email-link]").forEach((element) => {
  element.href = `mailto:${config.email || "coach@example.com"}`;
});
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.getElementById("site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.getElementById("inquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Training inquiry from ${data.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTraining: ${data.get("training")}\n\nGoals / questions:\n${data.get("message")}`
  );
  window.location.href = `mailto:${config.email || "coach@example.com"}?subject=${subject}&body=${body}`;
});
