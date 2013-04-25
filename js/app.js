(function() {
  $('#columna-lateral-wrapper').height($("#columna-lateral").height());
  $('#columna-lateral').affix({
      offset: $('#columna-lateral').position()
  });
  $('.page-title').affix({
      offset: $('.page-title').position()
  });

}());
