const bookSection = document.querySelector('#book-list');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact');

const listButton = document.querySelector('#list-nav');
const addButton = document.querySelector('#add-nav');
const contactButton = document.querySelector('#contact-nav');

export const pageNavig = () => {
  listButton.addEventListener('click', () => {
    if (bookSection.style.display === 'none') {
      bookSection.style.display = 'flex';
      formSection.style.display = 'none';
      contactSection.style.display = 'none';
    } else {
      formSection.style.display = 'none';
      contactSection.style.display = 'none';
    }
  });

  addButton.addEventListener('click', () => {
    if (formSection.style.display === 'none') {
      formSection.style.display = 'flex';
      bookSection.style.display = 'none';
      contactSection.style.display = 'none';
    } else {
      bookSection.style.display = 'none';
      contactSection.style.display = 'none';
    }
  });

  contactButton.addEventListener('click', () => {
    if (contactSection.style.display === 'none') {
      contactSection.style.display = 'flex';
      formSection.style.display = 'none';
      bookSection.style.display = 'none';
    } else {
      formSection.style.display = 'none';
      bookSection.style.display = 'none';
    }
  });
};
export default { pageNavig };