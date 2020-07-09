/*start scroll to element smoothly $(".navbar-light .navbar-nav .nav-link ") */
$(".navbar-light .navbar-nav .nav-link ").click(function(e){
    e.preventDefault()// prevent open # on link 
    // console.log($(this).data("mysec")) //test only
    $("html,body")
        .animate({scrollTop: $("#"+ $(this).data("mysec")).offset().top-70},1500)
})
/*end scroll to element smoothly*/

/*start sync links with section*/
$(window).scroll(function(){
$(".my-block").each(function(){
    if($(window).scrollTop() > $(this).offset().top-71){
        var myele =$(this).attr("id"); //define var
       // console.log(myele) //test only
$('.navbar-light .navbar-nav .nav-link[data-mysec="'+myele+'"]')
    .parent().addClass("active").siblings().removeClass("active")  
    }
})    
})
/*end sync links with section*/

/*start go up button*/
$(window).scroll(function(){ // to show - hide it 
    if( $(window).scrollTop()>200){
        $(".go-up").fadeIn(400) // show it
    }
    else{
        $(".go-up").fadeOut(400)// hide it again
    }
})

$(".go-up").click(function(){ // to go to the top on click
    $("html,body").animate({scrollTop:0},1500)
})
/*end  go up button*/

/*start header section */
$(".header .my-button").click(function(e){
    e.preventDefault()
    $("html,body").animate({scrollTop: $("#download").offset().top-70},1500)
})

$(".header .button2").click(function(e){
    e.preventDefault()
    $("html,body").animate({scrollTop: $("#contact").offset().top-70},1500)
})
/*end header section */

/*start features section*/
$(".features .my-button").click(function(e){
    e.preventDefault()
    $("html,body").animate({scrollTop: $("#download").offset().top-70},1500)
})
/*end features section*/

/*start services section */
$(".services .serv").mouseenter(function(){
    $(this).css({ marginTop:"25px"})
})
$(".services .serv").mouseleave(function(){
    $(this).css({ marginTop:"50px"})
})

/*end services section */

/*start contact section*/

/*hide placeholder in focus*/
$(".contact .form-control, .contact .message").focusin(function(){
    var oldvalue= $(this).attr("placeholder"); // store old value 
   //test  console.log(oldvalue) 
    $(this).attr("placeholder","")
    
$(".contact .form-control, .contact .message").focusout(function(){
    $(this).attr("placeholder",oldvalue) // rsetore old value 
})    
})
/*hide placeholder in focus*/

/*show aste risk*/
$(".contact .form-control").focusout(function(){
    if( $(this).val() ==""){
        $(this).parent().find(".risk").show();
        $(this).css({border:"1px solid red"})
    }
})
$(".contact .form-control").keypress(function(){
  $(this).parent().find(".risk").hide();  
    $(this).css({border:"1px solid #ced4da"})
})

/*show aste risk*/

/*end  contact section*/

/*start carousel slider feedback section*/
$('.carousel').carousel({
  interval: 2000
})
/*end  carousel slider feedback section*/