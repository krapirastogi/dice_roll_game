'use strict';
//Selecting Elements
const score0El = document.querySelector('#score--0') ;
const score1El = document.getElementById('score--1') ;
const current0El = document.getElementById('current--0') ;
const current1El = document.getElementById('current--1') ;
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const diceEl=document.querySelector('.dice');
const btnNew= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
let scores,playing ,currentScore,activePlayer;

const switchPlayer=function(){
  document.getElementById(`current--${activePlayer}`).textContent=0;
  currentScore=0;
activePlayer=activePlayer===0?1:0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
};

const init=function(){
  score0El.textContent=0;
  score1El.textContent=0;
   current0El.textContent=0;
   current1El.textContent=0;
   
   diceEl.classList.add('hidden');
   player0El.classList.remove('player-winner');
   player1El.classList.remove('player-winner');
   player0El.classList.add('player-active');
   player1El.classList.remove('player-active');

   scores=[0,0];
   currentScore=0;
  activePlayer=0;
   playing =true;
};
init();
//Starting 
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

//rolling dice
btnRoll.addEventListener('click',function(){
  //generating a random dice roll
if(playing)
 { const num=Math.trunc(Math.random()*6+1);

  //display a dice
  
  diceEl.classList.remove('hidden');
  diceEl.src=`dice-${num}.png`;

  //check for rolled 1 :if true,switch to next player
  if(num !== 1){
// add num to currentscore
currentScore+=num;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  }
   
  else{
  switchPlayer();
  }
}
});
btnHold.addEventListener('click',function(){
  //add current score to the active player's score
  scores[activePlayer]+=currentScore;
  //score[1]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];


  //if player's scoreis>=100
  if(scores[activePlayer]>=100)
  {
    playing=false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
}
//finish the game else switch
  else{
    switchPlayer();
  }
});  
 btnNew.addEventListener('click',init()
 );