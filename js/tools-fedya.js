$(document).ready(function() {
    
    // Charts
    
    $("body").on("click", ".chart-trigger a", function() {
        
        $(this).closest(".chart-trigger").find("a").removeClass("active");
        $(this).addClass("active");
        
        var triggerVal = $(this).data("trigger-val");
        
        $(this).closest(".chart").find(".chart-subcol").each(function() {
            
            $(this).animate({
                height: $(this).attr("data-val-" + triggerVal)
            },1000)
            
        });
        
        return false;
        
    })
    
    // Charts END
    
    // Modal windows
    
    $(".modal-slider").css({
        height: 200,
        opacity: 0
    });
    
        
    $(".modal-prev").click(function () {
        $(this).closest(".modal").find(".modal-slider").slick("slickPrev");
    });

    $(".modal-next").click(function () {
        $(this).closest(".modal").find(".modal-slider").slick("slickNext");
    });
        
    
    $(".modal").on("shown.bs.modal", function () {
        if ($(this).find(".modal-slider").length) {
            
            $(".modal-slider").on("afterChange", function (event, slick, currentSlide) {
                adjustModal();
            });
            
            $(this).find(".modal-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                adaptiveHeight: true
            }).css({
                height: "auto",
                opacity: 1
            });
            
        }
        
        adjustModal();
        
    });
    
    $(window).resize(function () {
        
        adjustModal();
        
    });
    
    function adjustModal() {
        
        if ($(window).height() < $(".modal.in .modal-content").height() + 60) {
            $(".modal.in").addClass("no-flex");
        } else {
            $(".modal.in").removeClass("no-flex");
        }
        
    }
    
    
    // Modal windows END
    
    createSlides();

    resizeContent();

    $('body').on('click', '.header-slides-link', function(e) {
        $(this).toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.header-slides').length == 0) {
            $('.header-slides-link').removeClass('open');
        }
    });

    $('body').on('mouseover', '.header-slides-link', function(e) {
        var curImg = $(this).find('span img');
        var curScr = curImg.attr('src');
        curImg.attr('src', curImg.data('animate'));
        curImg.data('animate', curScr);
    });

    $('body').on('mouseout', '.header-slides-link', function(e) {
        var curImg = $(this).find('span img');
        var curScr = curImg.attr('src');
        curImg.attr('src', curImg.data('animate'));
        curImg.data('animate', curScr);
    });

    $('body').on('click', '.header-stacks-link', function(e) {
        $(this).toggleClass('open');
        $('.header-stacks-list').slideToggle();
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.header-stacks').length == 0) {
            $('.header-stacks-link').removeClass('open');
            $('.header-stacks-list').slideUp();
        }
    });

    $('body').on('mouseover', '.header-stacks-link', function(e) {
        var curImg = $(this).find('span img');
        var curScr = curImg.attr('src');
        curImg.attr('src', curImg.data('animate'));
        curImg.data('animate', curScr);
    });

    $('body').on('mouseout', '.header-stacks-link', function(e) {
        var curImg = $(this).find('span img');
        var curScr = curImg.attr('src');
        curImg.attr('src', curImg.data('animate'));
        curImg.data('animate', curScr);
    });

    $('body').on('mouseover', '.footer-link-charts, .footer-link-download, .footer-link-info', function(e) {
        var curImg = $(this).find('img');
        var curScr = curImg.attr('src');
        curImg.attr('src', curImg.data('animate'));
        curImg.data('animate', curScr);
    });

    $('body').on('mouseout', '.footer-link-charts, .footer-link-download, .footer-link-info', function(e) {
        var curImg = $(this).find('img');
        var curScr = curImg.attr('src');
        curImg.attr('src', curImg.data('animate'));
        curImg.data('animate', curScr);
    });

    $('body').on('click', '.main-menu-item-link', function(e) {
        var curBlock = $(this).parent();
        if (curBlock.find('.main-menu-content').length > 0) {
            curBlock.toggleClass('open');
            curBlock.find('.main-menu-content').slideToggle(300);
            $('.main').toggleClass('open');
            e.preventDefault();
        }
    });

    $('body').on('click', '.header-stacks-item-link', function(e) {
        var curBlock = $(this).parent();
        if (curBlock.find('.header-stacks-sub').length > 0) {
            curBlock.toggleClass('open');
            e.preventDefault();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.header-stacks-item').length == 0) {
            $('.header-stacks-item').removeClass('open');
        }
    });

    $('body').on('click', '.tabs-menu ul li a', function(e) {
        var curLi = $(this).closest("li");
        if (!curLi.hasClass('active')) {
            var curTabs = curLi.closest('.tabs');
            var curIndex = curTabs.find('.tabs-menu ul li').index(curLi);
            curTabs.find('.tabs-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            
            curTabs.find(".tab").hide();
            curTabs.find(".tab").eq(curIndex).fadeIn(250);
            
        }
        e.preventDefault();
    });

    $('body').on('click', '.funds-item-link', function() {
        var curItem = $(this).parent();
        if (curItem.hasClass('active')) {
            curItem.removeClass('active');
        } else {
            $('.funds-item.active').removeClass('active');
            curItem.addClass('active');
        }
    });

    $('body').on('click', '.funds-item-window-prev', function(e) {
        var curIndex = $('.funds-item').index($('.funds-item.active'));
        curIndex--;
        if (curIndex < 0) {
            curIndex = $('.funds-item').length - 1;
        }
        $('.funds-item').eq(curIndex).find('.funds-item-link').trigger('click');
        e.preventDefault();
    });

    $('body').on('click', '.funds-item-window-next', function(e) {
        var curIndex = $('.funds-item').index($('.funds-item.active'));
        curIndex++;
        if (curIndex > $('.funds-item').length - 1) {
            curIndex = 0;
        }
        $('.funds-item').eq(curIndex).find('.funds-item-link').trigger('click');
        e.preventDefault();
    });

    $('body').on('click', '.funds-item-window-close', function(e) {
        $('.funds-item.active').removeClass('active');
        e.preventDefault();
    });

    $('body').on('click', '.ajax-page', function(e) {
        var curLink = $(this);

        if (typeof (history.pushState) != 'undefined') {
            var curLoad = $('.pageload-overlay');
            var curSrc = curLoad.find('img').attr('src');
            curLoad.find('img').attr('src', curLoad.find('img').data('animate'));
            curLoad.find('img').data('animate', curSrc);

            curLoad.fadeIn(function() {
                var startTime = Date.now();
                $.ajax({
                    url: curLink.attr('href'),
                    dataType: 'html',
                    cache: false
                }).done(function(response) {
                    var obj = {Page: '', Url: curLink.attr('href')};
                    history.pushState(obj, obj.Page, obj.Url);

                    var newHTML = $('<div></div>').html(response);
                    $('header').html(newHTML.find('header').html());
                    $('footer').html(newHTML.find('footer').html());
                    $('.wrapper-content').html(newHTML.find('.wrapper-content').html());
                    if (curLink.hasClass('ajax-page-main')) {
                        $('body').removeClass('page-inner');
                    } else {
                        $('body').addClass('page-inner');
                    }

                    newHTML.remove();

                    resizeContent();

                    var processTime = Date.now() - startTime;

                    if (processTime < 2000) {
                        window.setTimeout(showPage, 2000 - processTime);
                    } else {
                        showPage();
                    }

                    function showPage() {
                        $('.pageload-overlay').fadeOut(function() {
                            var curSrc = curLoad.find('img').attr('src');
                            curLoad.find('img').attr('src', curLoad.find('img').data('animate'));
                            curLoad.find('img').data('animate', curSrc);

                            afterLoadContent();
                        })
                    }
                });
            });

            e.preventDefault();
        }
    });

    $('body').on('click', '.pager a', function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            var curIndex = $('.pager a').index(curLink);
            $('.wrapper').slick('slickGoTo', curIndex);
        }
        e.preventDefault();
    });
});

