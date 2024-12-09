var serviceSlide = tns({
    container: ".riotForge__slider",
    items: 3,
    speed: 800,
    slideBy: 'page',
    autoplay: false,
    navPosition: "bottom",
    axis: "horizontal",
    containerControls: "#riotForge__controls",
    prevButton: ".prev",
    nextButton: ".next",
    mouseDrag: true,
    responsive: {
        1080: {
          items: 3,
        },
        200: {
            items: 1,
        }
      }
  });

  // console.log('homesliderworking')