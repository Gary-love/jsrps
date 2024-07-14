var choices =["rock","paper","scissors"];
let humanScore=0;
let computerScore=0;
function getComputerChoice(){
   return choices[Math.floor(Math.random()*3)];
}
function getHumanChoice(){
    let sign=prompt("Choose");
    if(choices.includes(sign.toLocaleLowerCase())){
        return sign.toLocaleLowerCase();
    }
    else{
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}
let counter=1;
function playRound(computer,human){
    if(computer==human){
        console.log("It's a tie");
    }
    else if((computer=="rock"&&human=="paper")||(computer=="paper" && human=="scissors")||(computer=="scissors"&&human=="rock")){
        console.log("You win");
        humanScore++;
    }
    else{
        console.log("Computer wins");
        computerScore++;
    }
}
function playGame(){
    while(counter<6){
        console.log(counter);
        let computer=getComputerChoice();
        let human=getHumanChoice();
        console.log("computer:"+computer);
        console.log("you:"+human);
        playRound(computer,human);
        counter++;
    }
    console.log("Computer:"+computerScore);
    console.log("You:"+humanScore);
    if(computerScore>humanScore){
        console.log("Computer wins");
    }
    else if(computerScore<humanScore){
        console.log("You win");
    }
    else{
        console.log("It's a tie");
    }
}
playGame();
