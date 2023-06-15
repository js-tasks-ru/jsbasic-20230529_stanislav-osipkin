function highlight(table) {
  let trList = table.children[1].rows;

  for (let tr of trList) {
    // data-available
    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    }
    else if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    }
    else { tr.hidden = true; }

    // gender
    if (tr.cells[2].textContent === 'm') {
      tr.classList.add('male');
    }

    else if (tr.cells[2].textContent === 'f') {
      tr.classList.add('female');
    }

    // inline-стиль
    if (parseInt(tr.cells[1].textContent) < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }

}












