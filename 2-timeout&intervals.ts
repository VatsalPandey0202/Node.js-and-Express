const intervals = setInterval(() => {
    console.log('Hello')
},1000)

setTimeout(() => {
    clearInterval(intervals); 
    console.log('Interval stopped');
}, 5000); 