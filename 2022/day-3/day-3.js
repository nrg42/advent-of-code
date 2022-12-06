import * as fs from "node:fs";

const sacks = fs.readFileSync('./day-3-input.txt', 'utf-8').trim().split('\n')

const part1 = () => {
    const commonTypes = []

    for (let sack of sacks) {
        let a = sack.substring(0, sack.length/2)
        let b = sack.substring(sack.length/2)

        for (let c of a) {
            if (b.indexOf(c) != -1) {
                commonTypes.push(c)
                break;
            }
        }
    }

    return commonTypes.reduce((sum, c) => sum + c.charCodeAt() - (c == c.toLowerCase() ? 96 : 38), 0)
}

const part2 = () => {
    const commonTypes = []

    for (let i = 0; i < sacks.length; i += 3) {
        for (let c of sacks[i]) {
            if (sacks[i+1].includes(c) && sacks[i+2].includes(c)) {
                commonTypes.push(c)
                break;
            }
        }
    }

    return commonTypes.reduce((sum, c) => sum + c.charCodeAt() - (c == c.toLowerCase() ? 96 : 38), 0)
}


console.log(`part 1 answer: ${part1()}`)
console.log(`part 2 answer: ${part2()}`)
