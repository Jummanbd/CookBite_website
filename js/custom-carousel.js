$(".product_items").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 6000,
    responsiveClass: true,
    navText: [
        "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      991: {
        items: 3,
        loop: true,

      },
      1000: {
        items: 4,
        loop: true,

      },
    },
    
  });

  // Testimonal
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay:false,
    autoplayTimeout:6000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
        loop: false,
      },
      
    },
  })

// Reqular food items
    $(".reqular_food_items").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoplay:false,
      autoplayTimeout:6000,
      responsiveClass: true,
      navText: [
        "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],
      responsive: {
        0: {
          items: 1,
        },
        580: {
          items: 2,
        },
        991: {
          items: 3,
          loop: true,
  
        },
        1000: {
          items: 4,
          loop: true,
  
        },
      },
    })