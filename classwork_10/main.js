// 1- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// document.getElementById('btn').onclick = function () {
//     let i11 = document.forms.f1.i11.value;
//     let i12 = document.forms.f1.i12.value;
//     let i21 = document.forms.f2.i21.value;
//     let i22 = document.forms.f2.i22.value;
//     console.log(i11, i12, i21, i22);
// };




// let divOne = document.createElement('div');
// divOne.innerText = 'Контейнер 1';
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let inputeOne = document.createElement('input');
// inputeOne.setAttribute('name', 'inputeOne');
//
// let inputeTwo = document.createElement('input');
// inputeTwo.setAttribute('name', 'inputeTwo');

// let inputeThree = document.createElement('input');
// inputeThree.setAttribute('name', 'inputeThree');
//
// let inputeFour = document.createElement('input');
// inputeFour.setAttribute('name', 'inputeFour');
//
// let button = document.createElement('button');
// button.innerText = 'ГОРІШКАМ БОЙ';
//
// document.body.appendChild(button);
//
// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeThree,inputeFour);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
// })
// 2- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Створи таблицю';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
//
// button.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let enterText = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, enterText);
// })


// let form = document.forms.tabCreator;
// form.onsubmit = function (e){
//     e.preventDefault();
//     let rows = +form.rows.value;
//     let columns = +form.columns.value;
//     let content = form.content.value;
//     console.log(rows, columns, content);
//
//     let table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td');
//             td.innerText = content;
//             tr.appendChild(td)
//
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }




// 3- Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['fuckyou', 'bitch', 'cop'];
// let btn = document.getElementById('btn');
//
// btn.onclick = function () {
//     let word = document.getElementById('bad').value;
//     for (let badWord of badWords) {
//         if (badWord === word){
//             alert();
//         }
//     }
// };




// 4- Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


let badWords = ['fuckyou', 'bitch', 'cop'];
let btn = document.getElementById('btn');

btn.onclick = function () {
    let sentence = document.getElementById('bad').value;
    for (let badWord of badWords) {
        if (sentence.includes(badWord)){
            alert();
        }
    }
};