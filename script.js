'use strict'

//! Статистика массива

/* const arr = [1, 2, 3, 44, 5, 66, 189, 0, 12, 151, 9];

const Sort = () => {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (max < arr[i]) {
                max = arr[i];
            }

            if (min > arr[i]) {
                min = arr[i];
            }
        }
        console.log(sum);
        console.log('MAX', max);
        console.log('MIN', min);
};
Sort(); */

//! Замена двух элементов

/* const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

const ChangeElems = () => {
    for (let i = 0; i < letters.length; i+=2) {
        [letters[i], letters[i+1]] = [letters[i+1], letters[i]];
        console.log(letters);
    }
};
ChangeElems(); */

//! Замена цвета на странице

document.addEventListener('DOMContentLoaded', () => {

    const colors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];

    const btn = document.querySelector('.button'),
          body = document.querySelector('body'),
          blocks = document.querySelector('.blocks'),
          colorName = document.querySelector('.title-colorName');

    function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
    }


    btn.addEventListener('click', (e) => {

        mousePositionToCustomProp(e, btn);
            btn.classList.add("pulse");
            btn.addEventListener(
        "animationend",
        () => {
        btn.classList.remove("pulse");
        },
        { once: true }
    );

    const filteredColors = colors.filter((item) => item !== body.style.background);

    const currentColor = filteredColors[Math.floor(Math.random() * filteredColors.length)];
    
        body.style.background = currentColor;
    
        const block = document.createElement('div');
            block.className = 'block';
            block.style.background = currentColor;
            blocks.append(block);
            
        colorName.style.color = currentColor;
        colorName.innerHTML = currentColor;
        });
    });

//! Определение простое числа

/* function isNaturalNumber(number) {
    const sqrt = Math.sqrt(number);
    for (let i = 2; i <= sqrt ; i++) {
        if (number % i === 0) {
            return false;
        }
    }
return number > 1;
}
console.log(isNaturalNumber(997)); */

//! Методы массивов

//* some
const someNum = [3, 44, 6, 90, 18, 1, 2];

const mySomeCallback = (item) => {
    if (item < 2) {
        return true;
    }
};

let b = someNum.some(mySomeCallback);
console.log(b);


const mySome = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return true;
        }
    } return false;
};

console.log(mySome(someNum, mySomeCallback));;

//* every

const everyNum = [8, 9, 11, 13, 18, 41];

const myEveryCallback = (item) => {
    if (item < 41) {
        return true;
    }
};

let a = everyNum.every(myEveryCallback);
console.log(a);

const myEvery = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (!callbackFn(arr[index], index, arr)) {
            return false;
        }
    } return true;
};


//* find

const findNum = [8, 9, 11, 13, 18, 41];

const myFindCallback = (item) => {
    return item > 142;
};

let c = findNum.find(myFindCallback);
console.log(c);

const myFind = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return arr[index];
        }
    }
};
console.log(myFind(findNum, myFindCallback));


//* findIndex




//* includes




//* indexOf