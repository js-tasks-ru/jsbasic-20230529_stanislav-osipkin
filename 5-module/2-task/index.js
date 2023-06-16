function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  btn.addEventListener('click', function (event) {
    if (!event.target) {return;}
    text.hidden = !text.hidden;
  });
}
