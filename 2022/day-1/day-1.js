import * as fs from "node:fs";
const input = fs.readFileSync('./day-1-input.txt', 'utf-8').trim().split('\n\n')

const part1 = (input) => {
    let max = 0

    for (let elf of input) {
        let curElfTotal = elf.split('\n').reduce((total,val) => total + parseInt(val), 0)
        if (curElfTotal > max) max = curElfTotal   
    }

    return max
}


const part2 = (input) => {
    const maxList = [0,0,0]
    
    for (let elf of input) {
        let currElfTotal = elf.split('\n').reduce((total,val) => total + parseInt(val), 0)
        if (currElfTotal > maxList[0]) {
            maxList[0] = currElfTotal
            maxList.sort((a,b) => a - b)
        }
    }

    return maxList.reduce((total, curVal) => total + curVal)
}

console.log(`part 1 answer: ${part1(input)}`)
console.log(`part 2 answer: ${part2(input)}`)