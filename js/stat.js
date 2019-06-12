'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 50;
var CLOUD_X = 140;
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
  ctx.fillRect(160, 20, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(150, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 170, 20);
  ctx.fillText('Список результатов:', 170, 40);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var BarHeight = -(150 * times[i] / maxTime);
    var X_COORDINATE = CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
    }
    ctx.fillRect(X_COORDINATE, 100 + CLOUD_Y + GAP + TEXT_WIDTH, BAR_WIDTH, BarHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], X_COORDINATE, CLOUD_Y + GAP + 160);
    ctx.fillText((Math.round(times[i])), X_COORDINATE, BarHeight + 220);
  }
};
