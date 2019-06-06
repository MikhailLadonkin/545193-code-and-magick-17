'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 50;
var CLOUD_X = 100;
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
  var canvas = document.getElementById('winner-message');
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 10, CLOUD_HEIGHT, CLOUD_WIDTH);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, CLOUD_HEIGHT, CLOUD_WIDTH);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 20);
  ctx.fillText('Список результатов:', 110, 35);

  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var BarHeight = (200 * times[i] / maxTime);
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BarHeight) * i, (BAR_WIDTH * times[i]) / maxTime, BAR_WIDTH);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
  }
};
