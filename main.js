var mouseEvent = "empty";

var last_position_of_x,last_position_of_y;

var current_position_of_x,current_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var orangecolor = "orange" ;
var purplecolor = "purple";
var yelowcolor = "yellow";
var pinkcolor = "pink";
var bluecolor = "blue";


colorsi.addEventListener("onchange",sel);

var selstr;
var color = "red";

var width_line = 7;
var check_erase = 0;
var check_mode = 0;

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}






canvas.addEventListener("mousemove",my_mousemove);

   canvas.addEventListener("mouseUp",mouseUp);


function toggle_erase()
{
    check_erase = 1;


}





function my_mousemove(e){


    if(check_mode==0)
    {
    if(check_erase==0)
    {
        color = selstr;


    }
    else if(check_erase==1)
    {
        color="white";


    }
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
       
        if(check_erase==1)
        {
            ctx.lineWidth = width_line * 3;

        }
        else
        {
            ctx.lineWidth = width_line;

        }
        

        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("Current position of x and y coordinates = "); 
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);

        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

    
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

    canvas.addEventListener("mousemove",my_mousemove);
}

}
//


  //var drawLoop;
//var count = 30;
//ctx.beginPath();
//ctx.stroke();
//width_line.beginpath();
//console.log("triggered");
//}



function mouseUp() {
    clearInterval(drawLoop);
  }


function toggle_pencil(){
    check_erase=0;
    }

// functions //
function clear_canvas(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function toggle_function(){
   
    if(check_mode==0)
    {check_mode=1
    }
    else if(check_mode==1)
    {check_mode=0
        ctx = canvas.getContext("2d");
        ctx.beginpath();
        ctx.stroke;
        ctx.color;
         ctx.moveTo(last_position_of_y = current_position_of_y,last_position_of_x = current_position_of_x);
    }
    
    //current_position_of_x = e.clientX - canvas.offsetLeft;
    //current_position_of_y = e.clientY - canvas.offsetTop;

    //last_position_of_x = current_position_of_x;
    //last_position_of_y = current_position_of_y;

    //console.log(last_position_of_x,last_position_of_y);
    //console.log(current_position_of_x,current_position_of_y);
    

}

function save(){

    var canvas = document.getElementById("myCanvas");
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
    window.location.href=image;
}
 
//var e = document.getElementById("colornames");

//var strUser = e.value;
//var strUser= e.options[e.selectedIndex].text;



function sel()
{
    var e = document.getElementById("colorsi");
    selstr = e.options[e.selectedIndex].value;
    color = selstr;



}


 