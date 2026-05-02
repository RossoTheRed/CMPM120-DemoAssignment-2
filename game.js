let fishData = {
    "[numFound]":0,
    "[knownTotal]": 41,
    "Racoon Butterflyfish": false,
    "Bluestripe Butterflyfish": false,
    "Milletseed Butterflyfish": false,
    "Stripey Fish": false,
    "Sergeantmajor Fish": false,
    "Moorish Idol Fish": false,
    "Unicornfish": false,
    "Bluestripe Snapper": false,
    "Reef Triggerfish": false,
    "Convict Tang": false,
    "Yelloweyed Surgeonfish": false,
    "Eyestripe Surgeonfish": false,
    "Saddle Wrasse": false,
    "Belted Wrasse": false,
    "Hawaiian Cleaner Wrasse": false,
    "Christmas Wrasse": false,
    "Bird Wrasse": false,
    "Spotted Hawkfish": false,
    "Blue Goatfish": false,
    "Manybar Goatfish": false,
    "Spectacled Parrotfish (male)": false,
    "Spectacled Parrotfish (female)": false,
    "Hawaiian Flagtail": false,
    "Grey Damselfish": false,
    "Rudderfish": false,
    "Great Barracuda": false,
    "Bigeye Sead": false,
    "Pacific Threadfin": false,
    "Stripped Mullet": false,
    "Milkfish": false,
    "Bluefin Trevally": false,
    "Giant Trevally": false,
    "Needlefish": false,
    "Trumpetfish": false,
    "Flounder": false,
    "Sea Cucumber": false,
    "Black Nerite Snail": false,
    "Black Foot Limpet": false,
    "Rock Crab": false,
    "Shingle Urchin": false,
    "Hawaiian Whitespotted Toby Pufferfish": false,
    "Green Sea Turtle": false,
};

let dialogue = [
    "Grandma stops you to say something\n\"We have to leave at 4 to make dinner, okay? Don't go past the bathrooms where I can't see you. Love you, baby.\"",
    "The soft sand is warm, bordering on hot, but that's okay because you're about to get back in the water. Grandma is sunbathing near on her towel. She probably won't notice if you go past the bathrooms.",

];

let choices = [
    ["\"Let's go!\"","Go to [Shore]"],
    ["Continue",null],
    ["Back", null],
    ["Sneak past into the park","Go to [The Park]"],
    ["Go to the water", "Go to [The Shallow]"],
    ["Talk to grandma", "Check the time"],
    ["Check the board", "Go to [The Fish Board]"],
    ["Swim deeper", "Do nothing"],
    ["Placeholder","Do nothing"],
]

function findFish(fishFound) {
    if (fishData[fishFound] != null && fishData[fishFound] == false) {
        fishData[fishFound] = true;
        fishData[numFound] += 1;
    }
}

let choiceFillColor = 0xb2f6a9; // #b2f6a9
let choiceStrokeColor = 0x0097a7; // #0097a7
let infoFillColor = 0x90b8ec; // #90b8ec
let infoStrokeColor = 0x4285f4; // #4285f4

function makeChoiceBox(scope, mainText,action = [callback,callbackArgs,hoverText], x, y, BGColor, strokeColor, textData = { textStyle: "normal", textColor: 0x000001, textSize: this.s * 2, textAlignment: "center", textWrapLength: mainText.width / 2/*, textFont: null*/ }) {
    let node = scope.add.container(x, y);

    let nodeText = scope.add.text(0, 0, mainText)
        .setFontSize(textData["textSize"])
        .setColor(textData["textColor"])
        .setWordWrapWidth(textData["textWrapLength"])
        .setAlign(textData["textAlignment"])
        //.setFont(textData["textFont"])
        .setStyle(textData["textStyle"])
        
    if (action != null && action.length == 3) {
        nodeText.setInteractive({ useHandCursor: true })
        .on('pointerover', () => scope.showMessage(action[2]))
        .on('pointerdown', () => {
            console.log(action)
            action[0].call(scope,action[1]);
            // scope.gotoScene(action[1]);
        });
    }
        

    scope.graphics = scope.add.graphics();
    scope.graphics.fillStyle(BGColor, 1);
    let BGPadding = 20;
    let nodeBG = scope.graphics.fillRoundedRect(-BGPadding / 2, -BGPadding / 2, nodeText.width + BGPadding, nodeText.height + BGPadding);
    // Later!
    //scope.graphics.fillStyle(strokeColor, 1);
    //scope.graphics.strokeRoundedRect(x, y, nodeBG.width, nodeBG.height);

    node.add([nodeBG, nodeText]);
    node.x = x - nodeText.width / 2;
    node.y = y - nodeText.height / 2;
    return (node);
}

