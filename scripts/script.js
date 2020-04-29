console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  
  
  
});



function addMyEventListeners(){

  // code to make navigation apear after clicking hamburger menu icon
  $('.menuIcons').on('click', function(){
    var hamburger = $('#hamburger');
    var cross = $('#cross');
    var nav = $('nav');
    if (hamburger.css('display') == 'block' && nav.css('display') == 'none'){
      hamburger.css('display','none');
      cross.css('display','block');
      nav.css('display','block');
    }else{
      hamburger.css('display','block');
      cross.css('display','none');
      nav.css('display','none');
    }
  
  });

  //code for mobile and tablet for menu to disapear after clicking on it
  $('nav').on('click',function(){
    var nav = $('nav');
    var hamburger = $('#hamburger');
    var cross = $('#cross');
    var nav = $('nav');
    var screenSize = $(window).width();
    console.log(screenSize);
    if (screenSize <= 982) {  
      //only if window width is smaller than 983px
      nav.css('display','none');
      hamburger.css('display','block');
      cross.css('display','none');
    }
  })

  //accordion for FAQ section
  $('.arrowsContainer').click (function(){
    console.log('Arrow has been clicked');
    $(this).each(function(){
      $(this).children('.arrowDown').toggle().css('display');
      $(this).children('.arrowUp').toggle().css('display', 'block');
      $(this).next().slideToggle();
    });
  });



  //testimonials carousele
  var positionIndex = 0;
  $('.fa-chevron-left').on('click',function(){
    console.log('Left arrow have been clicked');
    positionIndex = (positionIndex > 0) ? positionIndex - 1 : 0; //if positionIndex value is bigger than 0 remove 1 from index else its zero
    $('.slider').css('transform', 'translate(' + (positionIndex) * -20 + '%)');
  });

  $('.fa-chevron-right').on('click',function(){
    console.log('Right arrow have been clicked');
    positionIndex = (positionIndex < 3) ? positionIndex + 1 : 3; //if positionIndex value is less than 3 add 1 to index else its 3   - it is three couse we start as default from position 2(index 1) not 1(index 0)
    $('.slider').css('transform', 'translate(' + (positionIndex) * -20 + '%)');
  });



};






 







