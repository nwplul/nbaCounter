let playerName = prompt('SHEEESH, qual seu nome big fella?')
let points = 0
let threepoint = 3
let twopoint = 2
let freethrow = 1
let decreasePoints = 5

function threePoint() {
    points += threepoint
    console.log('WAAAAY DOWNTOWN BAAANG...', points)
}

function twoPoint() {
    points += twopoint
    console.log('Layoup god...', points)
}

function freeThrow() {
    points += freethrow
    console.log('Easy point', points)
}

function removePoints() {
    points -= decreasePoints
    console.log('Man, wtf?', points)
}

function playerStats() {
    alert(`Nome do jogador: ${playerName}\n\n Quantidade de pontos: ${points}`)
}

function quitGame() {
    return false
}

function playerMenu() {
    validation = true

    while (validation) {
        let choises = prompt('Escolha uma das opções:\n\n 1-Cesta de três\n\n 2- Dois pontos\n\n 3- Falta\n\n 4- Falta técnica\n\n 5- Status do jogador\n\n 6- Sair de quadra')

        switch (choises) {
            case '1':
                threePoint()
                break
            case '2':
                twoPoint()
                break
            case '3':
                freeThrow()
                break
            case '4':
                if (points <= 0) {
                    console.log(points)
                    break
                }
                removePoints()
                break
            case '5':
                playerStats()
                break
            case '6':
                validation = quitGame()
                console.log(`Pontuação final: ${points} pontos, Parábens ${playerName} você está no NBA Draft`)
                break
        }
    }
}

playerMenu()