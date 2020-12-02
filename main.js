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