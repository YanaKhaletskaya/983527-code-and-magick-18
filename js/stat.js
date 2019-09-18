var canvas = document.getElementById('statistics');
var ctx = canvas.getContext('2d');
window.renderStatistics = function(ctx, names, times) {

}

ctx.fillStyle = 'white';
ctx.fillRect(100, 10, 420, 270);
ctx.fillRect(110, 20, 420, 270);


ctx.font = '16px PT Mono';
ctx.fillText('Ура', 0,10);
