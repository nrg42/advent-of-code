import * as fs from "node:fs";

const input = fs.readFileSync('./day-2-input.txt', 'utf-8').trim().split('\n')
const rounds = input.map(round => round.split(' '))

const ties = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
}

const shapeScores = {
    'X': 1,
    'Y': 2,
    'Z': 3,
    // for part 2
    'A': 1,
    'B': 2,
    'C': 3,
}

const defeats = {
    'X': 'C',
    'Y': 'A',
    'Z': 'B',
    // for part 2
    'B': 'X',
    'A': 'Z',
    'C': 'Y',
}

// for part 2
const losesTo = {
    'A': 'Y',
    'B': 'Z',
    'C': 'X'
}

const part1 = (input) => {
    let totalScore = 0

    for (let round of rounds) {
        let outcomeScore = 0;
        let [u, w] = round
    
        if (ties[w] == u) {
            outcomeScore = 3
        } else if (defeats[w] == u) {
            outcomeScore = 6
        }

        const roundScore = shapeScores[w] + outcomeScore
        totalScore += roundScore
    }
    return totalScore
}


const part2 = (input) => {
    let totalScore = 0

    for (let round of rounds) {
        let outcomeScore = 0
        let shape = ''
        let [u, w] = round

        if (w == 'Y') {
            outcomeScore = 3
            shape = u  
        } else if (w == 'Z') {
            outcomeScore = 6
            shape = losesTo[u]
        } else if (w == 'X') {
            outcomeScore = 0
            shape = defeats[u]
        }

        const roundScore = outcomeScore + shapeScores[shape]
        totalScore += roundScore
    }
    return totalScore
}


console.log(`part 1 answer: ${part1(input)}`)
console.log(`part 2 answer: ${part2(input)}`)