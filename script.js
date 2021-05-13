
            
            let playerScore = 0;
            let computerScore = 0;
            let rounds = 0;

            const buttonsbox = document.querySelector('#buttonsbox');
            const startbtn = document.querySelector('#startbtn');
            const msgbox = document.querySelector('#msgbox');
            const computertally = document.querySelector('#computertally');
            const playertally = document.querySelector('#playertally');
            const roundtally = document.querySelector('#roundtally');

            startbtn.onclick = () => {
                buttonsbox.removeChild(startbtn);
                createRockBtn();
                createPaperBtn();
                createScissorsBtn();
                createLizardBtn();
                createSpockBtn();
            }

            function createRockBtn() {
                let rockbtn = document.createElement('input');
                rockbtn.classList.add('rockbtn');
                rockbtn.setAttribute('type', 'image');
                rockbtn.setAttribute('id', 'rock');
                rockbtn.setAttribute('class', 'movebutton');
                rockbtn.setAttribute('src', 'images/rock.jpg');
                rockbtn.setAttribute('alt', 'rock')
                let buttonid = rockbtn.id;
                rockbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 

                buttonsbox.appendChild(rockbtn);
            }

            function createPaperBtn() {
                let paperbtn = document.createElement('input');
                paperbtn.classList.add('paperbtn');
                paperbtn.setAttribute('type', 'image');
                paperbtn.setAttribute('id', 'paper');
                paperbtn.setAttribute('class', 'movebutton');
                paperbtn.setAttribute('src', 'images/paper.png');
                paperbtn.setAttribute('alt', 'paper');
                paperbtn.textContent = 'Paper';
                let buttonid = paperbtn.id;
                paperbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 
                buttonsbox.appendChild(paperbtn);                
            }

            function createScissorsBtn() {
                let scissorsbtn = document.createElement('input');
                scissorsbtn.classList.add('scissorsbtn');
                scissorsbtn.setAttribute('type', 'image');
                scissorsbtn.setAttribute('id', 'scissors');
                scissorsbtn.setAttribute('class', 'movebutton');
                scissorsbtn.setAttribute('src', 'images/scissors.jpg');
                scissorsbtn.setAttribute('alt', 'scissors');
                scissorsbtn.textContent = 'Scissors';
                let buttonid = scissorsbtn.id;
                scissorsbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 
                buttonsbox.appendChild(scissorsbtn);                
            }

            function createLizardBtn() {
                let lizardbtn = document.createElement('input');
                lizardbtn.classList.add('lizardbtn');
                lizardbtn.setAttribute('type', 'image');
                lizardbtn.setAttribute('id', 'lizard');
                lizardbtn.setAttribute('class', 'movebutton');
                lizardbtn.setAttribute('src', 'images/lizard.png');
                lizardbtn.setAttribute('alt', 'lizard');
                lizardbtn.textContent = 'Lizard';
                let buttonid = lizardbtn.id;
                lizardbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 
                buttonsbox.appendChild(lizardbtn);                
            }

            function createSpockBtn() {
                let spockbtn = document.createElement('input');
                spockbtn.classList.add('spockbtn');
                spockbtn.setAttribute('type', 'image');
                spockbtn.setAttribute('id', 'spock');
                spockbtn.setAttribute('class', 'movebutton');
                spockbtn.setAttribute('src', 'images/spock.png');
                spockbtn.setAttribute('alt', 'spock');
                spockbtn.textContent = 'Spock';
                let buttonid = spockbtn.id;
                spockbtn.addEventListener('click', () => {
                    game(buttonid);
                }) 
                buttonsbox.appendChild(spockbtn);                
            }

            function createPlayAgainBtn() {
                let playAgainBtn = document.createElement('input');
                playAgainBtn.classList.add('playAgainBtn');
                playAgainBtn.setAttribute('type', 'image');
                playAgainBtn.setAttribute('class', 'button');
                playAgainBtn.setAttribute('alt', 'play again');
                playAgainBtn.setAttribute('src', 'images/reload.png')
                playAgainBtn.setAttribute('id', 'playagain');
                playAgainBtn.textContent = 'Play Again';
                playAgainBtn.addEventListener('click', () => {
                    resetGame();
                })
                buttonsbox.appendChild(playAgainBtn);
            }
            
            function game(buttonid) {
                    const playerSelection = buttonid;
                    const computerSelection = computerPlay();
                    playRound(playerSelection, computerSelection);
                    rounds++;
                    if (playerScore === 5 || computerScore === 5) {
                        determineWinner();
                        const node = document.getElementById('buttonsbox');
                        node.querySelectorAll('input').forEach(n => n.remove());
                        createPlayAgainBtn();
                    }
            }

            function resetGame() {
                const node = document.getElementById('buttonsbox');
                node.querySelectorAll('input').forEach(n => n.remove());
                computertally.textContent = 0;
                playertally.textContent = 0;
                roundtally.textContent = 0;
                roundmsg.textContent = '';
                gamemsg.textContent = '';
                    createRockBtn();
                    createPaperBtn();
                    createScissorsBtn();
                    createLizardBtn();
                    createSpockBtn();
            } 

            function computerPlay() {
                const possibleMoves = ["rock", "paper", "scissors", "lizard", "spock"];
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
                        roundmsg.textContent = "You lose! Paper covers rock.";
                    } else if (computerSelection === "scissors") {
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You win! Rock smashes scissors.";
                    } else if (computerSelection === "lizard") {
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You win! Rock crushes lizard.";
                    } else if (computerSelection === "spock") {
                        updateScore(0, 1);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You lose! Spock vaporizes rock.";
                    } else {
                        roundmsg.textContent = "Something went wrong.";
                    }
                // Player inputs PAPER
                } else if (playerSelection === "paper") {
                    if (computerSelection === "rock") {
                        updateScore(1, 0);
                        roundmsg.textContent = "You win! Paper covers rock.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "paper") {
                        roundmsg.textContent = "It's a tie!";
                        updateScore(0, 0);
                    } else if (computerSelection === "scissors") {
                        updateScore(0, 1);
                        roundmsg.textContent = "You lose! Scissors cuts paper.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "lizard") {
                        updateScore(0, 1);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You lose! Lizard eats paper.";
                    } else if (computerSelection === "spock") {
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You win! Paper disproves Spock.";
                    } else {
                        return "Something went wrong.";
                    }
                // Player inputs SCISSORS
                } else if (playerSelection === "scissors") {
                    if (computerSelection === "rock") {
                        updateScore(0, 1);
                        roundmsg.textContent = "You lose! Rock smashes scissors.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "paper") {
                        updateScore(1, 0);
                        roundmsg.textContent = "You win! Scissors cuts paper.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "scissors") {
                        roundmsg.textContent = "It's a tie!";
                        updateScore(0, 0);
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "lizard") {
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You win! Scissors decapitates lizard.";
                    } else if (computerSelection === "spock") {
                        updateScore(0, 1);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You lose! Spock smashes scissors.";
                    } else {
                        return "Something went wrong.";
                    }
                } 
                // Player inputs LIZARD
                else if (playerSelection === "lizard") {
                    if (computerSelection === "rock") {
                        updateScore(0, 1);
                        roundmsg.textContent = "You lose! Rock crushes lizard.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "paper") {
                        updateScore(1, 0);
                        roundmsg.textContent = "You win! Lizard eats paper.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "scissors") {
                        roundmsg.textContent = "You lose! Scissors decapitates lizard.";
                        updateScore(0, 1);
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "lizard") {
                        updateScore(0, 0);
                        roundmsg.textContent = "It's a tie!";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "spock") {
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You win! Lizard poisons Spock.";
                    } else {
                        return "Something went wrong.";
                    }
                    // Player inputs SPOCK
                } else if (playerSelection === "spock") {
                    if (computerSelection === "rock") {
                        updateScore(1, 0);
                        roundmsg.textContent = "You win! Spock vaporizes rock.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "paper") {
                        updateScore(0, 1);
                        roundmsg.textContent = "You lose! Paper disproves Spock.";
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "scissors") {
                        roundmsg.textContent = "You win! Spock smashes scissors.";
                        updateScore(1, 0);
                        tallyRounds();
                        displayScore();
                    } else if (computerSelection === "lizard") {
                        updateScore(0, 1);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "You lose! Lizard poisons Spock.";
                    } else if (computerSelection === "spock") {
                        updateScore(0, 0);
                        tallyRounds();
                        displayScore();
                        roundmsg.textContent = "It's a tie!";
                    } else {
                        return "Something went wrong.";
                    }
                } 
                else // Player input is invalid
                    {
                        return "Input is invalid - try again.";
                    }
            } // closes playRound()

            function determineWinner() {
                if (playerScore > computerScore) {
                    gamemsg.textContent = "You won the game! Click arrow to play again.";
                } else if (playerScore < computerScore) {
                    gamemsg.textContent = "You lost the game! Click arrow to play again.";
                } else if (playerScore === computerScore) {
                    gamemsg.textContent = "It's a tie game! Click arrow to play again.";
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
