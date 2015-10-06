



function up(i,span) {
   i = i +  span;
   return i;
}

function down(i,span) {
   i = i -  span;
   return i;
}

function add_stage(parnt,canvas_height,canvas_width) {
    div_element = document.createElement("div");
    div_element.innerHTML = '<canvas id="canvas1" width="'+canvas_width+'" height="'+canvas_height+'"></canvas>';
    parent_object = document.getElementById(parnt);
    parent_object.appendChild(div_element);

    canvas = document.getElementById("canvas1");
    context = canvas.getContext("2d");
}

function create_pic(img,img_file,top,left,size_height,size_width){
    img.onload = function(){
      context.drawImage(img,top,left,size_width,size_height);
    };
    img.src = img_file;
}


