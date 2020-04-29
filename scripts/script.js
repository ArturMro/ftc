console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  
  
  
});


function addMyEventListeners(){


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



};














