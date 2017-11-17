 function function1 () {
                var x = document.getElementById("myForm").elements.item(0).value;
                var y = document.getElementById("myForm").elements.item(1).value;
                if (x != "" && y != "") {
                    if (x <= 440) {
                        if (y <= 380) {
    
                              $( "#backgrounds" ).css({
      "width": x/6 + "vw",
      "height": y/5 + "vh"
    });  
                        $("#error").text("");
                        $("#width_value").text(x + " cm");
                        $("#height_value").text(y + " cm");
                            $("#width_value").css("width", x/6 + "vw");
                            $("#height_value").css("margin-top", y/10 +10 + "vh");
                            $("#myForm").fadeOut(1500);
                            $("#submit").fadeOut(1500);
                            $("#first_span").fadeOut(1500, function() {
                                $("#submit2").fadeIn(500);
                            });
                            
                            
                        }
                        else {
                            $("#error").text("maksymalna długość to 380 cm!");
                        }
                    
                    }
                    else {
                        $("#error").text("maksymalna szerokość to 440 cm!");
                    }
                    
                }
                else {
                    $("#error").text("Uzupełnij wymagane pola!");
                }
            
    
                
            };
function add_elements () {
    $("#submit2").fadeOut(1000, function (){
        $("#select_element").fadeIn(1000);
        $("#submit4").fadeIn(1000);
    });
};
function accept_direction () { 
var select_direction = $( "#select_element option:selected" ).val();
    alert(select_direction);

};