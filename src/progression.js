import getRandomNumber from './randomNumber.js';
import outputText from './index.js';
import { question } from 'readline-sync';

const introductoryText = 'What number is missing in the progression?';
const minStart = 2;
const maxStart = 10;
const minIndex = 0;
const maxIndex = 9;
const minStep = 2;
const maxStep = 5;
const points = '..';

function randomIndex () {
    return getRandomNumber(minIndex, maxIndex);
}

function outputNumber (startProgression, step) {
    const lineNumbers = [];
    for(let i = 1; i < 9; i++) {
        lineNumbers.push(startProgression * step * i)
    }
    return lineNumbers;
}

function arithmeticProgression (){
    const startProgression = getRandomNumber(minStart, maxStart);
    const step = getRandomNumber(minStep, maxStep);
    const progression = outputNumber(startProgression, step);
    const hidenElement = randomIndex(progression);
    const corectAnswer = String(progression[hidenElement]);
    progression[hidenElement] = points;
    const question = progression.join(' ');

    return[question, corectAnswer]
}

export default function startProgression () {
    outputText(introductoryText, arithmeticProgression)
}
