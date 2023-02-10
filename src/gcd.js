import getRandomNumber from './randomNumber.js';
import outputText from './index.js';
import { question } from 'readline-sync';

const introductoryText = 'Find the greatest common divisor of given numbers.'
const minRange = 1;
const maxRange = 100;

function searchNod (x, y) {
    if (y > x) return searchNod(y, x);
	if (!y) return x;
	return searchNod(y, x % y);
};

function corectConclusion () {
    const number1 = getRandomNumber(minRange, maxRange);
    const number2 = getRandomNumber(minRange, maxRange);
    const question = `${number1} ${number2}`;
    const corectAnswer = searchNod(number1, number2).toString();

    return [question, corectAnswer]
}

export default function startGcd() {
    outputText(introductoryText, corectConclusion)
}