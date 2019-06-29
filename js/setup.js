'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var ESC_CODE = 27;
var ENTER_CODE = 13;
var wizard = document.querySelector('.setup-wizard-appearance');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupSimilarList = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
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

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var generateWizards = function (num) {
  var similarCharacters = [];
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

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_CODE && document.activeElement !== setupUserName) {
    closeWizardWindow();
  }
};

var onEnterClose = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    closeWizardWindow();
  }
};

var onEnterOpen = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    openWizardWindow();
  }
};
var openWizardWindow = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
  setupClose.addEventListener('keydown', onEnterClose);
};

var closeWizardWindow = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
  setupClose.removeEventListener('keydown', onEnterClose);
};

var randomElement = function (arr) {
  var j;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr[i];
};

var changeWizardOutlook = function () {
  wizardCoat.style.fill = randomElement(coatColors);
  wizardEyes.style.fill = randomElement(eyesColors);
  wizardFireball.style.background = randomElement(fireballColors);
};


setupUserName.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});
renderWizards(generateWizards(4));
setupOpen.addEventListener('click', openWizardWindow);
setupClose.addEventListener('click', closeWizardWindow);
setupOpenIcon.addEventListener('keydown', onEnterOpen);
setupSimilar.classList.remove('hidden');
wizard.addEventListener('click', changeWizardOutlook);

