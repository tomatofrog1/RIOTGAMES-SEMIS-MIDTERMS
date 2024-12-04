var slider = tns({
    container: '.newsCard__wrapper',
    items: 2,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    navPosition: "bottom",
    containerControls: "#newsCard__controls",
    prevButton: ".prev",
    nextButton: ".next",
    responsive: {
        900: {
            items: 2
        },
        500: {
          items: 1
        }
      }
  });