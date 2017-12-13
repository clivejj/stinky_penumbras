var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var dx = x1 - x0;
    var dy = y1 - y0;
    return Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
};


var findIt = function(e) {
    var x = event.clientX;
    var y = event.clientY;
    var d = distance(x, y, targetX, targetY);
    console.log(d);
    console.log(box);
    box.style.backgroundColor = "rgb(" + d + "," + d + "," + d + ")";
};



box.addEventListener("mousemove", findIt);

