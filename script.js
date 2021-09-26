$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

// Box clickable
$('.click-img').on('click', function(){
  var link = $(this).attr("alt");
  window.open(link);
})

// Form Empty
function submitForm() {
  var field = true;
  var frm = $('#myForm')[0];
  $('input:required').each(function() {
    if ($(this).val() === ''){
      field = false;
    }
  });
  if(field!=false){
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
  }
  
}
