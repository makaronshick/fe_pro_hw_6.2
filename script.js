"use strict";

/* 
Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// 234/8=29.25
const array = [1, 28, { prop: 20 }, null, 65.6, undefined, 0, '123456', NaN, 11, 'hello', 91, 25.4, [15, 'ololo'], 12];

// 9/3=3
// const array = [5, { prop: 20 }, null, undefined, 2.5, '123456', NaN, 1.5, 'hello', [15, 'ololo']];

function isIntOrFloat(item) {
  if (
    Number.isInteger(item) || 
    (Number.isFinite(item) && !Number.isInteger(item))
  ) {

    return true;
  }

  return false;
}

function getArithmeticMean(array) {

  const numberValues = [];
  for (const item of array) {

    if (isIntOrFloat(item)) {

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
