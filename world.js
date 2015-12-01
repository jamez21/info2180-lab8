"use strict";

window.onload = function(){
    var req = $("term")
    $("lookup").onclick = fetchData(req);
}


//Credits:http://openenergymonitor.org/emon/node/107
function fetchData(item){
    $.ajax({                                      
    url: 'world.php',               //the script to call to get data          
    data: "?lookup=item",           //you can insert url argumnets here to pass to api.php
                                    //for example "id=5&parent=6"
    dataType: 'String',             //data format      
    success: function(data)         //on recieve of reply
    {
        var name = data[0];         //get id
        var hos = data[1];          //get name
        //--------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------
        //Set output element html
        $('result').html(name); 
        $("related").html(hos);
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
    } 
    });
}