document.addEventListener('DOMContentLoaded', function() {
  // Barcha accordion sarlavha tugmalarini tanlab olish
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  // Har bir sarlavha tugmasi uchun click hodisasini qo'shish
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Bosilgan tugmaga tegishli kontent elementi
      const content = this.nextElementSibling;
      // Bosilgan tugmaga tegishli ikon
      const icon = this.querySelector('.accordion-icon');

      // Agar kontent yopiq bo'lsa ochish, ochiq bo'lsa yopish
      if (content.style.maxHeight) {
        // Yopish
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
      } else {
        // Ochish
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
      }
    });
  });
});
