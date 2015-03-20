/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // Restart Game when Try Again Button is clicked
    function backClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.backClicked = backClicked;
    function instructionState() {
        console.log("why?");
        ocean.update();
    }
    states.instructionState = instructionState;
    // Game Over Scene
    function instruction() {
        var msgObstacle = new createjs.Text;
        var msgGas = new createjs.Text;
        var msgCar = new createjs.Text;
        var msgFire = new createjs.Text;
        var obstacle;
        var gas;
        var car;
        var fireshot;
        obstacle = new createjs.Sprite(managers.Assets.atlas, "obstacle");
        gas = new createjs.Sprite(managers.Assets.atlas, "gas");
        car = new createjs.Sprite(managers.Assets.atlas, "car");
        fireshot = new createjs.Sprite(managers.Assets.atlas, "fireshot");
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display game images and details
        // About enermy
        obstacle.x = (stage.canvas.width / 6) - 100;
        obstacle.y = 50;
        game.addChild(obstacle);
        msgObstacle = new createjs.Text("Your enemy. You'll lose your life when hit them.\nJust avoid or shoot them", "20px Maven Pro", "#000000");
        msgObstacle.x = (stage.canvas.width / 6) + 180;
        msgObstacle.y = 50;
        game.addChild(msgObstacle);
        // About bonus
        gas.x = (stage.canvas.width / 6) - 100;
        gas.y = 150;
        game.addChild(gas);
        msgGas = new createjs.Text("Your bonus. You'll get the score when hit them.\nTry hit them as much as you can!", "20px Maven Pro", "#000000");
        msgGas.x = (stage.canvas.width / 6) + 180;
        msgGas.y = 150;
        game.addChild(msgGas);
        // About bullet
        car.x = (stage.canvas.width / 6) - 100;
        car.y = 220;
        game.addChild(car);
        msgCar = new createjs.Text("Your bullet. You can kill the birds when click your balloon.\nShoot! and go go!", "20px Maven Pro", "#000000");
        msgCar.x = (stage.canvas.width / 6) + 180;
        msgCar.y = 220;
        game.addChild(msgCar);
        // About bullet
        fireshot.x = (stage.canvas.width / 6) - 100;
        fireshot.y = 290;
        game.addChild(fireshot);
        msgFire = new createjs.Text("Your special bullet. You can use this when you meet the boss bird\nShoot! and win!", "20px Maven Pro", "#000000");
        msgFire.x = (stage.canvas.width / 6) + 180;
        msgFire.y = 320;
        game.addChild(msgFire);
        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 650, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);
        stage.addChild(game);
    }
    states.instruction = instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map