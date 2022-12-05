const fs = require('fs')

interface scoresLookup {
    [key: string]: number
}

const rockPaperScissors = () => {
    let totalPoints:number = 0
    let scoresLookup: scoresLookup = { 'X': 0, 'Y': 3, 'Z': 6 }

    const resolveItem = (item1: string, item2: string) => {
        if (item1 === 'A') {
            if (item2 === 'X') {
                return 3
            }
            else if (item2 === 'Y') {
                return 1
            }
            else {
                return 2
            }
        }
        else if (item1 === 'B') {
            if (item2 === 'X') {
                return 1
            }
            else if (item2 === 'Y') {
                return 2
            }
            else {
                return 3
            }
        }
        else if (item1 === 'C') {
            if (item2 === 'X') {
                return 2
            }
            else if (item2 === 'Y') {
                return 3
            }
            else {
                return 1
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

    let gamesSplit:string[] = data.split(/\r?\n/)

    for (let i = 0; i < gamesSplit.length; i++) {
        let theirMove = gamesSplit[i][0]
        let yourMove = gamesSplit[i][2]
        let pointsFromChosenItem:number = resolveItem(theirMove, yourMove)
        totalPoints += pointsFromChosenItem
        let pointsFromMatchResult:number = scoresLookup[yourMove]
        totalPoints += pointsFromMatchResult
    }

    return totalPoints
}


rockPaperScissors()
export default rockPaperScissors