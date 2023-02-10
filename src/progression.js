import getRandomNumber from './randomNumber.js';
import outputText from './index.js';
import { question } from 'readline-sync';

const introductoryText = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 100;
const minIndex = 0;
const maxIndex = 9;
const points = '..';

function randomIndex () {
    return getRandomNumber(minIndex, maxIndex);
}

function outputNumber () {
    const lineNumbers = [];
    for(let i = 0; i < 10; i++) {
        const number = getRandomNumber(minRange, maxRange);
        lineNumbers.push(number);
    }
    return lineNumbers;
}

function arithmeticProgression (){
    const progression = outputNumber();
    const hidenElement = randomIndex(...progression);
    const corectAnswer = progression[hidenElement].toString();
    progression[hidenElement] = points;
    const question = hidenElement;

    return[question, corectAnswer]
}

export default function startProgression () {
    outputText(introductoryText, arithmeticProgression)
}
