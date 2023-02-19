
let url = 'http://....';
let test;


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        test = url
        if (test) {
            resolve(test)
        }
        reject(test)
    }, 1000);
})

promise.then((data)=> console.log(data))