$(window).on('load resize', resizeContent);

function resizeContent() {
    var windowHeight = $(document).height();
    $('.wrapper-content').height(windowHeight - $('header').height() - $('footer').height());

    $('.insur-scheme-center-inner').each(function() {
        var curBlock = $(this);
        var curHeight = curBlock.parent().height();
        var curWidth = $('.content').width();
        curBlock.height(curHeight);
        curBlock.find('span').css({'border-top-width': curHeight / 2, 'border-bottom-width': curHeight / 2});
        curBlock.find('strong').css({'border-left-width': curWidth / 2, 'border-right-width': curWidth / 2});
    });
}

$(window).on('load', function() {
    afterLoadContent();
});

function afterLoadContent() {
/*    $('.header-slides-list-content').jScrollPane({
        autoReinitialise: true
    });

    $('.page-inner .wrapper-content').jScrollPane({
        autoReinitialise: true
    });*/

    $('.funds-item').addClass('show');
}

function createSlides() {
    if ($('.pager').length > 0) {
        $('.wrapper-inner').addClass('loaded');
        var curPager = $('.pager');
        var curIndex = curPager.find('a').index(curPager.find('a.active'));
        curPager.find('a').each(function() {
            var newIndex = curPager.find('a').index($(this));
            if (newIndex < curIndex) {
                $('.wrapper').prepend('<div class="wrapper-inner"><div class="wrapper-content"></div></div>');
            }
            if (newIndex > curIndex) {
                $('.wrapper').append('<div class="wrapper-inner"><div class="wrapper-content"></div></div>');
            }
        });

        $(".pager-alt").slick({
            slidesToScroll: 3,
            variableWidth: true,
            infinite: false,
            swipe: false
        });

        $('.wrapper').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: curIndex,
            arrows: true,
            dots: false,
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var curSlide = $('.wrapper-inner').eq(nextSlide);
            if (!curSlide.hasClass('loaded')) {
                var curLink = $('.pager a').eq(nextSlide);
                if (typeof (history.pushState) != 'undefined') {
                    curSlide.find('.wrapper-content').append('<div class="pageload-overlay"></div>');
                    var startTime = Date.now();
                    $.ajax({
                        url: curLink.attr('href'),
                        dataType: 'html',
                        cache: false
                    }).done(function(response) {
                        var obj = {Page: '', Url: curLink.attr('href')};
                        history.pushState(obj, obj.Page, obj.Url);

                        var newHTML = $('<div></div>').html(response);
                        //$('header').html(newHTML.find('header').html());
                        //$('footer').html(newHTML.find('footer').html());

                        newHTML.remove();

                        var processTime = Date.now() - startTime;

                        if (processTime < 2000) {
                            window.setTimeout(function() {
                                var apiScroll = curSlide.find('.wrapper-content').data('jsp');
                                if (apiScroll) {
                                    apiScroll.destroy();
                                }
                                curSlide.find('.wrapper-content').prepend(newHTML.find('.wrapper-content').html());
//                                curSlide.find('.wrapper-content').jScrollPane({
//                                    autoReinitialise: true
//                                });
                                curSlide.addClass('loaded');
                                curSlide.find('.pageload-overlay').remove();
                                afterLoadContent();
                            }, 2000 - processTime);
                        } else {
                            var apiScroll = curSlide.find('.wrapper-content').data('jsp');
                            if (apiScroll) {
                                apiScroll.destroy();
                            }
                            curSlide.find('.wrapper-content').prepend(newHTML.find('.wrapper-content').html());
//                            curSlide.find('.wrapper-content').jScrollPane({
//                                autoReinitialise: true
//                            });
                            curSlide.addClass('loaded');
                            curSlide.find('.pageload-overlay').remove();
                            afterLoadContent();
                        }

                    });
                }
            }

            $('.pager a.active').removeClass('active');
            $('.pager a').eq(nextSlide).addClass('active');

            $(".pager-alt").slick("slickGoTo",nextSlide);

        });
    }
}