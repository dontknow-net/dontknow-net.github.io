(function() {
  $('#columna-lateral-wrapper').height($("#columna-lateral").height());
  $('#columna-lateral').affix({
      offset: $('#columna-lateral').position()
  });

  $('#page-title-wrapper').height($(".page-title").height());
  $('#page-title-container').affix({
      offset: $('.page-title').position()
  });

  $('#navbarque-wrapper').height($("#navbarque").height());
  $('#navbarque').affix({
      offset: $('#navbarque').position()
  });

  $('#navbarque').scrollspy();

  $(".scroll").click(function(event){
    //event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 500);
  });

}());
