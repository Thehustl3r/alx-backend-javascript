const fs = require('fs');
const child_process = require('child_process');


const countStudents = (file) => {
    try {
        const csv_file = child_process.execFileSync('cat', [file], {encoding: 'utf-8'});
        const lines = csv_file.split('\n');

        const csv_data = lines.filter(line => line.trim() !== '');
        csv_data.shift()

        console.log(`Number of students: ${csv_data.length}`);
        const csv_data_object = {}
        csv_data.forEach((data) =>{
            splited_data = data.split(',');
            field = splited_data.pop();
            first_name = splited_data.shift();

            csv_data_object[field] = csv_data_object[field] || []
            csv_data_object[field].push(first_name)
            
        })
        for (const key in csv_data_object){
            console.log(`Number of students in ${key}: ${csv_data_object[key].length}. List: ${csv_data_object[key]}`)
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
    
}

module.exports = countStudents;


// try {
//     const csv = require('csv-parser')

//     const results = [];
//     const test_result =[];
//     fs.createReadStream('database.csv')
//         .pipe(csv())
//         .on('data', (row) => {
//             test_result.push(row)
            
//             if(!Object.values(row).every((field) => field === ' ')) {
//                 results.push(row);
//             }
//             else{
//                 console.log("oops teh");
//             }
//         })
//         .on('end', () => {
//             // console.log(test_result);
//             const studentCounts = {};
//             const firstNames = {};

//             results.forEach(student => {
//                 for (const field in student){
//                     studentCounts[field] = (studentCounts[field] || 0) + 1;
//                     firstNames[field] = firstNames[field] || [];
//                     firstNames[field].push(student['First Name']);
//                 }
//             });
//             const totalStudents = Object.values(studentCounts).reduce((sum, count) => sum + count, 0);
//             console.log(`Number of students: ${totalStudents}`);

//             for (const field in studentCounts) {
//                 console.log(`Number of students in ${field}: ${studentCounts[field]}. List: ${firstNames[field].join(', ')}`);

//             }

//         });
// } catch (error) {
//     throw new Error(error);

//     throw new Error('Cannot load the database');
// }