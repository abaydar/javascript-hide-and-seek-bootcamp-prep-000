function getFirstSelector(selector){return document.querySelector(selector)}
function nestedTarget(){return document.getElementById('nested').querySelector('div.target')}
function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]}
function increaseRankBy(n){
  var rankedList = document.getElementById("app").querySelectorAll('.ranked-list')
  for(var i = 0; i < rankedList.length; i++){
}