import { readFile } from "fs";

console.log('Started first task');

//Check file path
readFile('../content/first.txt','utf-8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    console.log(result);
    console.log('Conpleted first task');
})
console.log('Starting next task');