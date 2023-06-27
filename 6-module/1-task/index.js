/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement("table");
    this.render();
    this.deleteRow();
  }

  render() {
    let frame = `
        <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
        </thead>
          <tbody>
          ${this.rows.map(obj =>
    `   <tr>
          <td>${obj.name}</td>
          <td>${obj.age}</td>
          <td>${obj.salary}</td>
          <td>${obj.city}</td>
          <td><button>X</button></td>
        </tr>
          `).join('')}
      </tbody>`;
    this.elem.innerHTML = frame;
  }
  deleteRow() {
    for (let btn of this.elem.querySelectorAll("button")) {
      btn.addEventListener('click', (event) =>
        event.target.closest("tr").remove());
    }
  }

}




