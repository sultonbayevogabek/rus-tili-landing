const splide = new Splide('.splide', {
  perPage: 4,
  gap: 30,
  rewind: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    1200: {
      perPage: 3,
      gap: 24
    },
    800: {
      perPage: 2,
      gap: 12
    }
  },
  autoplay: true
});

splide?.mount();
