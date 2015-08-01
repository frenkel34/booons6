// Now the api is called process the products to show in select screen !


function countdown(callback) {
    var bar = document.getElementById('progress'),
    time = 5, max = 111,
    int = setInterval(function() {
       // bar.style.width = Math.floor(100 * time++ / max) + '%';
        if (time - 1 == max) {
            clearInterval(int);
            // 600ms - width animation time
            callback && setTimeout(callback, 600);
        }
    }, 1000);
}



function addSelectProduct(sProductCode, sState, iSugar, iMilk){
    var sTemplate = "";
    var sCheckIcon = "";
    sTemplate = $("#template-select-product-item").html();
    console.log('-------------------');
    console.log(sTemplate);
    
    console.log('-------------------');
    if (sState == "Off") {
        sCheckIcon = "close"
    }else{
        sCheckIcon = "check"
    }
//    sTemplate = sTemplate.replace("{{state}}", sState);    
//    sTemplate = sTemplate.replace("{{state}}", sState);    
//    sTemplate = sTemplate.replace("{{state2}}", sState);    
    sTemplate = sTemplate.replace("{{code}}", sProductCode);
//    sTemplate = sTemplate.replace("{{state-icon}}", sCheckIcon);
    $(".jqProductSliderGroup").append(sTemplate);
    console.log('adding prod item with state:'+ sState+' and code:'+sProductCode);
    }



