var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var x = Math.random()*400;
var y = 300;
var dx = 4;
var dy = -3;
var rBall = 5;

var palH = 10;
var palW = 75;
var palX = (canvas.width - palW) / 2;
var palY = canvas.height - 60;

var leftBtn = false;
var rightBtn = false;

var kirCol = 6;
var kirRow = 10;
var kirW = 60;
var kirH = 10;
var kir = [];
for (var c = 0; c < kirCol; c++) {
	kir[c] = [];
	for (var r = 0; r < kirRow; r++) {
		kir[c][r] = {x : 0, y : 0, status : 1};
	}
}

var score = 0;

function drowScore() {
	ctx.font = "18px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText ("Score: " + score, 315, 585);
}

function keyDown(e) {
	if (e.keyCode == 39) {
		rightBtn = true;
	} else if (e.keyCode == 37) {
		leftBtn = true;
	}	
}

function keyUp(e) {
	if (e.keyCode == 39) {
		rightBtn = false;
	} else if (e.keyCode == 37) {
		leftBtn = false;
	}	
}

function mouseMove(e) {
	var relX = e.clientX - canvas.offsetLeft;
	if (relX > 0 && relX < canvas.width) {
		palX = relX - palW / 2;
	}
}

function drawKir() {
	for (var c = 0; c < kirCol; c++) {
		for (var r = 0; r < kirRow; r++) {
			if (kir[c][r].status == 1) {
				var kirX = (c * (kirW + 5)) + 7;
				var kirY = (r * (kirH + 5)) + 10;
				kir[c][r].x = kirX;
				kir[c][r].y = kirY;
				ctx.beginPath();
				ctx.rect(kirX, kirY, kirW, kirH);
				ctx.fillStyle = "#00a";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawPal() {
	ctx.beginPath();
	ctx.rect(palX, palY, palW, palH);
	ctx.fillStyle = "#000";
	ctx.fill();
	ctx.closePath();
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, rBall, 0, Math.PI*2);
	ctx.fillStyle = "#ff0000";
	ctx.fill()
	ctx.closePath();
}

function kirDetected() {
	for (var c = 0; c < kirCol; c++) {
		for (var r = 0; r < kirRow; r++) {
			var det = kir[c][r];
			if (det.status == 1) {
				if (x - rBall > det.x && x -rBall < det.x + kirW && y - rBall > det.y && y - rBall < det.y + kirH) {
					dy = -dy;
					det.status = 0;
					score++;
					if (score == kirRow * kirCol) {
						alert("YOU WIN!");
						document.location.reload();
					}
				}
			}
		}
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawKir();
	drawBall();
	drawPal();
	drowScore();
	kirDetected();
	x += dx;
	y += dy;
	
	if (x + dx > canvas.width - rBall || x + dx < rBall) {
		dx = -dx;
	}

	if (y + dy < rBall) {
		dy = -dy;
	} else if (y + dy > palY - rBall) {
		if (x > palX && x < palX + palW) {
		dy = -dy; 
		} else {
			alert("The End!");
			document.location.reload();
		}
	}

	if (rightBtn && palX < canvas.width - palW) {
		palX += 4;
	}

	if (leftBtn && palX > 0) {
		palX -= 4;
	}
	
	requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
document.addEventListener("mousemove", mouseMove, false);

draw();

