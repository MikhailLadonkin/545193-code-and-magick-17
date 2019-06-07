'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 50;
var CLOUD_X = 50;
var CLOUD_Y = 50;
var TEXT_WIDTH = 50;
var FONT_GAP = 16;
var BAR_WIDTH = 40;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 20);
  ctx.fillText('Список результатов:', 110, 35);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var BarHeight = -(150 * times[i] / maxTime);
    var X_COORDINATE = CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
    }
    ctx.fillText(names[i], X_COORDINATE, CLOUD_Y + GAP + 155);
    ctx.fillText((Math.round(times[i] / 1000)), X_COORDINATE + 10, BarHeight + 220);
    ctx.fillRect(X_COORDINATE, 100 + CLOUD_Y + GAP + TEXT_WIDTH, BAR_WIDTH, BarHeight);
  }
};
