//Drunk Cats Konami Easter Egg

$(document).ready(function() {
	cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
		$(".drunkcats").css("display", "block");
	});

	$(document).mousemove(function(event){
        $('.drunkcats').offset({left : event.pageX, top : event.pageY});
    });

    $(document).keypress(function(e){
    	if(e.which == 13){
    		$(".drunkcats").css("display", "none");
    	}
    });

});