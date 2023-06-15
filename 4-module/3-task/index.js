function highlight() {
  let trList = table.children[1].rows;

  for (let tr of trList) {
    // data-available
    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    }
    else if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    }
    else if (!tr.cells[3].dataset.available) { tr.hidden = true; }

    // gender
    if (tr.cells[2].textContent === 'm') {
      tr.classList.add('male');
    }

    else if (tr.cells[2].textContent === 'f') {
      tr.classList.add('female');
    }

    // inline-стиль
    if (tr.cells[1].textContent < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }

}












