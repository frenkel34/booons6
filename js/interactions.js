//Populate the config form
console.log('starting population of configuration form');
addItem("jqConfigSliderGroup1", "template-config-product-item", "coffee", "1");
addItem("jqConfigSliderGroup1", "template-config-product-item", "coffee", "0");
addItem("jqConfigSliderGroup2", "template-config-product-item", "glass", "1");
addItem("jqConfigSliderGroup2", "template-config-product-item", "glass", "0");
addItem("jqConfigSliderGroup3", "template-config-product-item", "beer", "1");
addItem("jqConfigSliderGroup3", "template-config-product-item", "beer", "0");
addItem("jqConfigSliderGroup4", "template-config-product-item", "paw", "1");
addItem("jqConfigSliderGroup5", "template-config-product-item", "paw", "0");

//Populate the ambush form
addItem("jqAmbushUserSliderGroupjeremy", "template-select-Ambush-item", "rocket", "1");
addItem("jqAmbushUserSliderGroupjeremy", "template-select-Ambush-item", "bomb", "0");
addItem("jqAmbushUserSliderGroupjeremy", "template-select-Ambush-item", "paw", "1");
addItem("jqAmbushUserSliderGroupanouk", "template-select-Ambush-item", "rocket", "1");
addItem("jqAmbushUserSliderGroupanouk", "template-select-Ambush-item", "bomb", "0");
addItem("jqAmbushUserSliderGroupanouk", "template-select-Ambush-item", "paw", "1");

//Populate the login form
console.log('starting population of login form');
addItem("jqUserLoginSliderGroup", "template-select-UserLogin-item", "user", "frenkel");
addItem("jqUserLoginSliderGroup", "template-select-UserLogin-item", "user", "quint");
addItem("jqUserLoginSliderGroup", "template-select-UserLogin-item", "user", "anouk");
addItem("jqUserLoginSliderGroup", "template-select-UserLogin-item", "user-plus", "");

addItem("jqGroupLoginSliderGroup", "template-select-GroupLogin-item", "cloud", "support");
addItem("jqGroupLoginSliderGroup", "template-select-GroupLogin-item", "cloud", "thuis");
addItem("jqGroupLoginSliderGroup", "template-select-GroupLogin-item", "cloud", "eneco");
addItem("jqGroupLoginSliderGroup", "template-select-GroupLogin-item", "cloud-upload", "");

console.log('finishing population of login form');
console.log('starting initialisation of login form');

$('.jqUserLoginSliderGroup').slick({
  centerMode: true,
  centerPadding: '200px', 
  arrows :true,
  centerPadding: '60px',
  slidesToShow: 1,
  focusOnSelect: true,
});
$('.jqGroupLoginSliderGroup').slick({
  centerMode: true,
  centerPadding: '200px', 
  arrows :true,
  centerPadding: '60px',
  slidesToShow: 1,
  focusOnSelect: true,
});  
console.log('finishing initialisation of login form');

//Populate the product selection and ingredients
console.log('starting population of select product sliders');

addItem("jqProductSliderGroup", "template-select-product-item", "coffee", "coffee");
addItem("jqProductSliderGroup", "template-select-product-item", "beer", "beer");

addItem("jqSubProductSliderGroup1", "template-select-subproduct-item-0", "ellipsis-h", "0");
addItem("jqSubProductSliderGroup1", "template-select-subproduct-item-1", "cube", "1");
addItem("jqSubProductSliderGroup1", "template-select-subproduct-item-2", "cube", "2");
addItem("jqSubProductSliderGroup1", "template-select-subproduct-item-3", "cube", "3");

addItem("jqSubProductSliderGroup2", "template-select-subproduct-item-0", "ellipsis-h", "0");
addItem("jqSubProductSliderGroup2", "template-select-subproduct-item-1", "tint", "1");
addItem("jqSubProductSliderGroup2", "template-select-subproduct-item-2", "tint", "2");
addItem("jqSubProductSliderGroup2", "template-select-subproduct-item-3", "tint", "3");

console.log('finishing population of select product sliders');
console.log('starting initialisation of select product slider');


// Wat product selectie
    $('.jqProductItem').focus(function(){
       console.log('You have selected as a product:' + $(this).attr("code"));
    });
    $('.jqSugarItem').focus(function(){
       console.log('You have selected:' + $(this).attr("code") +' sugar');
    });
    $('.jqMilkItem').focus(function(){
       console.log('You have selected:' + $(this).attr("code") +' milk');
    });



// The rest ...
$(".jqNavSlideToggle").click(function () {
    $('.jqNav').slideToggle();
});


$( ".jqSliderItem" ).first().css(' { left:0px; float:right ; ');


$( ".jqSliderNavLeft" ).first().html(' &nbsp; ');
$( ".jqSliderNavRight" ).last().html(' &nbsp; ');

$( ".jqProductLeft" ).first().removeClass("jqProductLeft").addClass("jqSliderNavLeftDisabled");
$( ".jqProductRight" ).last().removeClass("jqProductRight").addClass("jqSliderNavRightDisabled");

$( ".jqSliderNavRight" ).click(function() {
    console.log('click right');
    $( this ).parent().parent().finish().animate({left: "-=100%"}, 1000);
    $( this ).parent().parent().next().finish().animate({left: "-=100%"}, 1000);
});
$( ".jqSliderNavLeft" ).click(function() {
    console.log('click left');
    $( this ).parent().parent().finish().animate({left: "+=100%"}, 1000);
    $( this ).parent().parent().prev().finish().animate({left: "+=100%"}, 1000);
});


