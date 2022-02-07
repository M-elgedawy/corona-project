
$(window).scroll (function(){
    x=$ (window).scrollTop();
    if(x>700){
        $(".goto").css("opacity","1");

    }
    else{
        $('.goto').css("opacity",'0')
    }
    

})
// making toggle button toggle collapse class to show nav in responsive width
 const btn=document.querySelector('.navbar-toggler');
 const collapseDiv=document.querySelector('.collapse')
 const navLi=document.querySelectorAll('.nav-item');

 btn.addEventListener('click',()=>{
    collapseDiv.classList.toggle('collapse')
 })
 //when click on nav link hide the  collapse div.
 navLi.forEach(function(li){
     li.addEventListener('click',()=>{
         collapseDiv.classList.add('collapse')
     })
 })