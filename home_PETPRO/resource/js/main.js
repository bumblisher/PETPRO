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

	//서브 신청버튼
	$("#btnForm").on("click", function(){
		$(".center_form").hide();
		$(".center_done").show();
	}); 

	//서브 돌아오기 버튼
	$("#btnDone").on("click", function(){
		$(".center_form").show();
		$(".center_done").hide();
	}); 
});




