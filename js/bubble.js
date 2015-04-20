//Bubble jquery action

$(document).ready(function() {

	$(document).mousemove(function(event){
        $('#b2').offset({left : event.pageX, top : event.pageY-10});
        $('#b1').offset({left : event.pageX-20, top : event.pageY});
        $('#b3').offset({left : event.pageX, top : event.pageY-50});
        $('#b4').offset({left : event.pageX-50, top : event.pageY});
    });

});