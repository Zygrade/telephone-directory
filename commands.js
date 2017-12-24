const program = require('commander');
const { prompt } = require('inquirer');
const { addInformation, removeInformation, updateInformation, listInformation, findInformation } = require('./index.js');

const questions = [
    {
      type : 'input',
      name : 'firstName',
      message : 'First Name'
    },
    {
      type : 'input',
      name : 'lastName',
      message : 'Last Name'
    },
    {
      type : 'input',
      name : 'phone',
      message : 'Phone Number'
    },
    {
      type : 'input',
      name : 'email',
      message : 'Email Address'
    },
    {
      type : 'input',
      name : 'address',
      message : 'Address'
    }
];

program
       .version('1.0.0')
       .description('Telephone Directory')

// addInformation
program
       .command('add')
       .alias('a')
       .description('Adds Information')
       .action( () => {
         prompt(questions).then(answers => { addInformation(answers) })
       });

// findInformation
program
       .command('find <name>')
       .alias('f')
       .description('Finds Information')
       .action(name => {
          findInformation(name)
          });

// updateInformation
program
      .command('update <_id>')
      .alias('u')
      .description('Updates Information')
      .action( _id => {
          prompt(questions).then(answers => { updateInformation(_id,answers)} )
        });

// removeInformation
program
       .command('remove <_id>')
       .alias('r')
       .description('Removes Information')
       .action(_id => {
          removeInformation(_id)
       });

// listInformation
program
       .command('list')
       .alias('l')
       .description('List Information')
       .action( () => {
         listInformation()
       });

program.parse(process.argv);
