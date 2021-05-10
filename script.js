
            
            let playerScore = 0;
            let computerScore = 0;
            let rounds = 0;

            const buttonsbox = document.querySelector('#buttonsbox');
            
            const playbtn = document.querySelector('#playbtn');
            const msgbox = document.querySelector('#msgbox');
            const computertally = document.querySelector('#computertally');
            const playertally = document.querySelector('#playertally');
            const roundtally = document.querySelector('#roundtally');

            playbtn.onclick = () => {
                buttonsbox.removeChild(playbtn);
                createRockBtn();
                createPaperBtn();
                createScissorsBtn();
            }


            function createRockBtn() {
                let rockbtn = document.createElement('button');
                rockbtn.classList.add('rockbtn');
                rockbtn.setAttribute('id', 'rock');
                rockbtn.setAttribute('class', 'movebutton');
                rockbtn.textContent = 'Rock';
                let buttonid = rockbtn.id;
                rockbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 

                buttonsbox.appendChild(rockbtn);
            }

            function createPaperBtn() {
                let paperbtn = document.createElement('button');
                paperbtn.classList.add('paperbtn');
                paperbtn.setAttribute('id', 'paper');
                paperbtn.setAttribute('class', 'movebutton');
                paperbtn.textContent = 'Paper';
                let buttonid = paperbtn.id;
                paperbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 
                buttonsbox.appendChild(paperbtn);                
            }

            function createScissorsBtn() {
                let scissorsbtn = document.createElement('button');
                scissorsbtn.classList.add('scissorsbtn');
                scissorsbtn.setAttribute('id', 'scissors');
                scissorsbtn.setAttribute('class', 'movebutton');
                scissorsbtn.textContent = 'Scissors';
                let buttonid = scissorsbtn.id;
                scissorsbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 
                buttonsbox.appendChild(scissorsbtn);                
            }

            function createPlayAgainBtn() {
                let playAgainBtn = document.createElement('button');
                playAgainBtn.classList.add('playAgainBtn');
                playAgainBtn.setAttribute('id', 'playagain');
                playAgainBtn.textContent = 'Play Again';
                playAgainBtn.addEventListener('click', () => {
                    resetGame();
                })
                buttonsbox.appendChild(playAgainBtn);
            }
            
            /* Plays the game and logs the round result & the scores each loop.
                after loop, prints results of determineWinner function */
            function game(buttonid) {
                //for (let rounds = 0; rounds < 5; rounds++) { 
                    gamemsg.textContent = '';
                    const playerSelection = buttonid;
                    const computerSelection = computerPlay();
                    playRound(playerSelection, computerSelection);
                    rounds++;
                    if (playerScore === 5 || computerScore === 5) {
                        determineWinner();
                        createPlayAgainBtn();
                    }
                    //console.log(`Computer Score: ${computerScore}  Player Score: ${playerScore}`);
                //}
            }

            function resetGame() {
                const node = document.getElementById('buttonsbox');
                node.querySelectorAll('button').forEach(n => n.remove());
                const playbtn = document.createElement('button');
                playbtn.classList.add('playbtn');
                playbtn.setAttribute('id', 'playbtn');
                playbtn.textContent = 'Play Game';
                buttonsbox.appendChild(playbtn);
                playbtn.onclick = () => {
                    buttonsbox.removeChild(playbtn);
                    createRockBtn();
                    createPaperBtn();
                    createScissorsBtn();
                }
            }

            // Computer chooses random string from possibleMoves array
            function computerPlay() {
                const possibleMoves = ["rock", "paper", "scissors"];
                return possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
            }

            function playRound(playerSelection, computerSelection) {
                // Player inputs ROCK
                if (playerSelection === "rock") {
                    if (computerSelection === "rock") {
                        roundmsg.textContent = "It's a tie!";
                        updateScore(0, 0);
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "paper") {
                        updateScore(0, 1);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You lose! Paper beats rock.";
                    } else if (computerSelection === "scissors") {
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You win! Rock beats scissors.";
                    } else {
                        roundmsg.textContent = "Something went wrong.";
                    }
                // Player inputs PAPER
                } else if (playerSelection === "paper") {
                    if (computerSelection === "rock") {
                        updateScore(1, 0);
                        roundmsg.textContent = "You win! Paper beats rock.";
                        computertally.textContent = computerScore;
                        playertally.textContent = playerScore;
                    } else if (computerSelection === "paper") {
                        roundmsg.textContent = "It's a tie!";
                    } else if (computerSelection === "scissors") {
                        updateScore(0, 1);
                        roundmsg.textContent = "You lose! Scissors beats paper.";
                        computertally.textContent = computerScore;
                        playertally.textContent = playerScore;
                    } else {
                        return "Something went wrong.";
                    }
                // Player inputs SCISSORS
                } else if (playerSelection === "scissors") {
                    if (computerSelection === "rock") {
                        updateScore(0, 1);
                        roundmsg.textContent = "You lose! Rock beats scissors.";
                        computertally.textContent = computerScore;
                        playertally.textContent = playerScore;
                    } else if (computerSelection === "paper") {
                        updateScore(1, 0);
                        roundmsg.textContent = "You win! Scissors beats paper.";
                        computertally.textContent = computerScore;
                        playertally.textContent = playerScore;
                    } else if (computerSelection === "scissors") {
                        roundmsg.textContent = "It's a tie!";
                    } else {
                        return "Something went wrong.";
                    }
                } else // Player input is invalid
                    {
                        return "Input is invalid - try again.";
                    }
            } // closes playRound()

            function determineWinner() {
                if (playerScore > computerScore) {
                    gamemsg.textContent = "You won the game!";
                } else if (playerScore < computerScore) {
                    gamemsg.textContent = "You lost the game!";
                } else if (playerScore === computerScore) {
                    gamemsg.textContent = "It's a tie game!";
                }
                playerScore = 0;
                computerScore = 0;
                rounds = 0;
            }
            
            function updateScore(num1, num2) {
                playerScore += num1;
                computerScore += num2;
            }

            function displayScore() {
                computertally.textContent = computerScore;
                playertally.textContent = playerScore;
            }

            function tallyRounds() {
                roundtally.textContent = rounds +1;
            }

            // movebutton.forEach((button) => {   //**restore and point to generated RPS buttons after Play Game is clicked
            //     button.addEventListener('click', () => {
            //         console.log(game(button.id));
            //     });
            // });



            
            

            //game();