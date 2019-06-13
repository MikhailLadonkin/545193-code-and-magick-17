'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('div');

var deleteClass = function (variable, selector) {
  variable.classList.remove(selector);
};

var generateWizards = function (num) {
  var similarCharacters = [];
  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var lastNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  for (var i = 0; i < num; i++) {
    similarCharacters.push(
        {
          name: names[Math.floor(Math.random() * names.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)],
          coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
          eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
        }
    );
  }
  return similarCharacters;
};

var renderWizards = function (array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    var element = template.cloneNode(true);
    var item = array[i];
    element.querySelector('.wizard-coat').style.fill = item.coatColor;
    element.querySelector('.wizard-eyes').style.fill = item.eyesColor;
    element.querySelector('.setup-similar-label').textContent = item.name;
    fragment.appendChild(element);
  }
  setupSimilarList.appendChild(fragment);
};

deleteClass(setup, 'hidden');
deleteClass(setupSimilar, 'hidden');
renderWizards(generateWizards(4));
