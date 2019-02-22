var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var x = Math.random()*400;
var y = 300;
var dx = 4;
var dy = -3;
var rBall = 5;

var menu = 200;

var palH = 10;
var palW = 75;
var palX = (canvas.width - menu - palW) / 2;
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

var start = false;
var end = false;
var win = false;

document.querySelector('#canvas').onclick = function(e) {
	e = event || window.event;

	if (start == false) {
		if (e.offsetX > 450 && e.offsetX < 550 && e.offsetY > 50 && e.offsetY < 80) {
			draw();
		}
	}

	if (e.offsetX > 450 && e.offsetX < 550 && e.offsetY > 100 && e.offsetY < 130) {
		localStorage.removeItem("maxScore");
	}

	if (end == true) {
		if (e.offsetX > 150 && e.offsetX < 250 && e.offsetY > 310 && e.offsetY < 340) {
			window.location.reload();
		};
	}

}

function drawBtn() {
	ctx.beginPath();
	ctx.rect(450, 50, 100, 30);
	ctx.rect(450, 100, 100, 30);
	ctx.moveTo(400, 0);
	ctx.lineTo(400, 600);
	ctx.fillStyle = "#f0f0f0";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.font = "18px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText ("Start", 478, 72);
	ctx.fillText ("Reset", 475, 122);
	ctx.closePath();
	
}

function drawScore() {
	ctx.font = "18px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText ("Score: " + score, 310, 585);
	ctx.fillText ("Max score: " + localStorage.getItem("maxScore"), 10, 585);
	ctx.fill();

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
	if (relX > palW / 2 && relX < canvas.width - menu - palW / 2) {
		palX = relX - palW / 2;
	}
}
function onTouchEnd(e) {
	var relX = e.clientX - canvas.offsetLeft;
	if (relX > palW / 2 && relX < canvas.width - menu - palW / 2) {
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
				ctx.fillStyle = "#00a";
				ctx.fillRect(kirX, kirY, kirW, kirH);
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
				if (x - rBall >= det.x && x - rBall <= det.x + kirW && y - rBall >= det.y && y - rBall <= det.y + kirH) {
					dy = -dy;
					det.status = 0;
					score++;
					if (score == kirRow * kirCol) {
						drawWin();
						win = true;
						end = true;
					}
				}
			}
		}
	}
}

function drawStatic() {
	drawBtn();
	drawKir();
	drawPal();

}

function drawWin() {
	ctx.beginPath();
	ctx.fillStyle = "#f0f0f0";
	ctx.rect(100, 250, 200, 100);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#f0f0f0";
	ctx.rect(150, 310, 100, 30);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.font = "18px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText ("Congratulations!", 135, 275);
	ctx.fillText ("Score: " + score, 169, 300);
	ctx.fillText ("Restart", 170, 331);
	ctx.closePath();
}

function drawEnd() {
	ctx.beginPath();
	ctx.fillStyle = "#f0f0f0";
	ctx.rect(100, 250, 200, 100);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#f0f0f0";
	ctx.rect(150, 310, 100, 30);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.font = "18px Arial";
	ctx.fillStyle = "#000";
	ctx.fillText ("The End!", 165, 275);
	ctx.fillText ("Score: " + score, 169, 300);
	ctx.fillText ("Restart", 170, 331);
	ctx.closePath();
}

function draw() {
	start = true;
	if (win == false) {
		ctx.clearRect(0, 0, canvas.width - menu, canvas.height);
		drawKir();
		drawBall();
		drawPal();
		drawScore();
		kirDetected();
		x += dx;
		y += dy;
		
		if (x + dx > canvas.width - menu - rBall || x + dx < rBall) {
			dx = -dx;
		}

		if (y + dy < rBall) {
			dy = -dy;
		} else if (y + dy > palY - rBall) {
			if (x > palX && x < palX + palW) {
			dy = -dy; 
			} else {
				drawEnd();
				end = true;
				return;
			}
		}

		if (localStorage.getItem("maxScore") <= score) {
			localStorage.setItem("maxScore", score);
		}
		
		if (rightBtn && palX < canvas.width - menu - 3 - palW) {
			palX += 5;
		}

		if (leftBtn && palX > 0) {
			palX -= 5;
		}
		
		requestAnimationFrame(draw);
	}

}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("ontouchend", onTouchEnd, false);

drawStatic();





