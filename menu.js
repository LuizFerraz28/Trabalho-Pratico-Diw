var btn = document.querySelector('button');

btn.onclick = function() {
  if (document.querySelector('#list-nav').classList.contains('active')) {
    document.querySelector('#list-nav').classList.remove('active')
    document.querySelector('#list-nav').classList.add('inactive')
  } else {
    document.querySelector('#list-nav').classList.remove('inactive')
    document.querySelector('#list-nav').classList.add('active')
  }
}
