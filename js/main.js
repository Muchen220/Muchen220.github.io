
/*使用smooth*/
const scroll = new SmoothScroll(".li_a_style a[href*='#']",{
	/*延迟500毫秒*/
	speed:500
})

var $dd = $('#wrap dl dd');
	var $bgBox = $('.bg-box');
	$dd.hover(function(){
	var index = $(this).index();
	$(this).stop().animate({
		width:'680px'
	},500).siblings('dd').stop().animate({
		width:'80px'
	},500)
		$bgBox.eq(index).fadeIn().siblings('.bg-box').fadeOut();
	})


//鼠标移入、移除时触发事件
function display(index){
	var boxId = "box"+index;
	var box = document.getElementById(boxId);
	box.style.display="block";
}

function  disappear(index){
	var boxId = "box"+index;
	var box = document.getElementById(boxId);
	box.style.display="none";
}
