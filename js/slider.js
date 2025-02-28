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

const certificatesSlider = new Splide('#certificates-slider', {
  perPage: 2,
  gap: 20,
  arrows: false,
  pagination: false,
  fixedWidth: '60%',
  breakpoints: {
    1300: {
      fixedWidth: '100%',
      gap: 16
    },
    1200: {
      fixedWidth: null,
      perPage: 2,
      gap: 16
    },
    800: {
      fixedWidth: '60%',
      gap: 12
    }
  },
  autoplay: true,
  type: 'loop'
});

certificatesSlider?.mount();

function navigate(slider, direction) {
  if (slider === 'comments') {
    commentsSlider?.go(direction)
    commentsSlider.Components.Autoplay.pause();
  }
  if (slider === 'certificates') {
    certificatesSlider?.go(direction)
    certificatesSlider.Components.Autoplay.pause();
  }
}
