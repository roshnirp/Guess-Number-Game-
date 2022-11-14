let x;
let secretNumber;
let score= 100;
let chance= 5;
let highScore=0;
let gameStatus=document.querySelector(".status");
let scoreDisplay =document.querySelector(".score");
let chanceDisplay=document.querySelector(".chance");
const generateSecretNumber = () =>
{
 x = Math.random()*10;
  secretNumber= Math.trunc(x);
console.log(secretNumber);
}
const reset = () =>
{
  generateSecretNumber();
  chance = 5;
  score = 100;
  gameStatus.textContent="";
  scoreDisplay.textContent=`Score : ${score}`;
  chanceDisplay.textContent=`Chance Left : ${chance}`;
  document.querySelector(".input").value=``;
  document.querySelector(".guess").classList.remove("hidden");

}


generateSecretNumber();

document.querySelector(".guess").addEventListener("click", () => 
{
    let userInput = document.querySelector(".input").value;
    chance -=1;
    console.log(userInput);
    //console.log(event);
    if(chance <=0)
    {
        gameStatus.textContent=`Your chance are exceeded, you LOST!`;
        gameStatus.style.color=`red`;
        document.querySelector(".guess").classList.add("hidden");
    }
    else{

    if(userInput == secretNumber)
    {
        gameStatus.textContent=`You Won`;
        gameStatus.style.color="green";
        console.log("you won");
        document.querySelector(".guess").classList.add("hidden");
        if(score > highScore)
        {
            highScore = score;
            document.querySelector(".score").textContent=`High Score: ${highScore}`;
        }
    }
   else if(userInput > secretNumber)
    {
        gameStatus.textContent=`Too High`;
        score -= 20;
        console.log("to high");
        scoreDisplay.textContent=`Score :${score}`;
        chanceDisplay.textContent=`Chance Left :${chance}`;
        document.querySelector(".input").value=``;
    }
    else if (userInput < secretNumber)
    {    gameStatus.textContent=`Too low`;
          //document.querySelector(".status").textContent=`Too High`;
        score -=20;
       
        scoreDisplay.textContent=`Score : ${score}`;
        chanceDisplay.textContent=`Chance Left :${chance}`;
        console.log("to low");
        document.querySelector(".input").value=``;
    }
}
});
document.querySelector(".reset").addEventListener("click", () => { 
    reset();
})


