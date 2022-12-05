const fs = require('fs')

interface scoresLookup {
    [key: string]: number
}

const rockPaperScissors = (dataPath: string) => {
    let totalPoints:number = 0
    let scoresLookup: scoresLookup = { 'A': 1, 'X': 1, 'B': 2, 'Y': 2, 'C': 3, 'Z': 3 }

    const resolveMatch = (item1: string, item2: string) => {
        if (item1 === 'A') {
            if (item2 === 'X') {
                return 3
            }
            else if (item2 === 'Y') {
                return 6
            }
            else {
                return 0
            }
        }
        else if (item1 === 'B') {
            if (item2 === 'X') {
                return 0
            }
            else if (item2 === 'Y') {
                return 3
            }
            else {
                return 6
            }
        }
        else if (item1 === 'C') {
            if (item2 === 'X') {
                return 6
            }
            else if (item2 === 'Y') {
                return 0
            }
            else {
                return 3
            }
        }
        else {
            return 0
        }

    }

    let data: string = ''
    try {
        data = fs.readFileSync(./input.txt, 'utf8');
    } catch (err) {
        console.error(err);
    }
    console.log(data)

    let gamesSplit:string[] = data.split(/\r?\n/)
    console.log(gamesSplit)

    for (let i = 0; i < gamesSplit.length; i++) {
        let theirMove = gamesSplit[i][0]
        let yourMove = gamesSplit[i][2]
        console.log(theirMove, yourMove)
        totalPoints += scoresLookup[yourMove]
        let pointsFromMatchResult:number = resolveMatch(theirMove, yourMove)
        console.log(pointsFromMatchResult)
        totalPoints += pointsFromMatchResult
        console.log(totalPoints)

    }

    return totalPoints
}


rockPaperScissors('input')
export default rockPaperScissors