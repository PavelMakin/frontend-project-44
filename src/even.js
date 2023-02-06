import consistentTypeSpecifierStyle from 'eslint-plugin-import/lib/rules/consistent-type-specifier-style.js';
import { getRandomNumber } from '../randomNumbers.js';

const introductoryText = 'Answer "yes" if the number is even, otherwise answer "no".';

const minRange = 1;
const maxRange = 100;



function outputGenerator() { 
    const number = getRandomNumber(minRange, maxRange);
    const parity = (number) => number % 2 === 0;
    const corectAnswer = parity(number) ? 'yes' : 'no';

    return (number, corectAnswer);
};

function parityAnswers () {

};