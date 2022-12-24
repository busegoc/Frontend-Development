let sayi = Math.floor(Math.random()*6);
let sayi2 = Math.floor(Math.random()*6);
let zar = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let win = document.querySelector('.win')
img1.src = zar[sayi]
img2.src = zar[sayi2]
if(sayi>sayi2){
  win.innerHTML = `Player 1 Wins!`
}
else if(sayi<sayi2){
  win.innerHTML =`Player 2 Wins!`
}
else{
  win.innerHTML =`There is no winner`
}
