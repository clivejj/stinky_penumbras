var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );
console.log( "targetx: " + targetX );
console.log( "targety: " + targetY );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var dx = x1 - x0;
    var dy = y1 - y0;
    return Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
};

var solved = false;

var findIt = function(e) {
    //get x and y coordinates of mouse
    var x = event.clientX;
    var y = event.clientY;
    //calculate distance from mouse to target
    var d = distance(x, y, targetX, targetY);
    
    //console.log(d);
    //console.log(box);

    //solve puzzle if needed
    solve(d);

    //if puzzle is sovled, do nothing
    if (solved) {
	return;
    }

    //if puzzle is yet to be solved, changed background color
    var color = 255 - d;
    console.log(color);
    box.style.backgroundColor = "rgb(" + 0 + "," + color + "," + 0 + ")";
}

//if puzzle is solved, turn screen red, and set solved to true
var solve = function(d) {
    if (d <= 10) {
	box.style.backgroundColor = "rgb(" + 255 + "," + 0 + "," + 0 + ")";
	box.innerHTML = "<center> SOLVED </center>";
	solved = true;
    }
}
	
box.addEventListener("mousemove", findIt);

