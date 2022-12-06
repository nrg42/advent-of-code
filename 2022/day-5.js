import * as fs from "node:fs";

let [stackInput, procedure] = fs.readFileSync('./day-5-input.txt', 'utf-8').split('\n\n')
stackInput = stackInput.split('\n')

let moves = procedure.split('\n').map(line => {
    line = line.split(' ')
    return [line[1], line[3], line[5]].map(n => parseInt(n))
})

function createStacks() {
    const stack = {}
    for (let col = 0; col < stackInput[0].length; col++) {
        let n = stackInput[stackInput.length-1][col]
        if (n != ' ') {
            stack[n] = []
            for (let row = stackInput.length-2; row >= 0; row--) {
                let item = stackInput[row].charAt(col)
                if (item == ' ') break
                else {
                    stack[n].push(item)
                }
            }
        }
    }
    return stack
}

function topCrates(stack) {
    const topCrates = []
    for (let i = 1; i <= Object.keys(stack).length; i++) {
        if (stack[i].length > 0) {
            topCrates.push(stack[i][stack[i].length-1])
        }
    }
    return topCrates.join('')
}

function part1() {
    const stack = createStacks()

    for (let x of moves) {
        let [move, from, to] = x
        while (move > 0) {
            let item = stack[from].pop()
            stack[to].push(item)
            move--
        }
    }

    return topCrates(stack)
}

function part2() {
    const stack = createStacks()

    for (let x of moves) {
        let [move, from, to] = x
        const movedCrates = []

        while (move > 0) {
            let item = stack[from].pop()
            movedCrates.push(item)
            move--
        }

        while(movedCrates.length > 0) {
            stack[to].push(movedCrates.pop())
        }
    }
    return topCrates(stack)
}

console.log(`part 1 answer: ${part1()}`)
console.log(`part 2 answer: ${part2()}`)
