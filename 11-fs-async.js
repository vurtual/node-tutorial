const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf-8', (error, result) => {
    if (error) {
        console.error(error)
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.error(error)
            return
        }
        const second = result;
        writeFile(
            './content/fourth.txt',
            `result ${first}, ${second}\n`,
            { flag: 'a' },
            (error, result) => {
                if (error) {
                    console.error(error)
                    return
                }
            }

        )
        readFile('./content/fourth.txt', 'utf-8', (error, result) => {
            if (error) {
                console.error(error)
                return
            }
            const fourth = result

            console.log(fourth)
        })
    })
} )