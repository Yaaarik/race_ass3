module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "ocean", src: "assets/images/ocean.gif" },
        { id: "engine", src: "assets/sounds/soundtrack.mp3" },
        { id: "thunder", src: "assets/sounds/enemyhit.mp3" },
        { id: "yay", src: "assets/sounds/bonus.mp3" },
        { id: "shot", src: "assets/sounds/bullet.mp3" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [3, 145, 230, 65],
            [336, 11, 78, 83],
            [237, 11, 90, 178],
            [4, 73, 229, 65],
            [4, 2, 229, 65],
            [427, 2, 157, 205],
            [580, 28, 75, 77],
            [656, 105, 75, 77]
        ],
        "animations": {
            "instructionsButton": [0],
            "gas": [1],
            "car": [2],
            "playButton": [3],
            "tryAgainButton": [4],
            "fireshot": [5],
            "zomebie": [6],
            "zomebie2":[7]
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 