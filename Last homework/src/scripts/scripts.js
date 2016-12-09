$(document).ready(function () {

    nunjucks.configure({
        autoescape: true,
        web: {
            async: true
        }
    });

    $.ajax({
        url: "./mockapi/getAllArticles.json",
        success: function (data, status) {
            for (item in data.articles) {
                nunjucks.render('./partials/article.html', data.articles[item], function (err, res) {
                    $('.js-articles').append(res);
                });
            }
        }
    });
    $("nav").on('click', function () {
        $(".nav__items").css('position', 'absolute');
        $(".nav__items").css('z-index', '2');
        $(".nav__items").css('width', '153px');
        $(".nav__items").css('background', '#ecedf5');
        $(".nav__items").css("box-sizing", "border-box");
        $(".nav__items").css('padding', '20px 40px');
        $(".article__category").css('position', 'absolute');
        $(".article__category").css('z-index', '1');
        if ($("body").width() >= 768) {
            $(".nav__items").css('left', '550px');
            $(".nav__items").css('top', '78px');
        } else {
            $(".nav__items").css('left', '100px');
            $(".nav__items").css('top', '78px');
        }
        $(".nav__items").fadeToggle(500);
    })



});