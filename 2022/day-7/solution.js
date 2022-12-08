import * as fs from "node:fs";

let input = fs.readFileSync('./input.txt', 'utf-8').split('\n')
let dirSize = {}

function part1() {
    let curDir = []
    input.forEach(line => {
        line = line.split(' ')
        if (line[0] == '$') {
            if (line[1] == 'cd') {
                if (line[2] == '..') curDir.pop()
                else {
                    curDir.push(line[2])
                    if (!dirSize[curDir.join('-')]) dirSize[curDir.join('-')] = 0
                }
            }
        }
        else if (line[0] != 'dir') {
            let fileSize = parseInt(line[0])
            let path = ''
            for (let k = 0; k < curDir.length; k++) {
                path += `${k == 0 ? '' : '-'}${curDir[k]}`
                dirSize[path] += fileSize
            }
        }
    })
    return Object.values(dirSize).reduce((sum, fileSize) => (fileSize <= 100000) ? sum + fileSize : sum)
}

function part2() {
    let freeSpace = 70000000 - dirSize['/']
    let requiredSpace = 30000000 - freeSpace
    let sizes = Object.values(dirSize).sort((a, b) => a - b)
    return sizes.find(size => size >= requiredSpace)
}

console.log(`part 1 answer: ${part1()}`)
console.log(`part 2 answer: ${part2()}`)