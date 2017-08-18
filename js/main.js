$(window).load(function() {
	$("#loading").hide();
	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		pauseOnAction: false,
		directionNav: false,
		controlNav: true,
		animationLoop: true,
		touch: true,
		useCSS: false,
	});
	$('.icon-s').click(function(){
        $(this).children('h4').slideToggle();
    })
	var controller = $.superscrollorama();
	// individual element tween examples
	controller.addTween('.animation1', TweenMax.from($('.animation1'), .2, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation2', TweenMax.from($('.animation2'), .2, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation3', TweenMax.from($('.animation3'), .4, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation4', TweenMax.from($('.animation4'), .5, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.icon-s-logo', TweenMax.from($('.icon-s-logo'), .2, {
		css: {
			opacity: 0,
			"margin-left": '100px'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.icon-s-pack', TweenMax.from($('.icon-s-pack'), .3, {
		css: {
			opacity: 0,
			"margin-left": '100px'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.icon-s-adver', TweenMax.from($('.icon-s-adver'), .4, {
		css: {
			opacity: 0,
			"margin-left": '100px'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation5', TweenMax.from($('.animation5'), .25, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation6', TweenMax.from($('.animation6'), .4, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation7', TweenMax.from($('.animation7'), .6, {
		css: {
			opacity: 0,
			scaleX: '1.5',
			scaleY: '1.5'
		},
		immediateRender: true,
		ease: Back.easeInOut
	},
	{
		css: {
			opacity: 1,
			scaleX: '1',
			scaleY: '1'
		},
		ease: Back.easeInOut
	}));
	controller.addTween('.animation8', TweenMax.from($('.animation8'), .8, {
		css: {
			opacity: 0
		},
		ease: Back.easeInOut
	}));
})

var isMobile = device.mobile(),
isTable = device.tablet();

if (isMobile || isTable) {
	$("body").addClass("mobile");
} else {
	$("body").addClass("no-mobile");
}
$(function() {
	$("header a").click(function() {
		$.scrollTo($(this).attr("href"), 1000);
		$("body").removeClass("open");
		$("#bg-mask").fadeTo("fast", 0,
		function() {
			$("#bg-mask").hide();
		});
	});
	$(".flexslider a").click(function(e) {
		e.preventDefault();
		$.scrollTo($(this).attr("href"), 500);
	});
});

$("#about_us .btn_detail").bind("click", show = function(e) {
	e.preventDefault();
	$("#featured-area").fadeTo("fast", 1);
	$("#bg-mask-a").fadeTo("fast", 0.8);
}).bind("click", imgload = function(e) {
	$('#featured-area ul').roundabout({
		startingChild: 4,
		easing: 'easeOutInCirc',
		duration: 600,
		minOpacity: 0.1,
		minScale: 0.1,
		btnNext: '#next',
		btnPrev: '#previous',
		reflect: true
	});
});

$(".menu_btn").bind("click",
function() {
	if ($("body").is(".open")) {
		$("body").removeClass("open");
		$("#bg-mask").fadeTo("fast", 0,
		function() {
			$("#bg-mask").hide();
		});
	} else {
		$("body").addClass("open");
		$("#bg-mask").fadeTo("fast", 0.8);
	}
});

$("#bg-mask").bind("click",
function() {
	if ($("body").is(".open")) {
		$("body").removeClass("open");
		$("#bg-mask").fadeTo("fast", 0,
		function() {
			$("#bg-mask").hide();
		});
	} else {
		$("body").addClass("open");
		$("#bg-mask").fadeTo("fast", 0.5);
	}
});

$("#bg-mask-a").bind("click",
function() {
	$("#bg-mask-a").fadeTo("fast", 0,
	function() {
		$("#bg-mask-a").hide();
	});
	$("#featured-area").fadeTo("fast", 0,
	function() {
		$("#featured-area").hide();
	});
	$('#about_us .btn_detail').unbind("click", imgload);
});

$(document).imagesLoaded(function() {
	setTimeout(function() {
		$('.isotope').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});
	},
	500);
});

var winHeight = $(window).height() - 70;
$(window).on('scroll',
function() {
	if ($(window).scrollTop() > winHeight) {
		$('body').addClass('head_fixed');
	} else {
		$('body').removeClass('head_fixed');
	}
});