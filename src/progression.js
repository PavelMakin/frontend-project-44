import getRandomNumber from './randomNumber.js';
import outputText from './index.js';

const introductoryText = 'What number is missing in the progression?';
const minStart = 2;
const maxStart = 10;
const minIndex = 0;
const maxIndex = 8;
const minStep = 2;
const maxStep = 5;
const points = '..';

function randomIndex() {
  return getRandomNumber(minIndex, maxIndex);
}

function outputNumber(start, step) {
  const lineNumbers = [];
  for (let i = 1; i < 10; i += 1) {
    lineNumbers.push(start * step * i);
  }
  return lineNumbers;
}

function arithmeticProgression() {
  const startProgress = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const progression = outputNumber(startProgress, step);
  const hidenElement = randomIndex(progression);
  const corectAnswer = String(progression[hidenElement]);
  progression[hidenElement] = points;
  const question = progression.join(' ');

  return [question, corectAnswer];
}

export default function startProgression() {
  outputText(introductoryText, arithmeticProgression);
}
