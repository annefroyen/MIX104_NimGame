class Nim {



constructor(player1, player2, victory, total, maxGrab){
  this.player1 = player1;
  this.player2 = player2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrab;
}


}

//document.createElements
//document.appendChild

let player1 = "Bob";
let player2 = "Alice";
let victory = false;
let total = 33;
let maxGrab = 3;
let whosTurn = player1;
let currentPlayer = player1;

function startGame(){
  alert("spillet starter");


  new Nim(player1, player2, victory, total, maxGrab);

  let x = document.getElementsByClassName('btns')
  for(let i = 0; i<x.length;i++){
    x[i].addEventListener("click", function(){
      let currentPlayer = checkPlayer(this.name)
      if(kuler>=this.value && whosTurn === currentPlayer){
      decrementTotal(this.value)
      incrementPlayer(this.value, currentPlayer)
      changeTurn()
      }
      if(total === 33){
        alert("Gratulerer til " + currentPlayer.name)
      }
    });

}
}







function decrementTotal(antall){
  total = total - antall;
  document.getElementById('remaining').innerText = "Gjenværende: " + total + ""
}

function incrementPlayer(antall, player){
  player.kuler += antall-0
  if(player === player1){
    scoreP1.innerText = player.kuler + ""
  }else{
    scoreP2.innerText = player.kuler + ""
  }

}
function changeTurn(){
if(whosTurn=== player1){
  whosTurn = player2
} else{
  whosTurn = player1
}
}

function checkPlayer(name){
  let temp = player1
  if(name === 'player1'){
    temp = player1
  }else{
    temp = player2
  }
  return temp
}
