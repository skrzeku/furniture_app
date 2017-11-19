var background = "#backgrounds";
var w_value = "#width_value";
var h_value = "#height_value";
var sub = "#submit";
var sub2 = "#submit2";
var sub3 = "#submit3";
var sub4 = "#submit4";
var sub5 = "#submit5";
var sub6 = "#submit6";
var elements_form = "#elements_form";
var click_wstaw = 0;

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
                                $("#submit6").fadeIn(500);
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
    $(sub2).fadeOut(1000);
        $(sub6).fadeOut(1000, function (){
            $("#select_element").fadeIn(2000);
        $(sub4).fadeIn(2000);
        });
        
};
function accept_direction () { 
var select_direction = $( "#select_element option:selected" ).val();
    if(select_direction == "hori_direct") {
        $("#select_element").fadeOut(1000);
        $(elements_form).fadeIn(1000);
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
        });
        
        
    }
    else {
        $("#select_element").fadeOut(1000);
        $(elements_form).fadeIn(1000);
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
        });
        
    }

};
function add_ele() {
    
               click_wstaw++;
                var elements = $( "#elements_form option:selected" ).val();
                var val1_el = $("#width_el1").val();
                var val2_el = $("#height_el1").val();
                var div_el = "";
                if (click_wstaw == 1) {
                    div_el = "#1_div";
                    check_element();
                }
                if (click_wstaw == 2) {
                    div_el = "#2_div";
                    check_element();
                }
    function check_element () {
                if (elements == "1") {
                   $(div_el).append('<img id="theImg" src="image/rectangle.png"/>');
                    //$(div_el).text("element");
                    $("#theImg").css({
                        "width": val1_el/6 + "vw",
                        "height": val2_el/5 + "vh"
                    });
                    //$(div_el).append("<span class='span_left'>1</span>");
                    //$(div_el).append("<span class='span_down'>2</span>");
                    $(".span_left").text(val1_el);
                    $(".span_down").text(val2_el);
                    alert(click_wstaw);
                }
                else {
                    $(div_el).append('<img src="image/squ.png"/>');
                }
    };
            };