import { readFileSync, writeFileSync } from "fs";

console.log('Start');

const first :string = readFileSync('./content/first.txt','utf-8');
const second :string = readFileSync('./content/second.txt','utf-8');

writeFileSync('./content/result-sync.txt', `Appended: Here is the result : ${first}, ${second}`,{flag : 'a'});

console.log('Done with this task');
console.log('Starting next task');