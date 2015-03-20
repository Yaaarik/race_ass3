/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/fire.ts" />

/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/firecollision.ts" />

module states {
    export function playState() {
        ocean.update();
        island.update();
        plane.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        collision.update();
        scoreboard.update();


        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (constants.BOOL_FIRE) {
            fire.update();
            fireCollision.update();
            console.log("fire update");
        }
    }

    function shotFire() {
        
        if (!constants.BOOL_FIRE) {

            // Create multiple bullets
            fire = new objects.Fire(stage, game);

            // Instantiate Collision Manager
            fireCollision = new managers.fireCollision(clouds, scoreboard, fire);
            constants.BOOL_FIRE = true;
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);
        plane.image.addEventListener("click", shotFire);


        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = constants.CLOUD_NUM; count >= 0; count--) {
            clouds[count] = new objects.Cloud(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(plane, island, clouds, scoreboard);
        //stage.addEventListener("click", shotFire);
        stage.addChild(game);
    }
}