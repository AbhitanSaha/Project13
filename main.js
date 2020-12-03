var canvas=new fabric.Canvas("myCanvas");
blockwidth=30;
blockheigth=30;
playerx=10;
playery=10;
var object="";
var playerobject="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function (Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    })
}
function newimg(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        object=Img;
        object.scaleToHeight(blockheigth);
        object.scaleToWidth(blockwidth);
        object.set({
            top:playery,
            left:playerx
        })
        canvas.add(object);
    })
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80'){
    console.log("P and Shift pressed together");
    blockheigth=blockheigth+10;
    blockwidth=blockwidth+10;
    document.getElementById("currentheight").innerHTML=blockheigth;
    document.getElementById("currentwidth").innerHTML=blockwidth;
    }
    if(e.shiftKey && keyPressed=='77'){
        console.log("M and Shift pressed together");
        blockheigth=blockheigth-10;
        blockwidth=blockwidth-10;
        document.getElementById("currentheight").innerHTML=blockheigth;
        document.getElementById("currentwidth").innerHTML=blockwidth;
        }
if(keyPressed=='76'){
    newimg("captain_america_left_hand.png");
    console.log("l");
}
if(keyPressed=='82'){
    newimg("spiderman_right_hand.png");
    console.log("r");
}
if(keyPressed=='66'){
    newimg("hulkd_body.png");
    console.log("b");
}
if(keyPressed=='70'){
    newimg("ironman_legs.png");
    console.log("b");
}
if(keyPressed=='72'){
    newimg("thor_face.png");
    console.log("b");
}
if(keyPressed=='38'){
    up();
    console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='39'){
    right();
    console.log("right");
}
}   