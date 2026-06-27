let userscore=0;
let computerscore=0;

let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")



const drawgame = () => {
    console.log("draw the match");
    msg.innerText = `draw game  ${userchoice} draw ${computerchoice}`;
    msg.style.backgroundColor = "yellow";

}
const palygame = (userchoice) => {
      console.log("user choice =" , userchoice);
      const computerchoice = computergame();
      console.log("computer choice =" , computerchoice);

      if (userchoice === computerchoice){
         drawgame();     
      }else {
        let userwin = true;
        if (userchoice === "rock"){
            userwin = computerchoice === "paper" ? false :  true;
        }else if (userchoice === "paper"){
            userwin = computerchoice === "scissor" ? false : true;
        }else {
           userwin = computerchoice === "rock" ? false : true;
        }

        showwinner(userwin , userchoice ,computerchoice);
      }

};

const computergame = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randomidx = Math.floor(Math.random() * 3); 
    return options[randomidx];                                 // math.floor
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
    const userchoice = choice.getAttribute("id");
     palygame(userchoice);
    });
});


const showwinner = (userwin , userchoice , computerchoice) =>{
    if (userwin){
        console.log("you win");
        msg.innerText = `you win ! ${userchoice} beats ${computerchoice}`;    
        msg.style.backgroundColor = "green";

    }
    else {
        console.log("you loss");
        msg.innerText = `you loss ! ${userchoice} loss ${computerchoice}`;
        msg.style.backgroundColor = "red";


    }
}