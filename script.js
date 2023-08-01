const game = () => {
    let fScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");

        });
    };

    //Play Match//
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const fatimaHand = document.querySelector(".fatima-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
          hand.addEventListener("animationend", function() {
            this.style.animation = "";
          });
        });
        //Computer Options//
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //computer choice//
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                 //Here is where we call compare hands//
                 compareHands(this.textContent, computerChoice);
                //Update Images
          fatimaHand.src = `./assets/${this.textContent}.jpg`;
          computerHand.src = `./assets/${computerChoice}.jpg`;
            }, 2000);
        //Animation
        fatimaHand.style.animation = "shakeFatima 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
                 
            });
            });
        };

        const updateScore = () => {
          const fatimaScore = document.querySelector(".fatima-score p");
          const computerScore = document.querySelector(".computer-score p");
          fatimaScore.textContent = fScore;
          computerScore.textContent = cScore;
        };
      
        const compareHands = (fatimaChoice, computerChoice) => {
            //Update Text
            const winner = document.querySelector(".winner");
            //Checking for a tie
            if (fatimaChoice === computerChoice) {
              winner.textContent = "It is a tie";
              return;
            }
        //Check for Rock
    if (fatimaChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Fatima Wins";
          fScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (fatimaChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Fatima Wins";
          fScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (fatimaChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Fatima Wins";
          fScore++;
          updateScore();
          return;
        }
      }
    };
   //Its call all the inner function//
    startGame();
    playMatch();
};

//start the Game function//
game();