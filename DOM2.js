let s,r,res; 
    let score=JSON.parse(localStorage.getItem('Score')) || { win: 0, lose: 0, tie: 0 };
    function pickcomputerMove(){
      r = Math.random();
      if(r >= 0 && r < 1/3){
        s ='Rock';
      }
      else if(r >= 1/3 && r < 2/3){
        s = 'Paper';
      }
      else{
        s = 'Scissors';
      }
    }
    
    updateScore();

    function result(computermove){
      pickcomputerMove();
      if(computermove ==='Scissors'){
        if(s === 'Rock'){
        res ='You lose';
      }
      else if(s === 'Paper'){
        res ='You win';
      }
      else if(s === 'Scissors'){
        res ='Tie';
      }
      }
      else if(computermove==='Paper')
      {
        if(s === 'Rock'){
        res ='You win';
      }
      else if(s === 'Paper'){
        res ='Tie';
      }
      else if(s === 'Scissors'){
        res ='You lose';
      }
      }
      else if(computermove==='Rock'){
        if(s === 'Rock'){
        res ='Tie';
      }
      else if(s === 'Paper'){
        res ='You lose';
      }
      else if(s === 'Scissors'){
        res ='You win';
      }
      }
      if(res==='You win'){
       score.win+=1;
      }
      else if(res==='You lose'){
       score.lose+=1;
      }
      else if(res==='Tie'){
        score.tie+=1;
      }
      localStorage.setItem('Score',JSON.stringify(score));

      document.querySelector('.result').innerHTML=res;
      document.querySelector('.moves').innerHTML=`You <img class="move-img" src="images/${computermove}-emoji.png"> <img class="move-img" src="images/${s}-emoji.png"> Computer`;
      updateScore();
    }
    function Resetscore(){
      score = { win: 0, lose: 0, tie: 0 };
      localStorage.removeItem('Score');
      updateScore();
    }
    function updateScore(){
      document.querySelector('.score').innerHTML='Wins : '+score.win+' Loses : '+score.lose+' Ties : '+score.tie;
    }
    let autoplaying =false;
    let id;
    function autoplay(){
      if(!autoplaying){
        id=setInterval(() =>{
          pickcomputerMove();
          let computermove=s;
          result(computermove);
        }, 500);
        autoplaying=true;
      }
      else{
        clearInterval(id);
        autoplaying = false;
      }
    }
    const element3 = document.querySelector('.reset');
    element3.addEventListener('click',
    ()=>{
      Resetscore();
    });
    const element4 = document.querySelector('.auto');
    element4.addEventListener('click',
    ()=>{
      autoplay();
    });
    document.querySelector('.rock').addEventListener('click',
    ()=>{
      result('Rock');
    });
    document.querySelector('.paper').addEventListener('click',
    ()=>{
      result('Paper');
    });
    document.querySelector('.Scissors').addEventListener('click',
    ()=>{
      result('Scissors');
    });
      document.body.addEventListener('keydown',
    (event) => {
      if (event.key === 'r') result('Rock');
      else if (event.key === 'p') result('Paper');
      else if (event.key === 's') result('Scissors');
      else if (event.key === 'a') autoplay();
      else if (event.key === ' ') Resetscore();
    });
    /*document.body.addEventListener('keydown',(event)=>{
      console.log(event.key);
    });*/

