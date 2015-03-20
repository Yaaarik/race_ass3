/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud = (function () {
        function Cloud(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "zomebie");
            this.image2 = new createjs.Sprite(managers.Assets.atlas, "zomebie2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset(0);
            game.addChild(this.image);
            game.addChild(this.image2);
        }
        Cloud.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.y > this.stage.canvas.height + this.height) {
                this.reset(1);
            }
            this.image2.y += this.dy;
            this.image2.x += this.dx;
            if (this.image2.y > this.stage.canvas.height + this.height) {
                this.reset(2);
            }
        };
        Cloud.prototype.reset = function (image) {
            switch (image) {
                case 0:
                    this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
                    this.dy = Math.floor(Math.random() * 5 + 5);
                    this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
                    this.image.y = -this.height;
                    this.image2.x = Math.floor(Math.random() * this.stage.canvas.width);
                    this.dy = Math.floor(Math.random() * 4 + 4);
                    this.dx = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
                    this.image2.y = -this.height;
                    break;
                case 1:
                    this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
                    this.dy = Math.floor(Math.random() * 5 + 5);
                    this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
                    this.image.y = -this.height;
                    break;
                case 2:
                    this.image2.x = Math.floor(Math.random() * this.stage.canvas.width);
                    this.dy = Math.floor(Math.random() * 4 + 4);
                    this.dx = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
                    this.image2.y = -this.height;
                    break;
            }
        };
        Cloud.prototype.destroy = function () {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        };
        return Cloud;
    })();
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map