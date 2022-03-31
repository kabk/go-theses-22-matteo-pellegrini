$(document).ready(function() {

var i=0;

$('a.start').on('click', function(e){
  $('.intro').addClass('hidden');
  $('.extra-links').removeClass('hidden');
});

$('a.link-opens-chapter').on('click', function(e){

  var cards = $( 'section.card[id^="chapter-"]' ).not( '.hidden' );
  cards.each( function( index, card ) {
  	var disabledlinks = $( this ).find( 'a.link-opens-chapter' );
  	disabledlinks.addClass( 'hidden' );
  } );

  $target = $(this).attr('href');
  if ( $('section'+$target+'').hasClass('hidden') ) {
    i++;

    $('section'+$target+'').removeClass('hidden');
	$('section'+$target+'').css({'order': i});

    if (i==4){
      $("#conclusion").removeClass('hidden');
      $('.extra-links').addClass('hidden');
    }
  }

  var cards = $( 'section.card[id^="chapter-"]' ).not( '.hidden' );
  cards.each( function( index, card ) {
  	var disabledlinks = $( 'a.link-opens-chapter[href="#' + card.id + '"]' );
  	disabledlinks.addClass( 'hidden' );
  } );

  console.log(i);
});

});
