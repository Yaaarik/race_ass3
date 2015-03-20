/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />

module states {

    // Restart Game when Try Again Button is clicked
    export function backClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instructionState() {
        console.log("why?");
        ocean.update();
    }


    // Game Over Scene
    export function instruction() {

        var msgObstacle = new createjs.Text;
        var msgGas = new createjs.Text;
        var msgCar = new createjs.Text;
        var msgFire = new createjs.Text;

        var obstacle: createjs.Sprite;
        var gas: createjs.Sprite;
        var car: createjs.Sprite;
        var fireshot: createjs.Sprite;

        obstacle = new createjs.Sprite(managers.Assets.atlas, "zomebie");
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
        obstacle.y = (stage.canvas.height / 4);
        game.addChild(obstacle);

        msgObstacle = new createjs.Text("Your enemy. You'll lose your life when hit them.\nJust avoid or shoot them", "20px Maven Pro", "#000000");
        msgObstacle.x = (stage.canvas.width / 6) + 180;
        msgObstacle.y = (stage.canvas.height / 4);
        game.addChild(msgObstacle);

        // About bonus
        gas.x = (stage.canvas.width / 6) - 100;
        gas.y = ((stage.canvas.height / 4) * 2) - 130;
        game.addChild(gas);

        msgGas = new createjs.Text("Your bonus. You'll get the score when hit them.\nTry hit them as much as you can!", "20px Maven Pro", "#000000");
        msgGas.x = (stage.canvas.width / 6) + 180;
        msgGas.y = ((stage.canvas.height / 4) * 2) - 130;
        game.addChild(msgGas);


        // About bullet
        car.x = (stage.canvas.width / 6) - 100;
        car.y = ((stage.canvas.height / 4) * 4) - 230;
        game.addChild(car);

        msgCar = new createjs.Text("Your car. You can kill zomebies when click your laswer.\nShoot! and go go!", "20px Maven Pro", "#000000");
        msgCar.x = (stage.canvas.width / 6) + 180;
        msgCar.y = ((stage.canvas.height / 4) * 4) - 230;
        game.addChild(msgCar);

        // About bullet
        fireshot.x = (stage.canvas.width / 6) - 100;
        fireshot.y = ((stage.canvas.height / 4) * 3) - 210;
        game.addChild(fireshot);

        msgFire = new createjs.Text("Your bullet. You can use this when you meet the zomebie\nShoot! and win!", "20px Maven Pro", "#000000");
        msgFire.x = (stage.canvas.width / 6) + 180;
        msgFire.y = ((stage.canvas.height / 4) * 3) - 210;
        game.addChild(msgFire);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 650, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);

    }
}