import * as fs from "node:fs";

let grid = fs.readFileSync('./test.txt', 'utf-8').split('\n')
for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').map(n => parseInt(n))
}

function part1() {
    let cnt = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {

            // check if tree is visible from outside grid
            let [visibleLeft, visibleRight, visibleTop, visibleBottom] = [true, true, true, true]

            let tree = grid[row][col]

            // check left
            for (let x = col - 1; x >= 0; x--) {
                if (tree <= grid[row][x]) visibleLeft = false
            }

            // check right
            for (let x = col + 1; x < grid[0].length; x++) {
                if (tree <= grid[row][x]) visibleRight = false
            }

            // check top
            for (let x = row - 1; x >= 0; x--) {
                if (tree <= grid[x][col]) visibleTop = false
            }

            // check bottom
            for (let x = row + 1; x < grid.length; x++) {
                if (tree <= grid[x][col]) visibleBottom = false
            }

            if (visibleLeft || visibleRight || visibleTop || visibleBottom) cnt++
        }
    }
    return cnt
}


function part2() {
    let max = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {

            // count trees visible from current position
            let [seenLeft, seenRight, seenTop, seenBottom] = [0,0,0,0]

            let tree = grid[row][col]

            // check left
            for (let x = col - 1; x >= 0; x--) {
                seenLeft++
                if (tree <= grid[row][x]) break
            }

            // check right
            for (let x = col + 1; x < grid[0].length; x++) {
                seenRight++
                if (tree <= grid[row][x]) break
            }

            // check top
            for (let x = row - 1; x >= 0; x--) {
                seenTop++
                if (tree <= grid[x][col]) break
            }

            // check bottom
            for (let x = row + 1; x < grid.length; x++) {
                seenBottom++
                if (tree <= grid[x][col]) break
            }

            let scenicScore = seenBottom * seenLeft * seenRight * seenTop
            if (scenicScore > max) max = scenicScore
        }
    }
    return max
}

console.log(`part 1 answer: ${part1()}`)
console.log(`part 2 answer: ${part2()}`)