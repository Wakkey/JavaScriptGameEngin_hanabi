

function up(i,span) {
   i = i +  span;
   return i;
}

function down(i,span) {
   i = i -  span;
   return i;
}

function add_stage(parnt,content,canvas_name,canvas_height,canvas_width) {
    div_element = document.createElement("div");
    div_element.innerHTML = '<canvas id='+canvas_name+' width="'+canvas_width+'" height="'+canvas_height+'"></canvas>';
    parent_object = document.getElementById(parnt);
    parent_object.appendChild(div_element);

    canvas = document.getElementById(canvas_name);
}



function create_pic(img,img_file,top,left,size_height,size_width,angle){
    img.onload = function(){
      var pnt = canvas.getContext("2d");
      pnt.clearRect(0,0,canvas.width,canvas.height);
      pnt.drawImage(img,top,left,size_width,size_height);
      var angles = angle * Math.PI / 180;
      pnt.rotate(angles);

    };
    img.src = img_file;
}

function create_text(text,size_font,top,left,angle){
      var pnt = canvas.getContext("2d");
      pnt.clearRect(0,0,canvas.width,canvas.height);
      pnt.font = size_font + 'px "ヒラギノ角ゴ Pro"';
      //var font_width = context.measureText(message).width;
      pnt.fillStyle = "black";
      pnt.textBaseline = "bottom";
      pnt.fillText(text, top,left);
      var angles = angle * Math.PI / 180;
      pnt.rotate(angles);
}

function move_left(pic,left,top,size_width,size_height,angle,rotate,interval) {
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left++,top,size_width,size_height,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_right(pic,left,top,size_width,size_height,angle,rotate,interval){
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left--,top,size_width,size_height,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_top(pic,left,top,size_width,size_height,angle,rotate,interval){
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left,top--,size_width,size_height,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_down(pic,left,top,size_width,size_height,angle,rotate,interval){
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left,top++,size_width,size_height,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}



function move_left(pic,left,top,size_width,size_height) {
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left++,top,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_move_right(pic,left,top,size_width,size_height){
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left--,top,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_move_top(pic,left,top,size_width,size_height){
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left,top--,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_move_down(pic,left,top,size_width,size_height){
  function IntervalFunc(){
    create_pic(image =new Image(),pic,left,top++,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}




function text_move_left(text,size_font,top,left,angle,rotate,interval) {
  function IntervalFunc(){
    create_text(text,size_font,top,left++,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_right(text,size_font,top,left,angle,rotate,interval){
  function IntervalFunc(){
    create_text(text,size_font,top,left--,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_top(text,size_font,top,left,angle,rotate,interval){
  function IntervalFunc(){
    create_text(text,size_font,top--,left,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_down(text,size_font,top,left,angle,rotate,interval){
  function IntervalFunc(){
    create_text(text,size_font,top++,left,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}



function text_move_left(text,top,left) {
  function IntervalFunc(){
    create_text(text,20,top,left++,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_move_right(text,top,left){
  function IntervalFunc(){
    create_text(text,20,top,left--,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_move_top(text,top,left){
  function IntervalFunc(){
    create_text(text,20,top--,left,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_move_down(text,top,left){
  function IntervalFunc(){
    create_text(text,20,top++,left,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}












