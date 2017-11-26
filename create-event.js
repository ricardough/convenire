$(document).ready(function() {
	var max_fields = 10; //maximum input boxes allowed
    // var wrapper         = $(".name"); //Fields wrapper
	var rem_button = $("a.remove_field");

    var a = 1;

    $('[data-toggle="tooltip"]').tooltip(); 


    $(".add_button_loc").click(function(e){ //on add input button click
    	var wrapper = $(this).parent();
        e.preventDefault();

        var str_to_append = '<div class="form-inline"> <br><input type="text" class="form-control" name="locs[' + a + ']" placeholder="Location" required=""> \
         <button class="btn btn-default remove_field"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>';
        $(wrapper).append($(str_to_append)); //add input box
        a++;
        alert(a);
    });

    $(".add_button_task_guest").click(function(e){ //on add input button click
        var wrapper = $(this).parent();
        e.preventDefault();
        var sibl = $(this).siblings("input");
        var ph = $(sibl).attr("placeholder");
        var nom = $(sibl).attr("name");
        alert(nom);
        var str_to_append = '<div class="form-inline"> <br><input type="text" class="form-control" name="' + nom + '"  placeholder="'+ ph + '" required="" style="min-width: 30%"> \
         <button class="btn btn-default remove_field"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>';
        $(wrapper).append($(str_to_append)); //add input box 

    });

    $(".add_button_times").click(function(e){ //on add input button click
        var wrapper = $(this).parent();
        e.preventDefault();
        var str_to_append = '<div class="form-inline"> <br> \
                        <div class="form-group"> \
                            <label for="times[]" class=".sr-only"></label> \
                            <input type="text" class="form-control datepicker" name="times[]" placeholder="Date" required=""> \
                        </div> \
                        <div class="form-group"> \
                            <label for="times[]" class=".sr-only"></label> \
                            <input type="text" class="form-control timepicker" name="times[]" placeholder="From" required=""> \
                        </div> \
                        <div class="form-group"> \
                            <label for="times[]" class=".sr-only"></label> \
                            <input type="text" class="form-control timepicker" name="times[]" placeholder="To" required=""> \
                        </div> \
                        <button class="btn btn-default remove_field"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>';
        $(wrapper).append($(str_to_append)); //add input box

    });

    $('body').on('focus',".datepicker", function(){
        $(this).datepicker();
    });

    $('body').on('focus',".timepicker", function(){
        $(this).timepicker({
            interval: 15,
            startTime: '11:00am',
            dynamic: true
        });
    });



   
    $(document).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove();
    });

  
    
});