let pac_x = 6
let pac_y = 3

let coin_x1 = parseInt(1+ Math.random()*9)
let coin_y1 = parseInt(1+ Math.random()*9)

let coin_x2 = parseInt(1+ Math.random()*9)
let coin_y2 = parseInt(1+ Math.random()*9)

let coin_x3 = parseInt(1+ Math.random()*9)
let coin_y3 = parseInt(1+ Math.random()*9)

let bomb_x = parseInt(1+ Math.random()*9)
let bomb_y = parseInt(1+ Math.random()*9)

let score = 30

let coin_state1 = true
let coin_state2 = true
let coin_state3 = true
let bomb_state = true

function action () {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp":    pac_y-- ; break
        case "ArrowRight": pac_x++ ; break
        case "ArrowDown":  pac_y++ ; break
        case "ArrowLeft":  pac_x-- ; break
    }
    pac_x = Math.max(1, Math.min(pac_x, 10));
    pac_y = Math.max(1, Math.min(pac_y, 10));

    if (pac_x== coin_x1 && pac_y==coin_y1) {
        score +=10
        coin_state1 = false
        console.log(coin_state1)
    } else if (pac_x== coin_x2 && pac_y==coin_y2) {
        score +=10
        coin_state2 = false

    } else if (pac_x== coin_x3 && pac_y==coin_y3) {
        score +=10
        coin_state3 = false 
    }
    else if(pac_x==bomb_x && pac_y==bomb_y) {
        score -=10
        bomb_state = false
    }
    renderMap()
}


function renderMap() {
    gameMap.innerHTML = ``
    for(let y=1; y<=10; y++) {
        for(let x=1; x<=10; x++) {
            if (x==pac_x && y==pac_y) {
                gameMap.innerHTML += 
                   `<div class="pac"></div>`
            } else if(coin_state1 && x==coin_x1 && y==coin_y1) {
                gameMap.innerHTML += 
                   `<div class="coin"></div>`
            } else if(coin_state2 && x==coin_x2 && y==coin_y2) {
                gameMap.innerHTML += 
                   `<div class="coin"></div>`
            } else if(coin_state3 && x==coin_x3 && y==coin_y3) {
                gameMap.innerHTML += 
                   `<div class="coin"></div>`
            } else if(bomb_state && x==bomb_x && y==bomb_y) {
                gameMap.innerHTML += 
                   `<div class="bomb"></div>`
            } else {
                gameMap.innerHTML += 
                   `<div class=""></div>`
            }            
        }        
    }
    gameScore.innerHTML = `Score: ${score}`
}


renderMap()



// HW 1 add limits to pacman movement
// HW 2 add bomb, add hp(health points) 0... 100
// HW 3 add coin_state, bomb_state - false/true < movement
//          coin_state, bomb_state >renderMap()