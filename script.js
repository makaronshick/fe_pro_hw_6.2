"use strict";

/* 
Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// 233/8=29.125
const array = [1, 28, { prop: 20 }, null, 65, undefined, 0, '123456', NaN, 11, 'hello', 91, 25, [15, 'ololo'], 12]; 

function getArithmeticMean(array) {

  const numberValues = [];
  for (const item of array) {

    if (Number.isInteger(item)) {

      numberValues.push(item);
    }
  }

  let result = 0;
  if (numberValues.length > 0) {
    
    let sum = 0;
    for (const value of numberValues) {

      sum += value;
    }

    result = sum / numberValues.length;
  }
  else {
    result = 'Error. Unable to calculate arithmetic mean';
  }

  return result;
}

const arithmeticMean = getArithmeticMean(array);
alert(`arithmetic mean = ${arithmeticMean}`);
