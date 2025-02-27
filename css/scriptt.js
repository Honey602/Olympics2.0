$(document).ready(function() {
    $('.faq-question').click(function() {

      $('.faq-answer').slidetoggle();
      
      $(this).next('.faq-answer').slideDown();
    });
  });
  