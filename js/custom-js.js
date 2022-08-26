  // Load common parts on each page
  $(document).ready(function() {
    $(function() {
      $("#header").load("header.html");
      $("#footer").load("footer.html");
    });

    // Page 3 - Product
    // Slideshow
    const slideWidth = 590; // Width of each slide
    let currentSlide = 0; // Count the number of current displayed slide
    const numSlides = $('.slide>li').length; // Get how many slides

    const showSlide = (index) => {
      // If the first slide is being displayed, hide the prev mark
      if (index === 0) {
        $('.prev').hide();
      } else {
        $('.prev').show();
      }

      // If the last slide is being displayed, hide the next mark
      if (index === numSlides - 1) {
        $('.next').hide();
      } else {
        $('.next').show();
      }

      // If there is an animation in progress, cancel it and then start an animation to change the left
      $('.slide')
        .stop()
        .animate({
            left: `${-slideWidth * index}px`,
          },
          380,
        );
    };
    // Display the previous slide when the prev mark is pressed
    $('.prev').on('click', (e) => {
      e.preventDefault();

      currentSlide -= 1;
      showSlide(currentSlide);
    });

    // Display the next slide when the next mark is pressed
    $('.next').on('click', (e) => {
      e.preventDefault();

      currentSlide += 1;
      showSlide(currentSlide);
    });

    // Show the first slide
    showSlide(currentSlide);
  });
