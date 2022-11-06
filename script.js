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

//! some
const array = [3, 44, 6, 90, 18, 1, 2, 8, 9, 11, 13, 18, 41];

const mySomeCallback = (item) => {
    if (item < 2) {
        return true;
    }
};

let a = array.some(mySomeCallback);

const mySome = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return true;
        }
    } return false;
};
console.log('SOME:', mySome(array, mySomeCallback));

//! every
const myEveryCallback = (item) => {
    if (item < 41) {
        return true;
    }
};

let b = array.every(myEveryCallback);

const myEvery = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (!callbackFn(arr[index], index, arr)) {
            return false;
        }
    } return true;
};
console.log('EVERY:', myEvery(array, myEveryCallback));

//! find
const myFindCallback = (item) => {
    return item > 23;
};

let c = array.find(myFindCallback);

const myFind = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return arr[index];
        }
    }
};
console.log('FIND:', myFind(array, myFindCallback));


//! findIndex
const myFindIndexCallback = (item) => {
    return item === 13;
};

let d = array.findIndex(myFindIndexCallback);

const myFindIndex = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return index;
        }
    }
};
console.log('FIND INDEX:', myFindIndex(array, myFindIndexCallback));

//! includes
const myIncludesCallback = (item) => {
    return item > 12;
};

let e = array.includes(myIncludesCallback);

const myIncludes = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return true;
        }
    } return false;
};
console.log('INCLUDES:', myIncludes(array, myIncludesCallback));

//! indexOf ???
const myIndexOfCallback = (item) => {
    return item === 8;
};

let f = array.includes(myIndexOfCallback);

const myIndexOf = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        if (callbackFn(arr[index], index, arr)) {
            return index;
        }
    }
};
console.log('INDEX OF:', myIndexOf(array, myIndexOfCallback));

//! splice arr.splice (fromIndex, itemsToDelete, item1ToAdd, item2ToAdd, ...)
const spliceArray = [3, 44, 6, 90, 18, 1, 2, 8, 9, 11, 13, 18, 41];

let g = spliceArray.splice(2, 10, 'hello');

const mySplice = (arr, start, remove, add) => {
    for (let index = start; index < start + remove; index++) {
        
    }
    
};
console.log('SPLICE:', mySplice(spliceArray, 2, 10, 'hello'));

//! slice заменяет массив
const sliceArray = [3, 44, 6, 90, 18, 1, 2, 8, 9, 11, 13, 18, 41];

let slicedArray = sliceArray.slice(2, 7);
console.log(slicedArray);

//! reverse




//! forEach (callback)
const forEach = ["Яблоко", "Апельсин", "Груша"];

const myForEachCallback = (item, i, arr) => {
    console.log(( i + ": " + item + " (массив:" + arr + ")" ));
};

// forEach.forEach(myForEachCallback);

const myForEach = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        callbackFn(arr[index], index, arr);
    }
};
myForEach(forEach, myForEachCallback);

//! map




//! filter
const filterArray = [
        {name: 'Ульяна',
        lastname: 'Иванова'
    },
        {name: 'Вера',
        lastname: 'Петрова'
    },
        {name: 'Арсений',
        lastname: 'Марков'
    },
        {name: 'София',
        lastname: 'Карташова'
    },
        {name: 'Илья',
        lastname: 'Демидов'   
    },
        {name: 'София',
        lastname: 'Волкова'
    },
        {name: 'Вера',
        lastname: 'Шарова'
    },
];

const myFilterCallback = (item) => {
    return item.name == 'Вера';
};

let newFilterArray = filterArray.filter(myFilterCallback);
// console.log(newFilterArray);

const newArray = [];

const myFilter = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        callbackFn(arr[index], index, arr);
    }   return newArray;
};
console.log('FILTER:', myFilter(newArray, myFilterCallback));

//! reduce



