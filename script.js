// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);
// console.log(document.querySelector('#current'));
// console.log(document.querySelectorAll('button'));
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);
// console.log(document.querySelector('[data-current = "3"]').previousElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

// Упражнение 47.а, рекурсия, вычисление факториала

function factorial(x) {
    if (Number.isInteger(x) && x >= 0) {
        if (x === 0) {
            return 1;
        } else {
            return x * factorial(x - 1);
        }
    } else if ((Number.isInteger(x) && x <= 0)) {
        return 1;
    } else {
        return 'Аргумент должен быть целым числом!';
    }
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(-66));
console.log(factorial(7.77));