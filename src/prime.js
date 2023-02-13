import getRandomNumber from './randomNumber.js';
import outputText from './index.js';

const introductoryText = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const minRange = 1;
const maxRange = 100;


function primeNumber(number) {
    for (let i = 2; i <= 100; i++){
        for(let j = 0; j <= i; j++){
            if(j % i === 0){
                return false;
            }
        }
        return true;
    }
}

function outputPrime () {
    const number = getRandomNumber(minRange, maxRange);
    const question = number.toString();
    const corectAnswer = primeNumber(question) ? 'yes' : 'no';

    return[question, corectAnswer]
}

export default function startPrime() {
    outputText(introductoryText, startPrime);
}