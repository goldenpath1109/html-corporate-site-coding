// function viewAll(i){
//     var acc = document.getElementById("accordion" + i);
//     var scrollslider = document.getElementById("scrollslider" + i);
//     var initialHeight = acc.offsetHeight;
//     console.log(initialHeight);
//     if (initialHeight == 162){
//         acc.style.maxHeight = '322px';

//     } else {
//         acc.style.maxHeight = '162px'
//     }
//     if (acc.style.display === "none") {
//         scrollslider.style.display = "none";
//         acc.style.display = "block";
//         acc.style.maxHeight = '322px';
//     } else {
//         scrollslider.style.display = "block";
//         acc.style.display = "none";
//     }
// }
// function viewAll(i){
//     var acc = $("#accordion" + i);
//     var initialHeight = acc.outerHeight();
//     if (initialHeight == 162){
//         acc.css('max-height', '322px');
//     } else {
//         acc.css('max-height', '162px');
//     }
// }
// $(document).ready(function(){
//     $('.scrollslider').slick({
//     //   autoplay: true,  // Enable autoplay
//     //   autoplaySpeed: 1500,  // Set autoplay speed in milliseconds (2 seconds in this example)
//       slidesToShow: 2,  // Show 2 slides at a time
//       slidesToScroll: 1,  // Scroll 1 slide at a time
//       infinite: true,    // Enable infinite scrolling
//     // dots: true, // Add navigation dots
//     prevArrow: '<button type="button" class="my-prev">&#10094;</button>', // Custom previous button
//     nextArrow: '<button type="button" class="my-next">&#10095;</button>', // Custom next button
//     //   responsive: [
//     //     {
//     //       breakpoint: 810,  // Set the breakpoint for when the slider should change
//     //       settings: {
//     //         slidesToShow: 1  // Show 1 slide at a time when screen width is less than 810px
//     //       }
//     //     }
//     //   ]
//     });
//     $('.prev-button').on('click', function() {
//     $('.slider').slick('slickPrev');
//   });

//   $('.next-button').on('click', function() {
//     $('.slider').slick('slickNext');
//   });
//   });
//   function viewAll(i) {
//     $('#accordion'+i).slick('unslick');  // Remove the Slick functionality
//     $('.recital_img_bar').css('display', 'block');  // Show all images
//   }
// $(window).resize(function() {
//     if ($(window).width() < 811) {

//         $('.slider').slick('slickSetOption', true);
//     }
//   });
