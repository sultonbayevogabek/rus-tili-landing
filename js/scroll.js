const scrollTopBtn = document.getElementById("scrollTopBtn");

// Scroll bo'lganda tugmani ko'rsatish yoki yashirish
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

// Tugma bosilganda yuqoriga qaytarish
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
