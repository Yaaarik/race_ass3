/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/fire.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/firecollision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instrution.ts" />
// Mail Pilot Version 11 - Added basic state machine structure - Added Button and Label classes
// Changed online repo
var stage;
var game;
var ocean;
var plane;
var island;
var clouds = []; // Obstacles array;
var scoreboard;
var fire;
var collision;
var fireCollision;
var tryAgain;
var playButton;
var instructionBtn;
var currentState;
var currentStateFunction;
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
// init called after Assets have been loaded. set your convas
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60); //it's kind of timer
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    //this is set for default stage
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
        case constants.INSTRUCTION_STATE:
            console.log("instruction");
            currentStateFunction = states.instructionState;
            states.instruction();
            break;
    }
}
//# sourceMappingURL=game.js.map