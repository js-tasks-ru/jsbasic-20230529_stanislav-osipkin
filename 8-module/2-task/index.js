/* eslint-disable no-unused-expressions */
import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';


export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();

  }

  render() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
        <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
      </div>
    </div>`
    );
    this.renderContent();
  }

  renderContent() {
    this.gridInner = this.elem.querySelector('.products-grid__inner');
    this.gridInner.innerHTML = "";

    for (let product of this.products) {
      if (this.filters.noNuts && product.nuts) {continue;}

      if (this.filters.vegeterianOnly && !product.vegeterian) {continue;}

      if (void 0 !== this.filters.maxSpiciness && product.spiciness > this.filters.maxSpiciness) {continue;}

      if (this.filters.category && product.category != this.filters.category) {continue;}

      this[product] = new ProductCard(product);
      this.gridInner.append(this[product].elem);
      this[product].elem.classList.add(`${product.id}`);
    }
  }

  updateFilter(products) {

    Object.assign(this.filters, products),
    this.renderContent();
  }
}

