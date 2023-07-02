import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.ribbonItems = this.elem.querySelectorAll('.ribbon__item');
    this.scrollLeft();
    this.scrollRight();
  }

  render() {
    this.elem = createElement(
      `<div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);

    this.elem.querySelector('.ribbon__inner').insertAdjacentHTML('beforeend',
      this.categories.map(({ name, id }) =>
        `<a href="#" class="ribbon__item" data-id="${id}">${name}</a>
      `).join('')
    );

    // Вначале 1-ый элемент активный
    // this.elem.querySelector('.ribbon__item').classList.add('ribbon__item_active');

    this.elem.addEventListener('click', this.Onclick);

    return this.elem;
  }

  Onclick = (event) => {
    let scrollLeft = this.ribbonInner.scrollLeft;
    let scrollRight = this.ribbonInner.scrollWidth - scrollLeft - this.ribbonInner.clientWidth;

    if (event.target.closest('.ribbon__item')) {
      event.preventDefault();

      this.ribbonItems.forEach(function (item) {
        if (item.classList.contains('ribbon__item_active')) {
          item.classList.remove('ribbon__item_active');
        } else {
          event.target.classList.add('ribbon__item_active');
        }
      });

      this.elem.dispatchEvent(
        new CustomEvent('ribbon-select', {
          detail: event.target.closest('[data-id]').dataset.id,
          bubbles: true,
        })
      );
    }

    if (event.target.closest('.ribbon__arrow_right')) {
      this.scrollRight();
      if (Math.floor(scrollRight)) {
        this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      }
      if (scrollLeft < 1) {
        this.elem.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
      }
    } else if (event.target.closest('.ribbon__arrow_left')) {
      this.scrollLeft();
      if (this.ribbonInner.scrollLeft > 1) {
        this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      }

    }
  }

  scrollLeft() {
    // -350
    this.ribbonInner.scrollBy(-350, 0);
  }

  scrollRight() {
    // 350
    this.ribbonInner.scrollBy(350, 0);
  }


}















