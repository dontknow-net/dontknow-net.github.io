---
---
{% include js/jquery.1.9.1.min.js %}
{% include js/bootstrap.min.js%};

(function ($) {

  $('#deepbanner').addClass('db' + (Math.floor(Math.random() * 3) + 1));

  //ajustes de los fijados para la ficha de curso
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
      offset: $('#navbarque').position() + 10
  });

  // iluminación del menu de que-es con scrollspy
  $('body').scrollspy({
      offset: $('#navbarque').height()
  });

  //sistema de smooth scroll para anclas
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
  });

  // control de pantallas modales de apuntate y mantenerse informado
  $(document).on("click", ".open-modal-apuntate", function () {
       var idMailchimp = $(this).data('id');
       $("#modalApuntate #id_mailchimp").attr("name","group[16001][" + idMailchimp + "]");
  });

  $(document).on("click", ".open-modal-informado", function () {
       var idMailchimp = $(this).data('id');
       $("#modalMeInteresa #id_mailchimp2").attr("name","group[16001][" + idMailchimp + "]");
  });

  //tracking de eventos de google analytics
  $('a.open-modal-apuntate').click(function(e) {
    titulo = $(this).data('title');
    _gaq.push(['_trackEvent', 'curso', 'apuntate', titulo]);
  });

  $('a.open-modal-informado').click(function(e) {
    titulo = $(this).data('title');
    _gaq.push(['_trackEvent', 'curso', 'informate', titulo]);
  });

  $('#saber-mas-header').click(function(e) {
    _gaq.push(['_trackEvent', 'saber-mas', 'header']);
  });

  $('#saber-mas-footer').click(function(e) {
    _gaq.push(['_trackEvent', 'saber-mas', 'footer']);
  });

})(jQuery);
