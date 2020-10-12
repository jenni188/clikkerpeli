
//moduulien functiot
let modal = document.getElementById('modal');
    
    function openModal(){    
        modal.style.display = "block";
    }

    function hideModalOne(){
        modal.style.display = "none";
    }

    function hideModalTwo(){
        modal.style.display = "none";
    }

    function alertStart(){
        alert("That's what I thought :)");
    }

    function startFunc(){
        hideModalTwo();
        alertStart("That's what I thought :D");
    }

//pelin kolikko fuctiot

var coins =0;
var coinsPerS = 0;
var coinsPC =1;

function gainCoins(){
    coins += coinsPC;
    renderCoins();
}

function renderCoins(){
    document.getElementById("game-h2").innerHTML = "Coins    " + coins;
}

setInterval(function(){
    coins = coins + coinsPerS;
    renderCoins();
}, 1000)

function autoClick(){
    if (coins >= 50){
        coinsPerS += 2;
        coins -= 50;
    
    } 
    else{
        alert("you don't have enough coins!")
    }
    renderCoinsPerS();
}

function renderCoinsPerS(){
    document.getElementById("game-h3").innerHTML = "Coins per/s " + coinsPerS;
}

//osto functio

function buyfunc(cost, id){
    if (cost > coins){
        alert("you don't have enough coins!")
        return
    }
    coins = coins - cost
    document.getElementById(id).style.display = "block"
}