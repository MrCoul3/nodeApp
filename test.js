const graph ={
    '1': ['2abc', '4ghi', '*', '3def'],
    '2abc': ['1', '3def', '5jkl', '0'],
    '3edf': ['2abc', '6mno', '1', '#'],
    '4ghi': ['1', '5jkl', '7pqrs', '6mno',],
    '5jkl': ['2abc', '4ghi', '6mno', '8tuv'],
    '6mno': ['3def', '5jkl', '9wxyz','4ghi'],
    '7pqrs': ['4ghi', '*', '8tuv', '9wxyz'],
    '8tuv': ['5jkl', '7pqrs', '0', '9wxyz'],
    '9wxyz': ['6mno', '#', '8tuv', '7pqrs'],
    '*': ['7pqrs', '0', '1', '#'],
    '0': ['8tuv', '*', '#', '2abc'],
    '#': ['0', '9wxyz', '*', '3def'],
}

function mobileRemote(text) {
    let current = '2abc';
    let count = 0;
    let currentArr = graph[current];
    function getKey(sym) {
        return Object.keys(graph).find((key) => key.includes(sym))
    }

    text.split('').forEach((sym, i, arr) => {
        if (current.includes(sym)) {
            console.log('--------includes---------')
            console.log('current: ', current)
            console.log('sym: ', sym)
            count += current.indexOf(sym) + 2;
            console.log('count: ', count)
        } else {
            console.log('-------not includes------')
            console.log(graph[getKey(sym)])
           let test = graph[getKey(sym)].find((item) => {
               // console.log(item.includes(sym))
           })
            if (graph[getKey(sym)].find((item) => item.includes(sym))) {
                current = graph[getKey(sym)].find((item) => item.includes(sym));
                console.log('sym: ', sym)
                console.log('current: ', current)
                count += current.indexOf(sym) + 3
                console.log('count: ', count)
            } else {
                console.log('current: ', current)
                console.log('sym: ', sym)
            }

        }
    })
    console.log('-------------------------TOTAL')
    console.log(count)
}
mobileRemote('cfm')
// console.log(mobileRemote('c')); // 6
// console.log(mobileRemote('yandex')); // 34