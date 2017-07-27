function getFirstSelector(selector) {
   return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list')
const firstList = rankedLists[0]
const secondList = rankedLists[1]

let children = firstList.children
let start = 1
for (let i = 0, l = children.length; i < l; i++) {
  children[i].innerHTML = (start + parseInt(i) + n).toString()
}

children = secondList.children
start = 12

for (let i = 0, l = children.length; i < l; i++) {
  children[i].innerHTML = (start - parseInt(i) + n).toString()
}
}

function deepestChild() {
 const dive = document.getElementById('grand-node').querySelectorAll('div')
 let current = dive
 let next = []

 while(current) {
  if((current) = 'boo!') {
    return current
  }
  if (array.isArray(current)) {
  for (let i = 0; i < current.length; i++) {
    next.push(current[i])
   }
 }
current = next.shift()
}
 return null
}

function deepestChild() {
const list = document.querySelectorAll('#grand-node div')
const lastItem = list.length-1
return list[lastItem]
}
