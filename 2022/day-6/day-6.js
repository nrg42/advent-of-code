import * as fs from "node:fs";

let data = fs.readFileSync('./input.txt', 'utf-8')

function part1() {
    for (let i = 0; i < data.length; i++) {
        let set = new Set([data[i], data[i+1], data[i+2], data[i+3]])
        if (set.size == 4) {
            return i + 4
            break
        }
    }
}

function part2() {
    for (let i = 0; i < data.length; i++) {
        let set = new Set()
        for (let k = 0; k < 14; k++) {
            set.add(data[i+k])
        }

        if (set.size == 14) {
            return i + 14
            break
        }
    }
}

console.log(`part 1 answer: ${part1()}`)
console.log(`part 2 answer: ${part2()}`)