var choices =["rock","paper","scissors"];
let humanScore=0;
let computerScore=0;
const body=document.body;
const buttons=document.querySelectorAll(".button")
const restButton=document.querySelector("#rest");
const player=document.querySelector("#playerScore")
const computer=document.querySelector("#computerScore")
const result=document.querySelector("#result") 
const game=document.querySelector("#gameStat")
const playerSelection=document.querySelector("#playerSelection")
const computerSelection=document.querySelector("#computerSelection")

function getComputerChoice(){//generate random choice for the computer
   return choices[Math.floor(Math.random()*3)];
}
buttons.forEach((button)=>{
    button.addEventListener("click", e =>{
        playGame(button.id);
        if(humanScore===5 || computerScore===5){
            button.removeEventListener("click", e => {
                playGame(button.id);
            });
            result.textContent="Game over"
            if(computerScore>humanScore){
                game.textContent="You lost!!!"
            }
            else if(computerScore<humanScore){
                game.textContent="You won!!!"
            }
            buttons.forEach((button)=>{
                button.disabled=true;
            });
        }
    });
});

restButton.addEventListener("click",()=>{
    //rest everything to initial value
    result.textContent="Select your weapon"
    humanScore=0;
    computerScore=0;
    game.textContent=""
    playerSelection.textContent=""
    computerSelection.textContent=""
    player.textContent="You: 0"
    computer.textContent="Computer: 0"
    buttons.forEach((button)=>{
        button.disabled=false;
    }); 
})

function playRound(computer,human){
    if(computer==human){
       result.textContent="It is a tie";
    }
    else if((computer=="rock"&&human=="paper")||(computer=="paper" && human=="scissors")||(computer=="scissors"&&human=="rock")){
        result.textContent="You win";
        humanScore++;
    }
    else{
        result.textContent="Computer wins";
        computerScore++;
    }
}
function playGame(human){
        let computerChoice=getComputerChoice();
        printChoices(human,computerChoice);  //print choices to the screen
        playRound(computerChoice,human); 
        player.textContent="You:"+humanScore;
        computer.textContent="Computer:"+computerScore;
}
function printChoices(human,computerChoice){
    if(human=="rock"){
         playerSelection.textContent="🗿";
    }
    else if(human=="paper"){
        playerSelection.textContent="📜";
    }
    else if(human=="scissors"){
        playerSelection.textContent="✂️";
    }
    if(computerChoice=="rock"){
        computerSelection.textContent="🗿";
   }
   else if(computerChoice=="paper"){
       computerSelection.textContent="📜";
   }
   else if(computerChoice=="scissors"){
       computerSelection.textContent="✂️";
   }

}


