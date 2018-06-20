var scores ,currScores, players,gamePlaying, prevScore;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gamePlaying)
     {
    var dice1 = Math.floor(Math.random()*6 + 1);
         
    var dice2 = Math.floor(Math.random()*6 + 1); 
         document.getElementById('dice-1').style.display = 'block';
         document.getElementById('dice-2').style.display = 'block';
         document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
         document.getElementById('dice-2').src = 'dice-'+dice2+'.png';
 /* var  diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src  = 'dice-'+dice+'.png';
      if(prevScore===6 && dice ===6)
          {
              scores[players] = 0;
             document.querySelector('#score-'+players).textContent  = scores[players]; 
          }*/
//    console.log(dice);
    if(dice1!==1 && dice2!==1)
        {
            currScores +=dice1 + dice2;
          document.querySelector('#current-'+players).textContent  = currScores;
            
        }
    else
        {
            changePlayer();
            
        }
//         prevScore = dice;
         
     }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying)
        {
 scores[players] += currScores;
    document.querySelector('#score-'+players).textContent  = scores[players];
    var input = document.querySelector('.final-score').value;
//            console.log(input);
            var winningScore ;
     if(input)
         {
              winningScore = input;
             
         }
            else {
                winningScore = 15;
            }
    if(scores[players]>=winningScore)
        {
     document.querySelector('#score-'+players).textContent  = 'winner!';  
    document.querySelector('.player-'+players+'-panel').classList.remove('active');  
    document.querySelector('.player-'+players+'-panel').classList.add('winner');       document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
         gamePlaying=false;   
        }
    else
        {
            changePlayer();
        }
        }
});
function changePlayer(){
    players ===0?players=1:players=0;
            currScores=0;
//    prevScore=0;
            document.querySelector('#current-0').textContent = 0;
            document.querySelector('#current-1').textContent = 0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    gamePlaying = true;
 scores =[0,0], currScores=0, players=0;   
//console.log(dice);
document.querySelector('#current-0').textContent = 0;
 document.querySelector('#score-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
// document.querySelector('#score-1').textContent = 0;
document.getElementById('score-1').textContent=0; //this isfaster than querySelector and when id is available, this can be used
//console.log(x);

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');  
    document.querySelector('.player-0-panel').classList.add('active');  
};

