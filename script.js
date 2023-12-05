var canvas = document.getElementById('canvas');
var pen = canvas.getContext("2d")
pen.fillStyle="red";
pen.fillRect(40,20,300,40)

pen.fillStyle="white";
pen.fillRect(40,60,300,40)

pen.fillStyle="black";
pen.fillRect(40,100,300,40)




var image = document.getElementById("image");
var pen = canvas.getContext("2d")

image = new Image();
image.src = '620151211054752.jpg';
image.onload = function() {
    var newWidth = 60; 
    var newHeight = 20; 
    pen.drawImage(image, 140, 70, newWidth, newHeight);
};




