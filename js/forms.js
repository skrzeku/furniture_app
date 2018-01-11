                                            //Start with all global variables

var background = "#backgrounds";
var w_value = "#width_value";
var h_value = "#height_value";
var sub = "#submit";
var sub2 = "#submit2";
var sub3 = "#submit3";
var sub4 = "#submit4";
var sub5 = "#submit5";
var sub6 = "#submit6";
var sub7 = "#submit7";
var sub8 = "#submit8";
var sub0 = "#submit10";
var botelements_form = "#botelements_form";
var topelements_form = "#topelements_form";
var click_wstaw = 1;
var select_direction = "";
var img_id = "";
var values_bottom = "";
var values_top = "";
var width_element = [];
var id_width = "";
var id_height = "";
var x = "";
var y = "";
var height_element = [];
var names = [];
var img_name = "";
var txte = [];
var txt_elementsform = "";
var elements_form = "";



                                //First function to set workspace (height and width)

function function1 () {
    
                x = document.getElementById("myForm").elements.item(0).value;
                y = document.getElementById("myForm").elements.item(1).value;
                if (x !== "" && y !== "") {
                    if (x <= 440) {
                        if (y <= 300) {
                            
    
                              $( "#backgrounds" ).css({
      "width": x* 2.5 + "px",
      "height": y*2 + "px",
      "max-width": x*2.5 +"px",
      "max-height": y*2 + "px",
      "padding": "0px"
      
    });  
                        $("#error").text("");

                        $("#width_value").text(x + " cm");
                        $("#height_value").text(y + " cm");
                            $("#width_value").css("width", x* 2.5 + "px");
                            $("#height_value").css("margin-top", y*2/2+60 + "px");
                            $("#myForm").fadeOut(1500);
                            $("#submit").fadeOut(1500);
                            $("#first_span").fadeOut(1500, function() {
                                $("#submit2").fadeIn(500);
                                
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
                                //set top or bottom direction to add elements

window.accept_direction = function () {
select_direction = $( "#select_element option:selected" ).val();
    
    function top_direction () {
             click_wstaw = 8;
        id_width = "#" + "width_top";
        id_height = "#" + "height_top";
        $("#width_topvalue").fadeIn(500);
        $("#select_element").fadeOut(1000);
        $(topelements_form).fadeIn(1000);
        elements_form = topelements_form;
        txt_elementsform = "#topelements_form option:selected";
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
             $(sub8).fadeIn(2000);
            $(sub6).fadeIn(2000);
        });
        }
    
    function bot_direction () {
             click_wstaw = 1;
        id_width = "#" + "width_el1";
        id_height = "#" + "height_el1";
        $("#width_botvalue").fadeIn(500);
        $("#select_element").fadeOut(1000);
        $(botelements_form).fadeIn(1000);
       
        txt_elementsform = "#botelements_form option:selected";
        elements_form = botelements_form;
        
        $(sub4).fadeOut(1000, function () {
            $(sub5).fadeIn(1000);
            $(sub7).fadeIn(2000);
            $(sub6).fadeIn(2000);
        });
        }
    
    if(select_direction == "top_direct") {
      top_direction();
    }
    else {
       bot_direction();
    }
    
window.submit_top = function () {
        $(botelements_form).fadeOut(1000);
        $(sub5).fadeOut(1000);
        $(sub7).fadeOut(1000, function () {
   
            top_direction();

        });
};
    
    window.submit_bot = function () {
        $(topelements_form).fadeOut(1000);
        $(sub5).fadeOut(1000);
        $(sub8).fadeOut(1000, function () {
            bot_direction();

        });
};

};

                                //Main function to add elements!!

function add_ele() {
    
             

    
                var elements = $(txt_elementsform).val();
                var txt_element = $(txt_elementsform).text();
    
            val1_el = $(id_width).val();
                val2_el = $(id_height).val();
                
                var div_el = "";
                var img_src = "";

                img_id = "#" + click_wstaw + "img";
                 $(".error").text("");
               
               
             
                check_element();
                set_widthelements();
    
   
 
                            //func Check_element (choice images)
    
                
    
    function check_element () {
                if (elements == "1") {
                    img_src = "image/zlewozmywak.png";
                    img_name = txt_element;
                    main_addfunc ();
                  
                }
                if (elements == "2") {
                    img_src = "image/szafka60.png";
                    img_name = txt_element;
                 main_addfunc ();
                }
                if (elements == "3") {
                    img_src = "image/samsung inox.png";
                    img_name = txt_element;
                    main_addfunc();
                }
                if (elements == "4") {
                    img_src = "image/side.png";
                    img_name = txt_element;
                    main_addfunc();
                }
                if (elements == "5") {
                    img_src = "image/piekarnik.png";
                    img_name = txt_element;
                    main_addfunc();
                }
                if (elements == "8") {
                    img_src = "image/szafka wiszaca.png";
                    img_name = txt_element;
                    main_addfunc();
                }
                if (elements == "9") {
                    img_src = "image/okap.png";
                    img_name = txt_element;
                    main_addfunc();
                }


        
        else {
           return false;
        }
                                            //main local function (add_ele();)


                    // validation to keep element in the workspace (max width)

                function main_addfunc () {
                     
                    var error_high = "Za duży element!";

                    if( click_wstaw < 8 && val1_el > (x-values_bottom)) {
                       $(".error").text("Element przekroczy maksymalną szerokość!");
                    }
                    else if (click_wstaw > 7 && val1_el > (x-values_top)) {
                        $(".error").text("Element przekroczy maksymalną szerokość!");
                    }

                    // validation of height elements
                    
                   else if (click_wstaw == 1 && val2_el > (y-height_element[8]/2)) {
                 $(".error").text(error_high);
                  }
                   else if (click_wstaw == 2 && val2_el > (y-height_element[9]/2)) {
                      $(".error").text(error_high);
                  }
                  else if (click_wstaw == 3 && val2_el > (y-height_element[10]/2)) {
                      $(".error").text(error_high);
                   }
                    else if (click_wstaw == 4 && val2_el > (y-height_element[11]/2)) {
                      $(".error").text(error_high);
                   }
                    else if (click_wstaw == 5 && val2_el > (y-height_element[12]/2)) {
                      $(".error").text(error_high);
                   }
                    else if (click_wstaw == 6 && val2_el > (y-height_element[13]/2)) {
                      $(".error").text(error_high);
                   }
                    else if (click_wstaw == 7 && val2_el > (y-height_element[14]/2)) {
                      $(".error").text(error_high);
                   }
                    else if (click_wstaw == 8 && val2_el > (y-height_element[1]/2)) {
                        $(".error").text(error_high);
                    }
                    else if (click_wstaw == 9 && val2_el > (y-height_element[2]/2)) {
                        $(".error").text(error_high);
                    }
                    else if (click_wstaw == 10 && val2_el > (y-height_element[3]/2)) {
                        $(".error").text(error_high);
                    }
                    else if (click_wstaw == 11 && val2_el > (y-height_element[4]/2)) {
                        $(".error").text(error_high);
                    }
                    else if (click_wstaw == 12 && val2_el > (y-height_element[5]/2)) {
                        $(".error").text(error_high);
                    }
                    else if (click_wstaw == 13 && val2_el > (y-height_element[6]/2)) {
                        $(".error").text(error_high);
                    }
                    else if (click_wstaw == 14 && val2_el > (y-height_element[7]/2)) {
                        $(".error").text(error_high);
                    }

                        // If everything goes good, add images into the workspace

                    else {
                        click_wstaw++;
                         $(img_id).attr('src', img_src);
                        $(img_id).attr('name', img_name);
                    $(img_id).css({
                        "width": val1_el * 2.5 + "px",
                        "height": val2_el * 2 + "px"
                    });
                    $(img_id).show();
                      if(click_wstaw < 8) {
                          $(".number_element").text("Element " + click_wstaw + ".");
                      }
                    else {
                        $(".number_element").text("Element " + click_wstaw + ".");
                    }
                        
                        
                    }
                  
                    
                };
    };
    
            };
                        // 2 small functions to cut lines of code

function updatebot_value() {
    $("#width_botvalue").text("Całkowita szerokość dolnych elementów: " + values_bottom);
    $("#width_botvalue").css("margin-left", "+" + (values_bottom-30) + "px");
}

function updatetop_value() {
    $("#width_topvalue").text("Całkowita szerokość górnych elementów: " + values_top);
    $("#width_topvalue").css("margin-left", "+" + (values_top - 30) + "px");
}

function set_widthelements () {
   
   width_element[2] = 0; width_element[3] = 0;
   width_element[4] = 0; width_element[5] = 0;
   width_element[6] = 0; width_element[7] = 0;
   width_element[8] = 0; width_element[9] = 0;
   width_element[10] = 0; width_element[11] = 0;
   width_element[12] = 0; width_element[13] = 0;
    width_element[14] = 0;
    
create_variables();
    create_height();
   print_width();
                        // loop for to create variables (width_element)
    
       function create_variables () {
        for (var s = 1; s < 14 ; s++) {
             var img_ids = "#" + s + "img";
            width_element[s] =  $(img_ids).width(); 
        }
        return width_element;
    }; 
                        // loop for to create variables (height_element)

     function create_height () {
        for (var p = 1; p < 14 ; p++) {
             var img_idh = "#" + p + "img";
            height_element[p] =  $(img_idh).height(); 
        }
        return height_element;
    }; 

                        // print width elements on bottom and top

    function print_width () {
        values_bottom = (width_element[1] + width_element[2] + width_element[3] + width_element[4] + width_element[5] + width_element[6] + width_element[7])/2.5;
    values_top = (width_element[8] + width_element[9] + width_element[10] + width_element[11] + width_element[12] + width_element[13] + width_element[14])/2.5;

    updatebot_value();
    updatetop_value();

    }
    
  
    
};

                                    //function from button change elements

function edit_elements () {
    create_names();
    text_option();
    $(elements_form).fadeOut(300);
    $(".btn-direction").fadeOut(300);
    $(sub5).fadeOut(300);
    $("#submit9").fadeOut(300);
    $(sub6).fadeOut(300);
    
    $("#edit_select").fadeIn(1000);
    $("#submit9").fadeIn(1000);
                                        //again for loop to create variables
     function create_names () {
        for (var i = 1; i < 15 ; i++) {
             var img_idi = "#" + i + "img";
            names[i] =  $(img_idi).attr("name");
        }
        return names;
    }; 
                                        //for loop to create variables
      function text_option () {
          
          txt_names();
           function txt_names () {
        for (var l = 1; l < 14 ; l++) {
            
            var edit_formoptions = "#edit_select option[value=" + l + "]";
            txte[l] =  $(edit_formoptions).text(names[l]); 
        }
        return txte;
    }; 
          
         
          
          
      };
    
  
};
                                                //function of handling the button accepting changes

function accept_edits () {
    

    
   
    
    function create_edits () {
        for ( var v = 1; v < 15 ; v++) {
            if (selected_edits == v) {
                click_wstaw = v;
            }
            else {
                console.log("");
            }
        };
    };
                                    //if statement selected options (bottom and top elements)
    
  var selected_editstxt = $("#edit_select option:selected").text();
   var selected_edits =  $("#edit_select option:selected").val();

if (selected_editstxt == "") {
$("#error4").text("Niewłaściwy element!");
}

    else if (selected_edits < 8) {
        $("#edit_select").fadeOut(500);
        $("#submit9").fadeOut(500);

        var widthselected_bottom = width_element[selected_edits];
        var heightselected_bottom = height_element[selected_edits];
        values_bottom = values_bottom - (widthselected_bottom/2.5);
        updatebot_value();


        $("#width_el1").val(widthselected_bottom/2.5);
        $("#height_el1").val(heightselected_bottom/2);
        $(botelements_form).fadeIn(1000);
        create_edits();
        $(".number_element").text("Element " + click_wstaw + ".");
        

        $(sub0).attr("name", "submitbot");
        $(sub0).fadeIn(1000);
    }
    else if (selected_edits > 7) {
        $("#edit_select").fadeOut(500);
        $("#submit9").fadeOut(500);

        var widthselected_top = width_element[selected_edits];
        var heightselected_top = height_element[selected_edits];
        values_top = values_top - (widthselected_top/2.5);
        updatetop_value();


        $("#width_top").val(widthselected_top/2.5);
        $("#height_top").val(heightselected_top/2);
        $(topelements_form).fadeIn(1000);
        create_edits();

        $(".number_element").text("Element " + click_wstaw + ".");

        $(sub0).attr("name", "submittop");
        $(sub0).fadeIn(1000);


    };



    
};

                                            //Run main function with fadeIn elements and if statement

function accept_editelement() {
    add_ele();
    var spantext_error = $(".error").text();
    if (spantext_error == "") {
        $(sub0).fadeOut(1000);
        $(elements_form).fadeOut(1000);
        $("#edit_select").fadeIn(1000);
        $("#submit9").fadeIn(2000);
    }
    else {

        var nameattr = $(sub0).attr('name');
        if (nameattr == "submitbot") {
            values_bottom = values_bottom - val1_el;
            updatebot_value();


        }
        else if (nameattr == "submittop") {
            values_top = values_top - val1_el;
            updatetop_value();

        }






    }


};






