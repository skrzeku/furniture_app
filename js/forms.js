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
var select_direction = "";
var img_id = "";
var dir_val = "";


function function1 () {
                var x = document.getElementById("myForm").elements.item(0).value;
                var y = document.getElementById("myForm").elements.item(1).value;
                if (x != "" && y != "") {
                    if (x <= 440) {
                        if (y <= 300) {
    
                              $( "#backgrounds" ).css({
      "width": x* 2.25 + "px",
      "height": y*1.5 + "px",
      "max-width": x*2.25 +"px",
      "max-height": y*1.5 + "px",
      "padding": "0px"
      
    });  
                        $("#error").text("");
                        $("#width_value").text(x + " cm");
                        $("#height_value").text(y + " cm");
                            $("#width_value").css("width", x* 2.25 + "px");
                            $("#height_value").css("margin-top", y*1.5/2+60 + "px");
                            $("#myForm").fadeOut(1500);
                            $("#submit").fadeOut(1500);
                            $("#first_span").fadeOut(1500, function() {
                                $("#submit2").fadeIn(500);
                                $("#submit6").fadeIn(500);
                            });
                            
                            
                        }
                        else {
                            $("#error").text("maksymalna długość to 300 cm!");
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
select_direction = $( "#select_element option:selected" ).val();
    
    
    if(select_direction == "top_direct") {
       click_wstaw = 7;
        $("#select_element").fadeOut(1000);
        $(elements_form).fadeIn(1000);
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
        });
        
        
    }
    else {
        click_wstaw = 0;

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
                var img_src = "";
   
    
    
                
    
    
    
    
               // div_el = "#" + click_wstaw + "_div";
                img_id = "#" + click_wstaw + "img";
                check_element();
                set_widthelements();
                
    
    function check_element () {
                if (elements == "1") {
                    img_src = "image/rectangle.png";
                    main_addfunc ();
                  
                }
                if (elements == "2") {
                    img_src = "image/squ.png";
                 main_addfunc ();
                }
        
        else {
           console.log("nothing");
        }
        
        
                function main_addfunc () {
                   $(img_id).attr('src', img_src);
                    $(img_id).css({
                        "width": val1_el * 2.25 + "px",
                        "height": val2_el * 1.5 + "px",
                       // "position": "absolute",
                       // "margin": "0",
                       //"float": "left"
                       // "margin-left": "-20px",
                       // "margin-top": "-15px"
                    });
                    $(img_id).show();
                    
                };
    };
    
            };
function set_widthelements () {
    
    /*for (var i = 0; i <= click_wstaw.length; i++) {
        var txt_width = "width_element" + i ;
        var imagesi = "#" + i + "img";
        var width_eli = $(imagesi).width();
        alert(width_eli);
    } */
    
    var width_element1 = $("#1img").width();
    var width_element2 = $("#2img").width();
    var width_element3 = $("#3img").width();
    var width_element4 = $("#4img").width();
    var width_element5 = $("#5img").width();
    var width_element6 = $("#6img").width();
    var width_element7 = $("#7img").width();
    
    var values = (width_element1 + width_element2 + width_element3 + width_element4 + width_element5 + width_element6 + width_element7)/2.25;
   
    $("#width_elvalue").text("Całkowita szerokość elementów: " + values);
    $("#width_elvalue").css("margin-left", "+" + values + "px");
    
};