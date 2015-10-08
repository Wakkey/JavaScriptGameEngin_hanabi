


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
    canvas = document.getElementById(canvas_name);
    return canvas.getContext("2d");
}

/*function add_canvas(canvas_name){
   canvas = document.getElementById(canvas_name);
   return canvas.getContext("2d");
}*/


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

function pic_move_left(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval,del) {
  var i = left;
  var i2 = angle;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = up(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_right(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval,del){
  var i = left;
  var i2 = angle;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = down(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_top(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval,del){
  var i = top;
  var i2 = angle;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = down(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_move_down(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval,del){
  var i = top;
  var i2 = angle;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = up(i,move);
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}



function pic_m_l(parnt,pic,left,top,del) {
  var size_width = 50;
  var size_height= 50;
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = up(i,5);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_m_r(parnt,pic,left,top,del){
  var size_width = 50;
  var size_height= 50;
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = down(i,5);
    create_pic(parnt,image =new Image(),pic,i,top,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_m_t(parnt,pic,left,top,del){
  var size_width = 50;
  var size_height= 50;
  var i = top;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = down(i,5);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function pic_m_d(parnt,pic,left,top,del){
  var size_width = 50;
  var size_height= 50;
  var i = top;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = up(i,5);
    create_pic(parnt,image =new Image(),pic,left,i,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}




function text_move_left(parnt,text,size_font,top,left,move,angle,rotate,interval,del) {
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = up(i,move);
     i2 = up(i2,rotate);
     create_text(parnt,text,size_font,i,top,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_right(parnt,text,size_font,top,left,move,angle,rotate,interval,del){
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = down(i,move);
     i2 = up(i2,rotate);
     create_text(parnt,text,size_font,i,top,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_top(parnt,text,size_font,top,left,move,angle,rotate,interval,del){
  var i = top;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = down(i,move);
     i2 = up(i2,rotate);
     create_text(parnt,text,size_font,left,i,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move_down(parnt,text,size_font,top,left,move,angle,rotate,interval,del){
  var i = top;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = up(i,move);
   i2 = up(i2,rotate);
   create_text(parnt,text,size_font,top,i,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}



function text_m_l(parnt,text,top,left,del) {
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = i + up(i,5);
    //pnt.clearRect(0,0,canvas.width,canvas.height);
    create_text(parnt,text,20,i,top,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_m_r(parnt,text,top,left,del){
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = i + down(i,5);
    create_text(parnt,text,20,i,top,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_m_t(parnt,text,top,left,del){
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = i + down(i,5);
    create_text(parnt,text,20,left,i,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}

function text_m_d(parnt,text,top,left,del){
  var i = left;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    i = i + up(i,5);
    create_text(parnt,text,20,left,i,0);
  }
  var interval_id = setInterval(IntervalFunc , 100);
}



function pic_move(parnt,pic,left,top,size_width,size_height,move,angle,rotate,interval,up,wrok,del) {
  var i = left;
  var i1= top
  var i2 = angle;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    if (up){
      i = up(i,move);
    } else {
      i = up(i,- move);
    };
    if (wrok) {
      i1 = up(i1,move);
    } else {
      i1 = up(i1,- move);
    };
    i2 = up(i2,rotate);
    create_pic(parnt,image =new Image(),pic,i,i1,size_width,size_height,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function pic_m(parnt,pic,left,top,move,up,wrok,del) {
  var size_width = 50;
  var size_height= 50;
  var i = left;
  var i1= top
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
    if (up){
      i = up(i,move);
    } else {
      i = up(i,- move);
    };
    if (wrok) {
      i1 = up(i1,move);
    } else {
      i1 = up(i1,- move);
    };
    create_pic(parnt,image =new Image(),pic,i,i1,size_width,size_height,0);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}

function text_move(parnt,text,size_font,top,left,move,angle,rotate,interval,up,wrok,del) {
  var i = left;
  var i1= top;
  var i2 = angle;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
   if (up){
     i = up(i,move);
   } else {
     i = up(i,- move);
   };
   if (wrok) {
     i1 = up(i1,move);
   } else {
     i1 = up(i1,- move);
   };
   i2 = up(i2,rotate);
   create_text(parnt,text,size_font,i,i1,i2);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}
function text_m(parnt,text,top,left,move,up,wrok,del) {
  var i = left;
  var i1= top;
  var size_font=20;
  var interval = 100;
  function IntervalFunc(){
    if (del) {
      clearInterval(interval_id);
    }
   if (up){
     i = up(i,move);
   } else {
     i = up(i,- move);
   };
   if (wrok) {
     i1 = up(i1,move);
   } else {
     i1 = up(i1,- move);
   };
   create_text(parnt,text,size_font,i,i1,0);
  }
  var interval_id = setInterval(IntervalFunc , interval);
}
