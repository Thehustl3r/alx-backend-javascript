process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', ()=>{
  const name = process.stdin.read();
  if (name !== null){
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.on('exit',()=>{
      console.log('This important software is now closing');
    });

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Welcome to Holberton School, what is your name? ', (name) => {
//     console.log(`Your name is: ${name}`);
  
//     // Allow continued user input (optional)
//     const continueInput = () => {
//       readline.question('Enter anything to continue (or press Ctrl+C to exit): ', () => {
//         continueInput(); // Recursively call to allow further input
//       });
//     };
  
//     continueInput();
  
//     // Handle program termination gracefully
//     process.on('exit',()=>{
//       console.log('This important software is now closing.\n');
//     });;
//   });
  