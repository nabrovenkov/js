//Метод объекта document, который позволяет найти элемент на веб-странице по его идентификатору (атрибут id). Возвращает Element или null, если ничего не нашлось.
const small = document.getElementById('small') 


//Позволяет найти элемент по CSS - селектору среди дочерних.Если элементов несколько, то вернётся первый подходящий.Если подходящих элементов нет, то вернёт null.
const medium = document.querySelector('#medium')
const big = document.querySelectorAll('#big')

// Вызываем функцию в которой говорим что нужно сделать с полученным объектом small
function handler(event) {
  event.stopPropagation(); //запрещает всплытие
  console.log('click')
}

// Присваиваем эту функцию нашему event
small.onclick = handler

// Проблема в том что мы сожем присвоить только одну функцию обработчик подобным образом.
// Что при присвоить вторую нужно создавать функцию в которую положим все наши обработчики

//Пример
function handler1() {
  console.log('click')
}
function handler2() {
  console.log('click')
}
function doubleHandler() {
  handler1();
  handler2()
}
small.onclick = doubleHandler;

// Вместо этого мы можем использовать 
small.addEventListener('click', handler1)
small.addEventListener('click', handler2)