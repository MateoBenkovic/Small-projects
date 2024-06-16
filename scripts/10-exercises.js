if (document.querySelector('.test-button').classList.contains('js-button')) {
  console.log('yesiir')
};

function changeColor (selector) {

  const button = document.querySelector(selector);

  if (!button.classList.contains('is-toggled')) {
    toggleOff();
    button.classList.add('is-toggled')
  } else {
    button.classList.remove('is-toggled')
  };

};

function toggleOff () {
  if (document.querySelector('.is-toggled')) {
    document.querySelector('.is-toggled').classList.remove('is-toggled')
  }
}