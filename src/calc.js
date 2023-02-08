import getRandomNumber from './randomNumber.js';
import outputText from './index.js';

const introductoryText = 'What is the result of the expression?';
const operator = ['+', '-', '*'];
const minRange = 1;
const maxIndexNumber = 3;
const maxRange = 100;

function calculate (a, b, operator) {
    if(operator === '+') {
        return a + b;
    }
    if(operator === '-') {
        return a - b;
    }
    if(operator === '*') {
        return a * b;
    }
}

function randomIndex () {
    return getRandomNumber(minRange, maxIndexNumber);
}

function randomSings () {
    number1 = getRandomNumber(minRange, maxRange);
    number2 = getRandomNumber(minRange, maxRange);
    const operator = operator[randomIndex(operator)];
    const question = `${number1} ${operator} ${number2}`;
    const corectAnswer = calculate(number1, number2, operator);

    return[question, corectAnswer]
}

export default function startCalc () {
    outputText(introductoryText, randomSings);
} 