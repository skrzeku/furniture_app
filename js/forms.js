var background = "#backgrounds";
var w_value = "#width_value";
var h_value = "#height_value";
var sub = "#submit";
var sub2 = "#submit2";
var sub3 = "#submit3";
var sub4 = "#submit4";
var sub5 = "#submit5";
var sub6 = "#submit6";
var botelements_form = "#botelements_form";
var topelements_form = "#topelements_form";
var click_wstaw = 0;
var select_direction = "";
var img_id = "";
var dir_val = "";
var values_bottom = "";
var values_top = "";
 var width_element= []; 
var s = 0;



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
        $("#width_topvalue").show();
        $("#select_element").fadeOut(1000);
        $(topelements_form).fadeIn(1000);
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
        });
        
        
    }
    else {
        click_wstaw = 0;
        $("#width_botvalue").show();

        $("#select_element").fadeOut(1000);
        $(botelements_form).fadeIn(1000);
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
        });
        
    }
    

};
function add_ele() {
    
                    click_wstaw++;
    
                var elements = $( "#botelements_form option:selected" ).val();
                var val1_el = $("#width_el1").val();
                var val2_el = $("#height_el1").val();
                var div_el = "";
                var img_src = "";

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
                        "height": val2_el * 1.5 + "px"
                    });
                    $(img_id).show();
                    
                };
    };
    
            };
function set_widthelements () {
   
   width_element[2] = 0; width_element[3] = 0;
   width_element[4] = 0; width_element[5] = 0;
   width_element[6] = 0; width_element[7] = 0;
   width_element[8] = 0; width_element[9] = 0;
   width_element[10] = 0; width_element[11] = 0;
   width_element[12] = 0; width_element[13] = 0;
    width_element[14] = 0;
    
   
    
    function create_variables () {
        for (s = 0; s<=click_wstaw; s++) {
             var img_ids = "#" + s + "img";
            width_element[s] =  $(img_ids).width(); 
            
            
        }
        return width_element;
    }
    create_variables();
    /*for (var i = 0; i <= click_wstaw.length; i++) {
        var txt_width = "width_element" + i ;
        var imagesi = "#" + i + "img";
        var width_eli = $(imagesi).width();
        alert(width_eli);
    } */
    
  /*  var width_element1 = $("#1img").width();
    var width_element2 = $("#2img").width();
    var width_element3 = $("#3img").width();
    var width_element4 = $("#4img").width();
    var width_element5 = $("#5img").width();
    var width_element6 = $("#6img").width();
    var width_element7 = $("#7img").width();
    
    var width_element8 = $("#8img").width();
    var width_element9 = $("#9img").width();
    var width_element10 = $("#10img").width();
    var width_element11 = $("#11img").width();
    var width_element12 = $("#12img").width();
    var width_element13 = $("#13img").width();
    var width_element14 = $("#14img").width(); */
    
    values_bottom = (width_element[1] + width_element[2] + width_element[3] + width_element[4] + width_element[5] + width_element[6] + width_element[7])/2.25;
    values_top = (width_element[8] + width_element[9] + width_element[10] + width_element[11] + width_element[12] + width_element[13] + width_element[14])/2.25;
   
    $("#width_botvalue").text("Całkowita szerokość dolnych elementów: " + values_bottom);
    $("#width_botvalue").css("margin-left", "+" + values_bottom + "px");
    
    $("#width_topvalue").text("Całkowita szerokość górnych elementów: " + values_top);
    $("#width_topvalue").css("margin-left", "+" + values_top + "px");
    
};
