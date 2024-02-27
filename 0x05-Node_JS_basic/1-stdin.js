process.stdin.setEncoding('utf-8')
console.log("Welcome to Holberton School, what is your name?");
process.stdin.on('data', (data)=>{
    const input = data.trim();
    if (input) {
        console.log(`Your name is: ${input}`);
        process.stdout.write("This important software is now closing");
        process.exit()
    }
});
    

