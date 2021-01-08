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
}

main()