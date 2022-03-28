$(document).ready(function() {

// functions go here

var i=0;

$('a.link-opens-chapter').on('click', function(e){

  $target = $(this).attr('href');
  if ( $('section'+$target+'').hasClass('hidden') ) {
    i++;
	  $('section'+$target+'').removeClass('hidden');
	  $('section'+$target+'').css({'order': i});
  }
  console.log(i);
});

$('#toBottom').on('click', function() {
  $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
});

$('button.collapsible').on('click', function(e){
  if ( $('.content').hasClass('hidden') ) {
	  $('.content').removeClass('hidden');
    $(this).addClass('active');
  } else {
    $('.content').addClass('hidden');
    $(this).removeClass('active');
  }
});

});



// let scrollToBottom = document.querySelector("#toBottom");
// let pageBottom = document.querySelector("#pageBottom");
//
// scrollToBottom.addEventListener("click", function() {
//   pageBottom.scrollIntoView();
// });
