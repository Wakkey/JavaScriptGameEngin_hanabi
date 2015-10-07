


function up(i,span) {
   i = i +  span;
   return i;
}

function down(i,span) {
   i = i -  span;
   return i;
}




function add_stage(parnt,canvas_name,canvas_height,canvas_width) {
    div_element = document.createElement("div");
    div_element.innerHTML = '<canvas id='+canvas_name+' width="'+canvas_width+'" height="'+canvas_height+'"></canvas></div>';
    parent_object = document.getElementById(parnt);

    parent_object.appendChild(div_element);
    //canvas = document.getElementById(canvas_name);
}

function add_canvas(canvas_name){
   canvas = document.getElementById(canvas_name);
   return canvas.getContext("2d");
}


function canvas_clear(pnt,interval){
  function IntervalFunc(){
    pnt.clearRect(0,0,canvas.width,canvas.height);
    pnt.beginPath();
  }
  var interval_id = setInterval(IntervalFunc , interval);
}




function create_pic(pnt,img,img_file,top,left,size_height,size_width,angle){
    img.onload = function(){

      pnt.drawImage(img,top,left,size_width,size_height);
      var angles = angle * Math.PI / 180;
      pnt.rotate(angles);
      //pnt.clearRect(img,top,left,size_width,size_height);
    };
    img.src = img_file;
}

function create_text(pnt,text,size_font,top,left,angle){
      //pnt = canvas.getContext("2d");

      //pnt.clearRect(0,0,canvas.width,canvas.height);
      pnt.font = size_font + 'px "ヒラギノ角ゴ Pro"';

      pnt.fillStyle = "black";
      pnt.textBaseline = "bottom";
      pnt.fillText(text, top,left);
      var angles = angle * Math.PI / 180;
      pnt.rotate(angles);
      //var font_width = pnt.measureText(text).width;
}

function pic_move_left(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval) {
  var i = left;
  var i2 = angle;
  function IntervalFunc(){
    i = up(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_right(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval){
  var i = left;
  var i2 = angle;
  function IntervalFunc(){
    i = down(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_top(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval){
  var i = top;
  var i2 = angle;
  function IntervalFunc(){
    i = down(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_down(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval){
  var i = top;
  var i2 = angle;
  function IntervalFunc(){
    i = up(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}



function pic_move_l(parnt,pic,left,top,size_width,size_height) {
  var i = left;
  function IntervalFunc(){
    i = up(i,5);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_move_r(parnt,pic,left,top,size_width,size_height){
  var i = left;
  function IntervalFunc(){
    i = down(i,5);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_move_t(parnt,pic,left,top,size_width,size_height){
  var i = top;
  function IntervalFunc(){
    i = down(i,5);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_move_d(parnt,pic,left,top,size_width,size_height){
  var i = top;
  function IntervalFunc(){
    i = up(i,5);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}




function text_move_left(parnt,text,size_font,top,left,move,angle,rotate,interval) {
  var i = left;
  function IntervalFunc(){
    i = up(i,move);
    create_text(parnt,text,size_font,i,top,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_right(parnt,text,size_font,top,left,move,angle,rotate,interval){
  var i = left;
  function IntervalFunc(){
    i = down(i,move);
    create_text(parnt,text,size_font,i,top,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_top(parnt,text,size_font,top,left,move,angle,rotate,interval){
  var i = top;
  function IntervalFunc(){
    i = down(i,move);
    create_text(parnt,text,size_font,left,i,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_down(parnt,text,size_font,top,left,move,angle,rotate,interval){
  var i = top;
  function IntervalFunc(){
    i = up(i,move);
    create_text(parnt,text,size_font,left,i,up(angle,rotate));
  }
  var interval_id = setInterval(IntervalFunc , interval);
}



function text_move_l(parnt,text,top,left) {
  var i = left;
  function IntervalFunc(){
    i = i + up(i,5);
    //pnt.clearRect(0,0,canvas.width,canvas.height);
    create_text(parnt,text,20,i,top,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_move_r(parnt,text,top,left){
  var i = left;
  function IntervalFunc(){
    i = i + down(i,5);
    create_text(parnt,text,20,i,top,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_move_t(parnt,text,top,left){
  var i = left;
  function IntervalFunc(){
    i = i + down(i,5);
    create_text(parnt,text,20,left,i,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_move_d(parnt,text,top,left){
  var i = left;
  function IntervalFunc(){
    i = i + up(i,5);
    create_text(parnt,text,20,left,i,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}
 



