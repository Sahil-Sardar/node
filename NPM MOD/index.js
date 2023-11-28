import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.green.inverse.underline('success!'));
console.log(chalk.red.inverse.underline('danger!'));

const res = validator.isEmail('balleballe@gmail.com'); //=> true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))