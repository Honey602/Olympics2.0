





$(document).ready(function(){
    $('.gallery-item img').on('click', function() {
        var imgSrc = $(this).attr('src');  
        $('#modalImage').attr('src', imgSrc); 
        $('#galleryModal').modal('show'); 
    });
});

$(document).ready(function() {

    $(".navbar-nav a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();  

          
            var hash = this.hash;

            
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 50 
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {
    // Function to animate counting numbers
    function animateStats() {
        $('.stat-number').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
    }

   
    var statsVisible = false;
    $(window).on('scroll', function () {
        var statsSectionOffset = $('#statistics').offset().top - window.innerHeight;
        if (!statsVisible && $(window).scrollTop() > statsSectionOffset) {
            animateStats();
            statsVisible = true; 
        }
    });
});






$(document).ready(function() {
    
    $('a[href^="#related-news"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 50 
            }, 1000);
        }
    });
    
    // Optional: Add fade-in effect for news cards
    $('.news-card').each(function(i) {
        $(this).delay(i * 200).fadeIn(600);
    });
});

$(document).ready(function() {
    // Toggle the display of the answer when the question is clicked
    $('.faq-question').click(function() {
      // Slide up all other answers
      $('.faq-answer').slideUp();
      
      // Toggle the clicked answer
      $(this).next('.faq-answer').slideToggle();
    });
  });

  
  