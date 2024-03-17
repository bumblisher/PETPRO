$(function(){
	// 햄버거 메뉴
	$(".btn_menu").on("click", function(){
        $(this).toggleClass("on");
		$("html,body").toggleClass("menu_on");
    }); 
	
	//메인 확인하기버튼
	$("#mainFormBtn").on("click", function(){
        $(".main_form").hide();
		$(".main_result").show();
    }); 
	
});




