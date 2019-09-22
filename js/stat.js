var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FIX_Y =240;
var GAP = 10;
var FONT_GAP = 10;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT=80;
var BAR_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - TEXT_HEIGHT - GAP;

var renderCloud = function(ctx, x, y, color) {
ctx.fillStyle = color;
ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP ,CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP , CLOUD_Y + 2 * FONT_GAP);

  ctx.fillStyle = 'red';
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {

  ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, 250);
  ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, FIX_Y - ((barHeight * times[i]) / maxTime), BAR_WIDTH, (barHeight * times[i]) / maxTime);

  ctx.fillStyle = 'rgba(0, 0, '+ Math.random +', 0.7)';
  }
};








