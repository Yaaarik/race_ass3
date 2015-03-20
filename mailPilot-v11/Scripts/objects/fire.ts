/// <reference path="../managers/asset.ts" />

module objects {
    // Island Class
    export class Fire {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "fireshot");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;

            this.dy = 30;

            game.addChild(this.image);

            createjs.Sound.play("shot");
        }

        update() {
            this.image.y -= this.dy;

            if (this.image.y < 0) {

                if (constants.BOOL_FIRE) {
                    constants.BOOL_FIRE = false;
                }
                else {
                    constants.BOOL_FIRE = true;
                }

                game.removeChild(this.image);
                //this.reset();
            }
        }

        reset() {
            if (constants.BOOL_FIRE) {
                constants.BOOL_FIRE = false;
            }
            else {
                constants.BOOL_FIRE = true;
            }
            game.removeChild(this.image);
        }

        destroy() {
            if (constants.BOOL_FIRE) {
                constants.BOOL_FIRE = false;
            }
            else {
                constants.BOOL_FIRE = true;
            }
            game.removeChild(this.image);
        }

    }

}