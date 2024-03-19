import { readFile, writeFile} from "fs";

console.log('Start')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first :string = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second :string = result
    writeFile(
      './content/result-async.txt',
      `Appended: Here is the result : ${first}, ${second}`,
      {flag : 'a'},
      (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done with this task')
      }
    )
  })
})
console.log('Starting next task')