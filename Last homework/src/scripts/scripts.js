$(document).ready(function () {

  nunjucks.configure({
    autoescape: true,
    web: {
      async: true
    }
  });

  $.ajax({
    url: "./mockapi/getAllArticles.json",
    success: function(data, status) {
      for (item in data.articles) {
        nunjucks.render('./partials/article.html', data.articles[item], function (err, res) {
          $('.js-articles').append(res);
        });
      }
    }
  });
    $("nav").on('click', function() {
        $("nav").css('left', '-100px');
        $(".nav__items").fadeIn(300);
    })
    
    
    
});