var isCollapsed = false;

function toggleHeaderNavBar() {
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
        $("#navbar").addClass('show');
        $("#navbarSupportedContent").removeClass('show');

    } else {
        $("#navbar").removeClass('show');
        $("#navbarSupportedContent").addClass('show');
    }
}

function hideCollapseMenu() {
    isCollapsed = false;
    $("#navbarSupportedContent").removeClass('show');
}

$(document).ready( function() {
    $("#navbar").on("click", "a.nav-link", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top-141;
        if(screen.width <= 991 ){
            var top = $(id).offset().top;
        }
        else if(screen.width >= 992) {
            var top = $(id).offset().top-141;
        } else {
            var top = $(id).offset().top;
        }
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
});

function selectMenuItem(index) {
    if (index == 1) {
        document.getElementById("menu1").classList.add('active');
    } else {
        document.getElementById("menu1").classList.remove('active');
    }
    if (index == 2) {
        document.getElementById("menu2").classList.add('active');
    } else {
        document.getElementById("menu2").classList.remove('active');
    }
    if (index == 3) {
        document.getElementById("menu3").classList.add('active');
    } else {
        document.getElementById("menu3").classList.remove('active');
    }
    if (index == 4) {
        document.getElementById("menu4").classList.add('active');
    } else {
        document.getElementById("menu4").classList.remove('active');
    }
    if (index == 5) {
        document.getElementById("menu5").classList.add('active');
    } else {
        document.getElementById("menu5").classList.remove('active');
    }
    if (index == 6) {
        document.getElementById("menu6").classList.add('active');
    } else {
        document.getElementById("menu6").classList.remove('active');
    }
    if (index == 7) {
        document.getElementById("menu7").classList.add('active');
    } else {
        document.getElementById("menu7").classList.remove('active');
    }
}

$(document).ready(function () {
    $(document).on("scroll", () => {
        var scrollPos = $(document).scrollTop();
        scrollPos += 144;
        var main = document.getElementById('slider')
        var services = document.getElementById('services')
        var aboutus = document.getElementById('aboutus')
        var portfolio = document.getElementById('portfolio')
        var reviews = document.getElementById('reviews')
        var articles = document.getElementById('articles')
        var contact = document.getElementById('footer-section')
        var scrollHeight = $(document).height();
	    var scrollPosition = $(window).height() + $(window).scrollTop();
        if (scrollPos > slider.offsetTop) {
            selectMenuItem(1);
        }
        if (scrollPos > services.offsetTop) {
            selectMenuItem(2);
        }
        if (scrollPos > aboutus.offsetTop) {
            selectMenuItem(3);
        }
        if (scrollPos > portfolio.offsetTop) {
            selectMenuItem(4);
        }
        if (scrollPos > reviews.offsetTop) {
            selectMenuItem(5);
        }
        if (scrollPos > articles.offsetTop) {
            selectMenuItem(6);
        }
        if ((scrollHeight - scrollPosition) / scrollHeight === 0){
            selectMenuItem(7);
        }
    });
})

$(document).ready(function(){
	//Click event to scroll to top
    
    $('.company-info').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
    });
});

var $item = $('.carousel .carousel-item'); 
//var $wHeight = $(window).height();
$item.eq(0).addClass('active');
// $item.height($wHeight); 
// $item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

function navigateToArticle() {
    window.location.href = '/article1'
}