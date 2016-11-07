$(function(){
    $('.jia').on('click',function(){
        $('.si,.sidianyi').toggleClass('chu');
        alert(1)
    })


   var anniu = $('.baliu ul li');
    var yi = $('.ooo');

    anniu.on('click',function(){
       var nn = $(this).index();
        for(i=0;i<yi.length;i++){
            yi.eq(i).addClass('mei');
        }
        yi.eq(nn).removeClass('mei');

    })


});