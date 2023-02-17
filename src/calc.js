import getRandomNumber from './randomNumber.js';
import outputText from './index.js';

const introductoryText = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 1;
const maxRange = 100;
const minIndexNumber = 0;
const maxIndexNumber = 2;

function calculate(a, b, operator) {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }
  return a + b;
}

function randomIndex() {
  return getRandomNumber(minIndexNumber, maxIndexNumber);
}

function randomSings() {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[randomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const corectAnswer = calculate(number1, number2, operator).toString();

  return [question, corectAnswer];
}

export default function startCalc() {
  outputText(introductoryText, randomSings);
}
