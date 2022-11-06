$(function(){
    
    new VenoBox({
       selector: '.my-video-links',
   });
       
      new VenoBox({
       selector: '.my-image-links',
       numeration: true,
       infinigall: true,
       share: true,
       spinner: 'rotating-plane'
   });
       
       $('.test_slider').owlCarousel({
       loop:true,
       margin:30,
       responsiveClass:true,
        autoplay:true,
       autoplayTimeout:2000,
       smartSpeed: 500,
       autoplayHoverPause:true,
       nav: true,
       navText:['<i class="fa-solid fa-long-arrow-left arrow_lf"></i>','<i class="fa-solid fa-long-arrow-right arrow_rt"></i>'],
       responsive:{
           0:{
               items:1,
           },
           600:{
               items:1,
           },
           1000:{
               items:1,
           },
           1200:{
               items:1,
           }
       }
   })
   
   });