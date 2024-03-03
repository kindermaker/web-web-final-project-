$(document).ready(function(){
  $("#navigation li a").on("click", function(e){
    var hrefval = $(this).attr("href");
    
    if(hrefval === "#about") {
      e.preventDefault();
      var distance = $('#mainpage').css('right');
      
      if(distance === "auto" || distance === "0px") {
        $(this).addClass("open");
        openSidepage();
      } else {
        closeSidepage();
      }
    }
  });
$("#closebtn").on("click", function(e){
  e.preventDefault();
  closeSidepage();
});
  function openSidepage() {
    $('#mainpage').animate({
      left: '350px'
    }, 400, 'easeOutBack'); 
  }
  
  function closeSidepage(){
    $("#navigation li a").removeClass("open");
    $('#mainpage').animate({
      left: '0px'
    }, 400, 'easeOutQuint');  
  }
}
)

  
  $("#navigation li a").on("mouseenter", function(){

    var classval = $(this).hasClass("hovertrigger");
    
    if(classval == true) {
      var distance = $('#mainpage').css('left');
      
      if(distance == "auto" || distance == "0px") {
        $(this).addClass("open");
        openSidepage();
      }
    }
  }); // end hover event handler
  
  $("#closebtn").on("click", function(e){
    e.preventDefault();
    closeSidepage();
  }); // end close button event handler

  function openSidepage() {
    $('#mainpage').animate({
      left: '350px'
    }, 400, 'easeOutBack'); 
  }
  
  function closeSidepage(){
    $("#navigation li a").removeClass("open");
    $('#mainpage').animate({
      left: '0px'
    }, 400, 'easeOutQuint');  
  } 