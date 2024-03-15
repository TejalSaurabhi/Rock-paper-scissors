
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0, //setting default values
  losses: 0,
  ties: 0
  }

updateScore();

/*if(!score){//score===null. null is a falsy value
  score = {
  wins: 0,
  losses: 0,
  ties: 0
  }
}*/

function game(move){
  let result = '';
  
  const compMove = pickCompMove();

  if(move=='scissors'){
    if(compMove==='scissors')
    result='tie';
    else if(compMove=='rock')
    result='You lose';
    else
    result='You win';
  }

  else if(move=='paper'){
    if(compMove==='paper')
    result='tie';
    else if(compMove=='scissors')
    result='You lose';
    else
    result='You win';
  }

  if(move=='rock'){
    if(compMove==='rock')
    result='tie';
    else if(compMove=='paper')
    result='You lose';
    else
    result='You win';
  }

if(result==='You win')
  score.wins++;
else if(result ==='You lose')
  score.losses++;
else
  score.ties++;

localStorage.setItem('score', JSON.stringify(score));

updateScore();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You <img src="images/${move}-emoji.png" class="move-icon">
<img src="images/${compMove}-emoji.png" class="move-icon">
Computer`;

}


function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

 function pickCompMove(){
  let compMove="";
  const randNum = Math.random();
  if(randNum<1/3)
  compMove= 'rock';

  else if(randNum<2/3)
  compMove= 'paper';

  else
  compMove= 'scissors';
  return compMove;
 }
