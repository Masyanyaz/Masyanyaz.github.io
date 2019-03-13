'use strict'

var cvs = document.getElementById('canvas'),
	ctx = cvs.getContext('2d');

var rightBtn = false,
	leftBtn = false,
	upBtn = false,
	downBtn = false;

var x = 100,
	y = 100,
	rBall = 10,
	inv = 100;

// var nick = prompt('Nick', 'Masyanyaz');
var nick = 'Masyanyaz';

nick = new Hero(nick);

function Hero(name) {
	this.name = name;
	this.hp = 100;
	this.mana = 100;
	this.speed = 5;
}

function keyDown(e) {
	if (e.keyCode == 68) {
		rightBtn = true;
	} else if (e.keyCode == 65) {
		leftBtn = true;
	} else if (e.keyCode == 87) {
		upBtn = true;
	} else if (e.keyCode == 83) {
		downBtn = true;
	}	
}

function keyUp(e) {
	if (e.keyCode == 68) {
		rightBtn = false;
	}

	if (e.keyCode == 65) {
		leftBtn = false;
	}

	if (e.keyCode == 87) {
		upBtn = false;
	}

	if (e.keyCode == 83) {
		downBtn = false;
	}	
}

var boss = new Hero('Boss');

var xb = 300,
	yb = 400,
	rb = 15,
	ragr = 200,
	range = 100,
	boss.speed = 3;

var xbs = xb,
	ybs = yb;

function spell() {
	ctx.beginPath();
	ctx.arc(xbs, ybs, 5, 0, Math.PI*2);
	ctx.fillStyle = "#ff00ff";
	ctx.fill()
	ctx.closePath();
	moveSpell();
}

function moveSpell() {
	if (xbs > x) {
		xbs -= 4;
	} else if (xbs < x) {
		xbs += 4;
	} 

	if (ybs > y) {
		ybs -= 4;
	} else if (ybs < y) {
		ybs += 4;
	}
}

function moveBoss() {
	if (Math.pow(rBall + ragr, 2) > Math.pow(x - xb, 2) + Math.pow(y - yb, 2)) {
		ragr = 300;
		spell();
		if (Math.pow(rBall + range, 2) < Math.pow(x - xb, 2) + Math.pow(y - yb, 2)) {
			if (xb > x) {
				xb -= boss.speed;
			} else if (xb < x) {
				xb += boss.speed;
			} 

			if (yb > y) {
				yb -= boss.speed;
			} else if (yb < y) {
				yb += boss.speed;
			}
		}

		if (Math.pow(rBall + range, 2) > Math.pow(x - xb, 2) + Math.pow(y - yb, 2)) {
			if (xb > x) {
				xb += boss.speed;
			} else if (xb < x) {
				xb -= boss.speed;
			} 

			if (yb > y) {
				yb += boss.speed;
			} else if (yb < y) {
				yb -= boss.speed;
			}
		}
	}

	if (xb < canvas.width - rb) {
		xb += boss.speed;
	}

	if (xb > rb) {
		xb -= boss.speed;
	}

	if (yb > rb) {
		yb -= boss.speed;
	}

	if (yb < canvas.height - inv - rb) {
		yb += boss.speed;
	}

}

function drawBoss() {
	ctx.beginPath();
	ctx.arc(xb, yb, rb, 0, Math.PI*2);
	ctx.fillStyle = "#0000ff";
	ctx.fill()
	ctx.closePath();
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, rBall, 0, Math.PI*2);
	ctx.fillStyle = "#ff0000";
	ctx.fill()
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawBoss();
	moveBoss();




	if (rightBtn && x < canvas.width - rBall) {
		x += nick.speed;
	}

	if (leftBtn && x > rBall) {
		x -= nick.speed;
	}

	if (upBtn && y > rBall) {
		y -= nick.speed;
	}

	if (downBtn && y < canvas.height - inv - rBall) {
		y += nick.speed;
	}

	
	requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

draw();

