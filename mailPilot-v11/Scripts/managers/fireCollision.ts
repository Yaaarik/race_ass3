/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/fire.ts" />

/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class fireCollision {

        // class variables
        private fireShot: objects.Fire;
        private clouds = [];
        private scoreboard: objects.Scoreboard;

        constructor(clouds, scoreboard: objects.Scoreboard, fireShot: objects.Fire) {
            this.clouds = clouds;
            this.scoreboard = scoreboard;
            this.fireShot = fireShot;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between bullet and cloud
        private fireAndCloud(cloud: objects.Cloud, fireShot: objects.Fire) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            var p3: createjs.Point = new createjs.Point();

            p1.x = fireShot.image.x;
            p1.y = fireShot.image.y;

            p2.x = cloud.image.x;
            p2.y = cloud.image.y;

            p3.x = cloud.image2.x;
            p3.y = cloud.image2.y;

            if (this.distance(p1, p2) < ((fireShot.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 30;
                //bullet.reset();
                game.removeChild(fireShot.image);
                constants.BOOL_FIRE = false;
                cloud.reset(1);
            }

            if (this.distance(p1, p3) < ((fireShot.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 30;
                //bullet.reset();
                game.removeChild(fireShot.image);
                constants.BOOL_FIRE = false;
                cloud.reset(2);
            }
        }


        // Utility Function to Check Collisions
        update() {

            for (var i = constants.CLOUD_NUM; i >= 0; i--) {
                this.fireAndCloud(this.clouds[i], this.fireShot);
            }
        }
    }
} 