$(".jqNavSlideToggle").click(function () {
    $('.jqNav').slideToggle();
});


$( ".jqSliderItem" ).first().css(' { left:0px; float:right ; ');


$( ".jqSliderNavLeft" ).first().html(' &nbsp; ');
$( ".jqSliderNavRight" ).last().html(' &nbsp; ');
$( ".jqSliderNavLeft" ).first().removeClass("jqSliderNavLeft").addClass("jqSliderNavLeftDisabled");
$( ".jqSliderNavRight" ).last().removeClass("jqSliderNavRight").addClass("jqSliderNavRightDisabled");

$( ".jqSliderNavRight" ).click(function() {
    $( this ).parent().finish().animate({left: "-=100%"}, 1000);
    $( this ).parent().next().finish().animate({left: "-=100%"}, 1000);
});
$( ".jqSliderNavLeft" ).click(function() {
    $( this ).parent().finish().animate({left: "+=100%"}, 1000);
    $( this ).parent().prev().finish().animate({left: "+=100%"}, 1000);
});


