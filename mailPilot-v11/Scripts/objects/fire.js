/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Fire = (function () {
        function Fire(stage, game) {
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
        Fire.prototype.update = function () {
            this.image.y -= this.dy;
            if (this.image.y < 0) {
                if (constants.BOOL_FIRE) {
                    constants.BOOL_FIRE = false;
                }
                else {
                    constants.BOOL_FIRE = true;
                }
                game.removeChild(this.image);
            }
        };
        Fire.prototype.reset = function () {
            if (constants.BOOL_FIRE) {
                constants.BOOL_FIRE = false;
            }
            else {
                constants.BOOL_FIRE = true;
            }
            game.removeChild(this.image);
        };
        Fire.prototype.destroy = function () {
            if (constants.BOOL_FIRE) {
                constants.BOOL_FIRE = false;
            }
            else {
                constants.BOOL_FIRE = true;
            }
            game.removeChild(this.image);
        };
        return Fire;
    })();
    objects.Fire = Fire;
})(objects || (objects = {}));
//# sourceMappingURL=fire.js.map