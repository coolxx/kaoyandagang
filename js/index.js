$(function(){
	var $height=$('nav').position().top
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top>=$height){
			$('nav').css({'position':'fixed','top':0});
			$('.tihuan').css('display','block')
		}
	})
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top<=$height){
			$('nav').css('position','');
			$('.tihuan').css('display','none')
		}
	})
	$('.m2_c1 p').click(function(){
		$('.m2_c1 p').removeClass('on2').eq($(this).index()).addClass('on2')
	})
})