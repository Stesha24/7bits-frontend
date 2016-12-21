$(document).ready(function () {
    nunjucks.configure({
        autoescape: true,
        web: {
            async: false
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


    $("#radio1").prop("checked", true);
    $("#tel").inputmask({
        "mask": "+9(999)999-99-99"
    });

    
    $("#submit").on('click', function (e) {
        $("#fName").removeClass('js-invalid');
        $("#fName").removeClass('js-focus');
        $(".js-invText").empty();
        if ($("#fName").val() == '') {
            $("#fName").addClass("js-invalid");
            $("#fName").after("<div id='invfName' class='js-invText'>You must fill this field</div>");
            e.preventDefault();
        }
        if ($("#lName").val() == '') {
            $("#lName").addClass("js-invalid");
            $("#lName").after("<div id='invlName' class='js-invText'>You must fill this field</div>");
            e.preventDefault();
        }
        if ($("#email").val() == '' || !(/^[A-z0-9\._\-]+@[A-z0-9\.]+\.[A-z]{2,4}$/.test($('#email').val()))) {
            console.log($("#email").val());
            $("#email").addClass("js-invalid");
            $("#email").after("<div id='invEmail' class='js-invText'>You must fill this field</div>");
            e.preventDefault();
        }
        if ($("#tel").val() == '' || !(/^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test($('#tel').val()))) {
            $("#tel").addClass("js-invalid");
            $("#tel").after("<div id='invTel' class='js-invText'>You must fill this field</div>");
            e.preventDefault();
        }
        if ($("#date").val() == '') {
            $("#date").addClass("js-invalid");
            $("#date").after("<div id='invDate' class='js-invText'>You must fill this field</div>");
            e.preventDefault();
        }
    })

    $("#fName").on('focus', function () {
        $("#fName").removeClass('js-invalid');
        $("#invfName").empty();
    });

    $("#lName").on('focus', function () {
        $("#lName").removeClass('js-invalid');
        $("#invlName").empty();
    });
    $("#email").on('focus', function () {
        $("#email").removeClass('js-invalid');
        $("#invEmail").empty();
    });
    $("#tel").on('focus', function () {
        $("#tel").removeClass('js-invalid');
        $("#invTel").empty();
    });
    $("#date").on('focus', function () {
        $("#date").removeClass('js-invalid');
        $("#invDate").empty();
        $(function () {
            $("#date").datepicker({
                altFormat: "dd-mm-yy"
            });
        });
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