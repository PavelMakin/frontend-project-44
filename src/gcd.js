import getRandomNumber from './randomNumber.js';
import outputText from './index.js';
import { question } from 'readline-sync';

const introductoryText = 'Find the greatest common divisor of given numbers.'
const minRange = 1;
const maxRange = 100;

const number1 = getRandomNumber(minRange, maxRange);
const number2 = getRandomNumber(minRange, maxRange);

function searchNod (number1, number2) {
    if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
};

function corectConclusion () {
    const question = `${number1} ${number2}`;
    const corectAnswer = searchNod();

    return [question, corectAnswer]
}

export default function startGcd() {
    outputText(introductoryText, corectConclusion)
}