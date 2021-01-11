const fetch = require('node-fetch')

function add(a, b) {
    return new Promise((resolve, reject) => {
        if (a == 7) {
            reject('7 is a wicked number')
        }
        resolve(a+b)
    })
}

async function main() {
    let result = await add(7, 5).catch(error => 0)
    console.log(result+10)

    let response = await fetch('http://localhost:8000/issues.json')
    .then(R => R.text())
    .catch(E => 'poo')

    console.log(response)
}

main()