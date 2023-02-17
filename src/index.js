import readlineSync from 'readline-sync';

const stepCount = 3;

export default function outputText(introductoryText, outputGenerator) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(introductoryText);

  for (let i = 0; i < stepCount; i += 1) {
    const [question, corectAnswer] = outputGenerator();
    console.log(`Question: ${question}`);
    const userAnsver = readlineSync.question('Your answer?: ');
    if (corectAnswer !== userAnsver) {
      console.log(`'${userAnsver}' is wrong answer ;(. Corect answer was '${corectAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