function makeInfoBox(scope, mainText, x, y, BGColor, strokeColor, textData = { textStyle: "normal",textColor: 0xFFFFFF, textSize: this.s*2, textAlignment: "center", textWrapLength: mainText.width/2/*, textFont: null*/ }) {
    let node = scope.add.container(x, y);

    let nodeText = scope.add.text(0, 0, mainText)
        .setFontSize(textData["textSize"])
        .setColor(textData["textColor"])
        .setWordWrapWidth(textData["textWrapLength"])
        .setAlign(textData["textAlignment"])
        //.setFont(textData["textFont"])
        .setStyle(textData["textStyle"]);

    scope.graphics = scope.add.graphics();
    scope.graphics.fillStyle(BGColor, 1);
    let BGPadding = 80;
    let nodeBG = scope.graphics.fillRoundedRect(-BGPadding/2, -BGPadding/2, nodeText.width + BGPadding, nodeText.height + BGPadding);
    // Later!
    //scope.graphics.fillStyle(strokeColor, 1);
    //scope.graphics.strokeRoundedRect(x, y, nodeBG.width, nodeBG.height);

    node.add([nodeBG, nodeText]);
    node.x = x - nodeText.width/2;
    node.y = y - nodeText.height/2;
    return (node);
}

class FishBoard extends AdventureScene {
    constructor() {
        super("fishBoard", "The Fish Board",fishData);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("fishBoard","FishBoard.png");
    }

    onEnter() {

        this.bg = this.add.image(this.w/2-this.w/7,this.h/2,"fishBoard");
        this.bg.setScale(3);

        let node = makeChoiceBox(this, choices[0][0], [this.gotoScene,"shore",choices[0][1]], this.w / 10, this.h / 1.1, choiceFillColor, choiceStrokeColor, { textStyle: "italic", textColor: 0xFFFFFF, textSize: this.s * 2, textAlignment: "center", textWrapLength: 50 * this.s });
    }

    update() {
        /*let pointer = this.input.activePointer;
        console.log(`(${Math.trunc(pointer.x)},${Math.trunc(pointer.y)})`);*/
    }
}

class Intro extends AdventureScene {
    constructor() {
        super("intro", "The Shore", fishData);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("theShore", "BeachView1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "theShore");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeChoiceBox(this, dialogue[0] + "\n\nPeriodically check in with Grandma to keep track of time.\nThe current time is 12pm",this.viewCenter.x,this.viewCenter.y*0.75,infoFillColor,infoStrokeColor, { textStyle: "italic", textColor: 0xFFFFFF, textSize: this.s * 2.5, textAlignment: "center", textWrapLength: 50*this.s});

        makeChoiceBox(this, choices[1][0], choices[0][1], "shore", this.viewCenter.x, this.viewCenter.y*1.5, choiceFillColor, choiceStrokeColor, { textStyle: "italic", textColor: 0xFFFFFF, textSize: this.s * 2, textAlignment: "center", textWrapLength: 50 * this.s });
    }
}

class Shore extends AdventureScene {
    constructor() {
        super("shore", "The Shore", fishData);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("theShore", "BeachView1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "theShore");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeInfoBox(this, dialogue[0] + "\n\nPeriodically check in with Grandma to keep track of time.\nThe current time is 12pm", this.viewCenter.x, this.viewCenter.y * 0.75, infoFillColor, infoStrokeColor, { textStyle: "italic", textColor: 0xFFFFFF, textSize: this.s * 2.5, textAlignment: "center", textWrapLength: 50 * this.s });

        makeChoiceBox(this, choices[1][0], choices[0][1], "shore", this.viewCenter.x, this.viewCenter.y * 1.5, choiceFillColor, choiceStrokeColor, { textStyle: "italic", textColor: 0xFFFFFF, textSize: this.s * 2, textAlignment: "center", textWrapLength: 50 * this.s });
    }
}

class TitleScreen extends Phaser.Scene {
    constructor() {
        super('titleScreen')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start("fishBoard"));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

/*
class Template extends AdventureScene {
    constructor() {
        super("template", "Empty Room",fishData);
    }

    preload() {
        this.load.path = "assets/";
    }

    onEnter() {

        let node = this.add.text(this.w * 0.3, this.w * 0.3, "Placeholder")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Placeholder"))
            .on('pointerdown', () => {
                this.gotoScene("gameStart");
            });
    }
}
*/

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [TitleScreen, Intro, FishBoard, Shore, Outro],
    title: "Adventure Game",
});

