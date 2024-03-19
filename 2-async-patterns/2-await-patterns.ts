import { readFile, writeFile } from "fs/promises";
const start = async() => {
    try{
        const  first = await readFile('./content/first.txt', 'utf-8');
        const  second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/result-min-grenade.txt', `This is awesome: ${first}, ${second}`);
        console.log(first,second);
    }
    catch(error) {
        console.log(error);
    }
}
start()

// import util from 'util';

// const readFilePromise = util.promisify(readFile);

// const writeFilePromise = util.promisify(writeFile);

// const start = async() => {
//     try{
//         const  first = await readFilePromise('./content/first.txt', 'utf-8');
//         const  second = await readFilePromise('./content/second.txt', 'utf-8');
//         await writeFilePromise('./content/result-min-grenade.txt', `This is awesome: ${first}, ${second}`);
//         console.log(first,second);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }


//getText('./content/first.txt').then(result => console.log(result)).catch((err) => console.log(err))

// function getText (path: string){
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf-8', (err,data) =>{
//             if (err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }