$(document).ready(function() {
    $(".gif").hover(
        function() {
            var src = $(this).attr("src");
            $(this).attr("src", src.replace(/\.jpg$/i, ".gif"));
        },
        function() {
            var src = $(this).attr("src");
            $(this).attr("src", src.replace(/\.gif$/i, ".jpg"));
        });

        $('a[href*="#"]:not([href="#"])').click(function(e) {

          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top -100
              }, 500);
            }
          }
        });

        $(document).on('click','.collapse.in',function(e) {
        if( ($(e.target).is('a') && ( $(e.target).attr('class') != 'navbar-toggler' )) || ($(e.target).is('img') && ( $(e.target).attr('class') == 'img-fluid' ))  ){
        $(this).collapse('hide');
        }
        });

});

// $(function() {
//
//     $(' .classmtPortfolio > li ').each(function() {
//         $(this).hoverdir();
//     });
//
// });
