import path from 'path';

console.log(path.sep)

const filePath : string = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base : string = path.basename(filePath)
console.log(base)

const absolute : string = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)