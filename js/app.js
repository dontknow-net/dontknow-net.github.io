---
---
{% include js/jquery.1.9.1.min.js %}
{% include js/bootstrap.min.js%}

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

  $('body').scrollspy({
      offset: $('#navbarque').height() - 5
  });

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
  });

  $(document).on("click", ".open-modal-apuntate", function () {
       var idMailchimp = $(this).data('id');
       $("#modalApuntate #id_mailchimp").attr("name","group[16001][" + idMailchimp + "]");
  });

  $(document).on("click", ".open-modal-informado", function () {
       var idMailchimp = $(this).data('id');
       $("#modalMeInteresa #id_mailchimp2").attr("name","group[16001][" + idMailchimp + "]");
  });
}());
