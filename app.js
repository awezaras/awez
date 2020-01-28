new Vue({
    el: '#app',
    data: {
        randomRoundNumberToSpecialAttack: getRandomInt(5, 8),
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        specialAttackEnabled: true,
        disabled: {
            'background-color': 'grey'
        },
        enableSpecialAttackIn: this.randomRoundNumberToSpecialAttack
    },
    methods: {
        startGame: function () {
            this.gameStarted = true
            this.playerHealth = 100
            this.monsterHealth = 100,
                this.enableSpecialAttackIn = this.randomRoundNumberToSpecialAttack,
                this.specialAttackEnabled = true,
                this.disabled = {
                    'background-color': 'grey'
                }
        },
        endGame: function () {
            this.gameStarted = false;
        },
        attack: function () {

            this.monsterHealth -= getRandomInt(3, 12)
            if (this.monsterHealth < 1) {
                alert("Player Won")
                this.gameStarted = false
                return;
            }



            this.playerHealth -= getRandomInt(6, 12)
            if (this.playerHealth < 1) {
                alert('Monster Won')
                this.gameStarted = false
                return;
            }
            this.enableSpecialAttackIn -= 1
            if (this.enableSpecialAttackIn == 0) {
                this.specialAttackEnabled = false
                this.disabled = {
                    'background-color': 'orange'
                }
            }
        },
        specialAttack: function () {
            this.specialAttackEnabled = true
            this.disabled = {
                'background-color': 'grey'
            }
            this.enableSpecialAttackIn = this.randomRoundNumberToSpecialAttack;


            this.monsterHealth -= getRandomInt(13, 20)

            if (this.monsterHealth < 1) {
                alert("Player Won")
                this.gameStarted = false
                return;
            }



            this.playerHealth -= getRandomInt(6, 12)
            if (this.playerHealth < 1) {
                alert('Monster Won')
                this.gameStarted = false
                return;
            }
            this.enableSpecialAttackIn -= 1
            if (this.enableSpecialAttackIn == 0) {
                this.specialAttackEnabled = false
                this.disabled = {
                    'background-color': 'orange'
                }
            }
        },
        heal: function () {

        },
        checkWin: function () {
            if (this.monsterHealth < 1) {
                if (confirm('You won! New game?')) {
                    this.startGame()
                } else {
                    this.gameStarted = false;
                }
                return;

            }
           else if (this.playerHealth < 1) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                } else {
                    this.gameStarted = false;
                }
                return;

            }
            
        }

    }


})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}