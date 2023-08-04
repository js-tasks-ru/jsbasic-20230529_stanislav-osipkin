import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slideCount = 0;
    this.slides = slides;
    this.render();
    this.slideToggle();
  }

  render() {
    this.elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"></div>
    </div>
    `);
    this.elem.querySelector('.carousel__inner').insertAdjacentHTML('beforeend',
      this.slides.map(({id, image, price, name}) =>
        `<div class="carousel__slide" data-id="${id}">
          <img src="../../assets/images/carousel/${image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${price.toFixed(2)}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
         </div>
        `).join('')
    );

    this.elem.addEventListener('click', this.Onclick);

    return this.elem;
  }

  Onclick = (event) => {

    if (event.target.closest('.carousel__button')) {
      this.elem.dispatchEvent(
        new CustomEvent('product-add', {
          detail: event.target.closest('[data-id]').dataset.id,
          bubbles: true,
        })
      );
    }

    if (event.target.closest('.carousel__arrow_right')) {
      this.slideCount++;
      this.slideToggle();
    } else if (event.target.closest('.carousel__arrow_left')) {
      this.slideCount--;
      this.slideToggle();
    }

  }

  slideToggle() {
    let offset = -this.elem.offsetWidth * this.slideCount;
    this.elem.querySelector('.carousel__inner').style.transform = `translateX(${offset}px)`;


    if (this.slideCount == this.slides.length - 1) {
      this.elem.querySelector('.carousel__arrow_right').style.display = 'none';
    } else {
      this.elem.querySelector('.carousel__arrow_right').style.display = '';
    }

    if (this.slideCount == 0) {
      this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
    } else {
      this.elem.querySelector('.carousel__arrow_left').style.display = '';
    }
  }

}
