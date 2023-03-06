'use strict';


//random number
function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random numerb list
function createRandomList(num1, min, max) {
    const randomList = []; //vuoto

    while (randomList.length < num1) { //si ripete finchè non è < di 5
        const randomNumber = createRandomNumber(min, max);

        if (!randomList.includes(randomNumber)) {  //se il numero non è incluso allora viene pushato nella lista 
            randomList.push(randomNumber);
        }
    }
    return randomList;
}

setTimeout(visibilityNum, 3000);

 function visibilityNum(){
    console.log('test timer')
   // cpuRandomList.classList.add('visibility-none');
 }


const cpuRandomList = createRandomList(5, 1, 100);
console.log(cpuRandomList);


document.getElementById('random-list').innerHTML = cpuRandomList; 


