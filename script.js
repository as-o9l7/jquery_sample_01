// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Welcome!' );
    $( 'h1' ).css({
      'color': 'ivory',
      'font-weight':'bold'
    })
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': '#ffc1b2'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.google.co.jp">Google</a></p>' );
    $( 'footer a' ).css( 'color','ivory' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });



});
