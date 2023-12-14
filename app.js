// Scripting function for the whole application
const mainApp = () => {

    // Robot Options
    const robotOptions = ["rock", "paper", "scissors"];
    // Global variables
    let playerScore = 0;
    let robotScore = 0;

    // -----------------------------------------------------
    // StartPlaying
    const StartPlaying = () => {

        const startPlayingBtn = document.querySelector('.intro-zone button');
        const introZone = document.querySelector('.intro-zone');
        const competitionZone = document.querySelector('.competition');

        startPlayingBtn.addEventListener('click', () => {
            introZone.classList.add('hide-competition');
            competitionZone.classList.add('display-competition');
            console.log('clicking')
        })
    }

    // ----------------------------------------------------------------

    // PlayingRound
    const playRound = () => {
        const options = document.querySelectorAll(".options-selected button");
        const playerHand = document.querySelector(".player-hand");
        const robotHand = document.querySelector(".robot-hand");
        const hands = document.querySelectorAll(".hands-zone img");
        // this
        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        // ----------------------------------------------------------------
        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const robotIndex = Math.floor(Math.random() * 3);
                const robotChoice = robotOptions[robotIndex];

                setTimeout(() => {
                    // Call compare hands function
                    compareHands(this.textContent, robotChoice);
                    //Update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    robotHand.src = `./images/${robotChoice}.png`;
                }, 2000);

                // To add Animation
                playerHand.style.animation = "shakeHandPlayer 2s ease";
                robotHand.style.animation = "shakeHandRobot 2s ease";
            });
        });
    };

    // ----------------------------------------------------------------

    const updateScore = () => {
        const playerScoreZone = document.querySelector(".player-score-zone p");
        const robotScoreZone = document.querySelector(".robot-score-zone p");
        playerScoreZone.textContent = playerScore;
        robotScoreZone.textContent = robotScore;
    };

    // ----------------------------------------------------------------

    // To compare hands
    const compareHands = (playerChoice, robotChoice) => {

        // To Update Text
        const winner = document.querySelector(".winner-zone");
        // Checking for a draw
        if (playerChoice === robotChoice) {
            winner.textContent = "Draw!";
            return;
        }

        // Checking for a rock
        if (playerChoice === "rock") {
            if (robotChoice === "scissors") {
                winner.textContent = "Player Wins ;)";
                // winner.textContent = `${plaer} Wins ;)`;
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Robot Wins ;)";
                robotScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerChoice === "paper") {
            if (robotChoice === "scissors") {
                winner.textContent = "Robot Wins ;)";
                robotScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins ;)";
                playerScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (robotChoice === "rock") {
                winner.textContent = "Robot Wins ;)";
                robotScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins ;)";
                playerScore++;
                updateScore();
                return;
            }
        }
    };

    // ----------------------------------------------------------------

    StartPlaying();
    playRound();
}

// Calling mainApp to start playing
mainApp();