$(function(){
    var screen = $("input#screen");
    var calculator = $("form#calc");
    screen.on('blur', function(){    //there is an error in the event of submit
        var calculation = screen.val();
        screen.val(calculation);
        console.warn('calculation = '+ calculation);
        console.warn('test');
    });
    console.info('finish');
})