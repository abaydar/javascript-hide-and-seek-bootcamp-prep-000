function getFirstSelector(selector){return document.querySelector(selector)}
function nestedTarget(){return document.getElementById('nested').querySelector('div.target')}
function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]}
function increaseRankBy(n) {
  var ul = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ul.length; i++) {
    ul[i].innerHTML = parseInt(ul[i].innerHTML) + n
  } return ul
}