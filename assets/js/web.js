
/**
 * 导航js
 */
$(function () {
    $('.kt-nav-box').bind("touchmove", function (e) {
        e.preventDefault();
    });
    $(".nav-open").click(function () {
        $(".kt-nav-box").animate({ left: 0 });
    });
    $(".kt-nav-box .btn-close").click(function () {
        $(".kt-nav-box").animate({ left: "-100%" });
    });
    var item1List = $(".kt-nav-box .nav-item1");
    var item2List = $(".kt-nav-box .nav-item2");
    item1List.each(function () {
        var item1 = $(this);
        item1.mousedown(function () {
            item1.addClass("active");
        });
        item1.mouseup(function () {
            item1.removeClass("active");
        });
        item1.click(function () {
            var index1 = item1.attr("data-index");
            var status1 = item1.attr("data-status");
            if (status1 == "0") {
                item1.attr("data-status", "1");
                item1.find(".op").attr("src", "assets/imgs/btn-up.png")
                item2List.each(function () {
                    var item2 = $(this);
                    var index2 = item2.attr("data-index");
                    if (index1 == index2) {
                        item2.slideDown();
                    }
                });
                item1List.each(function () {
                    var item1_t = $(this);
                    var index1_t = item1_t.attr("data-index");
                    var status1_t = item1_t.attr("data-status");
                    if (status1_t == "1" && index1_t != index1) {
                        item1_t.attr("data-status", "0");
                        item1_t.find(".op").attr("src", "assets/imgs/btn-down.png")
                        item2List.each(function () {
                            var item2_t = $(this);
                            var index2_t = item2_t.attr("data-index");
                            if (index1_t == index2_t) {
                                item2_t.slideUp();
                            }
                        });
                    }
                });
            }
            else {
                item1.attr("data-status", "0");
                item1.find(".op").attr("src", "assets/imgs/btn-down.png")
                item2List.each(function () {
                    var item2 = $(this);
                    var index2 = item2.attr("data-index");
                    if (index1 == index2) {
                        item2.slideUp();
                    }
                });
            }
        })
    })
});
/**
 * 帮助文档
 */
$(function () {
    var questions = $(".helpbox").find(".desc");
    questions.each(function () {
        var question = $(this);
        question.find(".ask").click(function () {
            var index = question.attr("data-index");
            var status = question.attr("data-status");
            if (status == 0) {
                question.attr("data-status", "1");
                question.find(".answer").show();
                question.find(".ask").addClass("hover");
                question.css({"background":"#f1f1f1"});
                questions.each(function () {
                    var question_t = $(this);
                    var index_t = question_t.attr("data-index");
                    var status_t = question_t.attr("data-status");
                    if (index_t != index && status_t == 1) {
                        question_t.attr("data-status", "0");
                        question_t.find(".answer").hide();
                        question_t.find(".ask").removeClass("hover");
                    }
                });
            }
            else {
                question.attr("data-status", "0");
                question.find(".answer").hide();
                question.find(".ask").removeClass("hover");
                question.css({"background":"#ffffff"});
            }
        });

    });
});

/**
 * 返回顶部
 */
$(function () {
    $(".gotop").hide();
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() <= 50) {
            $(".gotop").hide();
        } else {
            $(".gotop").show();
        }
    });
    $(".gotop").bind("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});
