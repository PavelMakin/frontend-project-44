import getRandomNumber from './randomNumber.js';
import outputText from './index.js';

const introductoryText = 'Answer "yes" if the number is even, otherwise answer "no".';

const minRange = 1;
const maxRange = 100;

function outputGenerator() {
  const number = getRandomNumber(minRange, maxRange);
  const parity = (num) => (num % 2 === 0);
  const corectAnswer = parity(number) ? 'yes' : 'no';
  const question = (number).toString();

  return [question, corectAnswer];
}

export default function derivationCorrectAnswer() {
  outputText(introductoryText, outputGenerator);
}
