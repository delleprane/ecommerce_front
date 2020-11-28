let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

//pista
ctx.fillStyle = "#737373";
ctx.fillRect(0, 0, 1200, 600);

//calçadas
ctx.fillStyle = "lightgray";
ctx.fillRect(0, 0, 1200, 50);
ctx.fillStyle = "lightgray";
ctx.fillRect(0, 550, 1200, 600);
//fim calçada

//linhas do centro
ctx.beginPath();
ctx.moveTo(0, 290);
ctx.lineTo(1200, 290);
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.stroke();

ctx.moveTo(0, 310);
ctx.lineTo(1200, 310);
ctx.stroke();
ctx.closePath();
//fim linhas do centro

//faixas da rua
for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 95, 8, 1);
}

for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 145, 8, 1);
}

for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 195, 8, 1);
}

for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 245, 8, 1);
}

for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 355, 8, 1);
}
for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 405, 8, 1);
}
for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 455, 8, 1);
}
for (i = 0; i < 201; i++) {
  ctx.fillRect(1 + i * 20, 505, 8, 1);
}
//fim faixas da rua

//inicio player
