
$(window).scroll (function(){
    x=$ (window).scrollTop();
    if(x>700){
        $(".goto").css("opacity","1");

    }
    else{
        $('.goto').css("opacity",'0')
    }
    

})