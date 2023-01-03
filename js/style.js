$(function(){
    $(".wrap-1 nav button").click(function(){
        $(".wrap-1 nav ul").slideToggle()
    })
    $(".wrap-1 nav button").focusout(function(){
        $(".wrap-1 nav ul").slideUp()
    })
})