const commentsSlider = new Splide('#comments-slider', {
  perPage: 4,
  gap: 30,
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
  autoplay: true,
  type: 'loop'
});

commentsSlider?.mount();

function navigate(slider, direction) {
  if (slider === 'comments') {
    commentsSlider?.go(direction)
    commentsSlider.Components.Autoplay.pause();
  }
}
