
		
$(document).ready(function(e) {
	
	$(window).on("load",function(){
	
	$(".preloader").hide();




/*===================================================
wow.js jquery plugin
==================================================== */

$(function(){
    new WOW().init();
});
/*animate on scroll */










/*===================================================
Smooth Scroll effect
==================================================== */
$(function(){
$("a.smooth-scroll").click(function(event){
    event.preventDefault();
    //get return id like #about, #work , #team and etc
    var section =$(this).attr("href");

$("html,body").animate ({
    scrollTop: $(section).offset().top - 64
},1250, "easeInOutExpo");



});
});



/*-------------- End Form ----------------*/});
});