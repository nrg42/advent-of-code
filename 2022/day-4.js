import * as fs from "node:fs";

const input = fs.readFileSync('./day-4-input.txt', 'utf-8').trim().split('\n')
const pairs = input.map(pair => pair.split(','))

function part1() {
    let fullyContainedCount = 0
    
    for (let pair of pairs) {
        let [a1, a2] = pair[0].split('-').map(num => parseInt(num))
        let [b1, b2] = pair[1].split('-').map(num => parseInt(num))
        
        if ((b1 >= a1 && b2 <= a2) || (a1 >= b1 && a2 <= b2)) {
            fullyContainedCount++
        }
    }
    return fullyContainedCount
}


function part2() {
    let overlapCount = 0
    
    for (let pair of pairs) {
        let [a1, a2] = pair[0].split('-').map(num => parseInt(num))
        let [b1, b2] = pair[1].split('-').map(num => parseInt(num))
        
        if ((b1 >= a1 && b1 <= a2) || (b2 >= a1 && b2 <= a2)) {
            overlapCount++
        }
        else if ((a1 >= b1 && a1 <= b2) || (a2 >= b1 && a2 <= b2)) {
            overlapCount++
        }
    }
    return overlapCount
}


console.log(`part 1 answer: ${part1()}`)
console.log(`part 2 answer: ${part2()}`)