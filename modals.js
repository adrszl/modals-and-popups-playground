const modal = document.querySelector('.modal');
const triggerModalButtons = document.querySelectorAll('[data-toggle="modal"]');

triggerModalButtons.forEach(element => {
  let modalType = element.attributes['data-modal-type'].nodeValue;
  let classToAdd = '';

  switch (modalType) {
    case 'slide-in-top':
      classToAdd = 'slide-in-top'
      break;
    case 'slide-in-right':
      classToAdd = 'slide-in-right'
      break;
    case 'slide-in-bottom':
      classToAdd = 'slide-in-bottom'
      break;
    case 'slide-in-left':
      classToAdd = 'slide-in-left'
      break;
    case 'fade-in':
      classToAdd = 'fade-in'
      break;
    default:
      break;
  }

  element.addEventListener('click', () => {
    modal.className = '';
    modal.classList.add('modal');
    modal.classList.add(classToAdd);
  })
});

console.log('modal ', modal)
console.log('trigger modal buttons ', triggerModalButtons)