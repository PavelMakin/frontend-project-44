import getRandomNumber from './randomNumber.js';
import outputText from './index.js';

const introductoryText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

function primeNumber(number) {
  const checkLimit = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= checkLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function outputPrime() {
  const number = getRandomNumber(minRange, maxRange);
  const question = number.toString();
  const corectAnswer = primeNumber(question) ? 'yes' : 'no';

  return [question, corectAnswer];
}

export default function startPrime() {
  outputText(introductoryText, outputPrime);
}
