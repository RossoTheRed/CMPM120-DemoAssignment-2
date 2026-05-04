let fishList = {
    "[numFound]":0,
    "[knownTotal]": 41,
    "testFish": false,
    "Raccoon Butterflyfish": false,
    "Bluestripe Butterflyfish": false,
    "Milletseed Butterflyfish": false,
    "Stripey": false,
    "Mamo": false,
    "Moorish Idol": false,
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

let masterFishData = {
    "Reef Triggerfish": [1600, 1000, -400, 1200, 5000, 9000, 0.75],
    "Milletseed Butterflyfish": [1200, 600, 200, 200, 3500, 5000, 0.3],
    "Moorish Idol": [1200, 600, 200, 200, 3500, 5000, 0.3],
    "Whitespotted Toby": [1200, 600, 200, 200, 3500, 5000, 0.3],
    "Raccoon Butterflyfish": [1200, 600, 200, 200, 4500, 5000, 0.5],
    "Bluestripe Butterflyfish": [1200, 600, 200, 200, 4000, 5000, 0.5],
    "Stripey": [1200, 600, 200, 200, 4000, 5000, 0.5],
    "Mamo": [800, 300, 400, 600, 2000, 5000, 0.25],
    "Needlefish": [800, 300, 400, 600, 2000, 5000, 1],
    "Trumpetfish": [800, 300, 400, 600, 2000, 5000, 1],
    "Eyestripe Surgeonfish": [1200, 300, 600, 800, 2000, 5000, 0.2],
    "Hawaiian Flagtail": [1400, 300, 200, 0, 2000, 5000, 0.05],
    "Christmas Wrasse": [1400, 300, 200, 0, 2000, 5000, 0.2],
    "Cleaner Wrasse": [1400, 300, 200, 0, 2000, 5000, 0.2],
    "Bird Wrasse": [1400, 800, 200, 500, 2000, 5000, 0.2],
    "Belted Wrasse": [1400, 700, 200, 300, 2000, 5000, 0.2],
    "Spotted Hawkfish": [1400, 300, 200, 0, 2000, 5000, 0.05],
    "Rudderfish": [700, 600, 400, 900, 2000, 5000, 0.5],
    "Unicornfish": [1400, 300, 200, 750, 2000, 5000, 0.5],
    "Spectacled Parrotfish (male)": [1400, 300, 200, 750, 2000, 5000, 1.1],
    "Spectacled Parrotfish (female)": [1400, 300, 200, 750, 2000, 5000, 1.25],
    "Blue Goatfish": [1400, 300, 200, 750, 2000, 5000, 1.1],
    "Manybar Goatfish": [1400, 300, 200, 750, 2000, 5000, 0.2],
    "Grey Damselfish": [1400, 300, 200, 750, 2000, 5000, 0.2],
    "Yelloweyed Surgeonfish": [1400, 300, 200, 750, 2000, 5000, 0.25],
    "Bluestripe Snapper": [1400, 300, 200, 750, 2000, 5000, 1],
    "Convict Tang": [1400, 300, 200, 750, 2000, 5000, 0.25],
    "Leopard Shark": [1600, 1000, -400, 1200, 5000, 9000, 1.5],
    
    //"FishName": [startX (Approx), startY (Approx), endX (Approx), endY (Approx), speedX, speedY, scale]
}

let dialogue = [
    "Grandma stops you to say something\n\"We have to leave at 4 to make dinner, okay? Don't go past the bathrooms where I can't see you. Love you, baby.\"",
    "The soft sand is warm, bordering on hot, but that's okay because you're about to get back in the water. Grandma is sunbathing near on her towel. She probably won't notice if you go past the bathrooms.",
    "You walk up to grandma to ask the time.\n\"It's just about ",
    "\"Okay honey, let's go home then. How about we make some saimin for dinner?\"\n\"Yaaay!\""
];

let gameState = {
    "viewedIntro": false,
}

let choices = [
    ["\"Let's go!\"","Go to [Shore]"],
    ["Continue",null],
    ["Back", null],
    
    
    
    
    ["Swim deeper", "Do nothing"],
    ["Placeholder","Do nothing"],
]

function findFish(scope,fishFound) {
    if (fishList[fishFound] != null && fishList[fishFound] == false) {
        fishList[fishFound] = true;
        fishList["[numFound]"] += 1;
    }

    let totalText = "";
    for (let [fish, found] of Object.entries(fishList)) {
        if (fish.includes("[") == false) {
            if (found == true) {
                totalText += `[x]`;
            } else {
                totalText += `[ ]`;
            }
            totalText += `${fish}\n`
        }
    }
    scope.listText.setText(totalText);
}

function makeFish(scope, image, x1, y1, x2, y2, speedX, speedY) {
    let fish = scope.add.image(Phaser.Math.Between(x1*0.75, x1 * 1.25), Phaser.Math.Between(y1*0.9, y1 * 1.1), image);
    fish.setInteractive({ useHandCursor: true });
    fish.on("pointerup", () => {
        findFish(scope, image);
    });

    scope.tweens.add({
        targets: fish,
        x: Phaser.Math.Between(x2*0.75,x2*1.25),
        flipX: true,
        duration: Phaser.Math.Between(speedX * 0.9, speedX * 1.1),
        ease: "Sine.InOut",
        repeat: -1,
        yoyo: true,
    });

    scope.tweens.add({
        targets: fish,
        y: Phaser.Math.Between(y2*0.9,y2*1.1),
        duration: Phaser.Math.Between(speedY * 0.9, speedY * 1.1),
        ease: "Sine.InOut",
        repeat: -1,
        yoyo: true,
    });

    return (fish);
}

const choiceFillColor = 0xb2f6a9; // #b2f6a9
const choiceStrokeColor = 0x0097a7; // #0097a7
const infoFillColor = 0x90b8ec; // #90b8ec
const infoStrokeColor = 0x4285f4; // #4285f4

/**
 * Creates a new text box that may or may not be interactable. The size of the box is determined by the length of the text, the text wrapping length, and the size of the font with a 20px padding around the edges. The colors of the box are determined by its interactiveness. If the box is interactable, it will use the choiceFillColor and choiceStrokeColor values. Else, it will use the infoFillColor and infoStrokeColor values.
 * 
 * @param scope The scene that this object is made in. Usually just "this".
 * @param mainText The text that will be displayed in this box.
 * @param x The horizontal position of this Game Object in the world.
 * @param y The vertical position of this Game Object in the world.
 * @param action An optional dictionary that contains information for interaction. If you don't want this box to be interactable then leave this as null. If any of the sub-parameters are missing, the box will not be interactable.
** callback: The callback function for the box to call.
** cbArgs: The argument for the callback function. Currently only accepts a single argument.
** cbScope: The scope for the callback to be called in.
** hoverText: The text that should be displayed when the cursor hovers over this box.
 * @param textData An optional dictionary to further customise the text in the box. This function is written using a custom AdventureScene.js and will fill in any missing values with scope.defaultTextData.
 ** textStyle: A string which specifies the style of the text. See Phaser's text.setStyle() function for more details.
 ** textColor: A hexadecimal number that specifies the color of the text. See Phaser's text.setColor() for more details.
 ** textSize: A number that changes the size of the text in the box. See Phaser's text.setFontSize() for more details.
 ** textAlignment: A string the specifies the kind of alignmend the text should have. Can be "right", "left", "center", or "justify". See Phaser's text.setAlign() for more details.
 ** textWrapLength: A number that changes the wrapping size of the text in the box. See Phaser's text.setWordWrapWidth() for more details.
 ** textFont: I haven't figured out a way to make this work so you can't change the font yet.
 * @returns A container with a background and a text object.
 */
function makeBox(scope, mainText, x, y, action = {callback: null, cbArgs: null, cbScope: null, hoverText: ""}, textData = { textStyle: scope.defaultTextData["textStyle"], textColor: scope.defaultTextData["textColor"], textSize: scope.defaultTextData["textSize"], textAlignment: scope.defaultTextData["textAlignment"], textWrapLength: scope.defaultTextData["textWrapLength"]/*, textFont: null*/}) {
    let node = scope.add.container(x, y);

    let nodeText = scope.add.text(0, 0, mainText)
        .setFontSize(textData["textSize"])
        .setColor(textData["textColor"])
        .setWordWrapWidth(textData["textWrapLength"])
        .setAlign(textData["textAlignment"])
        //.setFont(textData["textFont"])
        .setStyle(textData["textStyle"])

        let BGColor = infoFillColor;
        let strokeColor = infoStrokeColor;

    if (action != null && action["callback"] != null) {
        nodeText.setInteractive({ useHandCursor: true })
        if (action["hoverText"] != "") {
            nodeText.on('pointerover', () => scope.showMessage(action["hoverText"]));
        }
        nodeText.on('pointerdown', () => {
            console.log(action)
            if (action["cbScope"] != null) {
                action["callback"].call(action["cbScope"],action["cbArgs"]);
            } else {
                action["callback"].call(scope, action["cbArgs"]);
            }
            
            // scope.gotoScene(action[1]);
        });
        
        BGColor = choiceFillColor;
        strokeColor = choiceStrokeColor;
    }
    scope.graphics = scope.add.graphics();
    scope.graphics.fillStyle(BGColor, 1);
    let BGPadding = 20;
    let nodeBG = scope.graphics.fillRoundedRect(-BGPadding / 2, -BGPadding / 2, nodeText.width + BGPadding, nodeText.height + BGPadding);
    // Later!
    //scope.graphics.fillStyle(strokeColor, 1);
    //scope.graphics.strokeRoundedRect(x, y, nodeBG.width, nodeBG.height);
    nodeBG.setDepth(nodeText.depth-1);

    node.add([nodeBG, nodeText]);
    node.x = x - nodeText.width / 2;
    node.y = y - nodeText.height / 2;
    return (node);
}

class FishBoard extends AdventureScene {
    constructor() {
        super("fishBoard", "The Board",fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("fishBoard","FishBoard.png");

        this.findFish("");
    }

    onEnter() {

        this.bg = this.add.image(this.w/2-this.w/7,this.h/2,"fishBoard");
        this.bg.setScale(3);

        let node = makeBox(this, choices[0][0], this.w / 10, this.h / 1.1, choiceFillColor, choiceStrokeColor, {callback: this.gotoScene, cbArgs: "shore", cbScope:this, hoverText: choices[0][1]}, { textStyle: "italic", textColor: 0xFFFFFF, textSize: this.s * 2, textAlignment: "center", textWrapLength: 50 * this.s });

        findFish(this,"");
    }

    update() {
        /*let pointer = this.input.activePointer;
        console.log(`(${Math.trunc(pointer.x)},${Math.trunc(pointer.y)})`);*/
    }
}

class Shore extends AdventureScene {
    constructor() {
        super("shore", "The Shore", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("theShore", "BeachView1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "theShore");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        if (gameState["viewedIntro"] == false) {
            let introText = this.add.container(0,0);

            function viewIntro() {
                introText.destroy(true);
                gameState["viewedIntro"] = true;
                //viewMain();
                this.gotoScene("shore");
            }

            introText.add([
                makeBox(this, dialogue[0], this.viewCenter.x, this.viewCenter.y * 0.75),
                makeBox(this, choices[1][0], this.viewCenter.x, this.viewCenter.y * 1.5, { callback: viewIntro, cbScope: this, hoverText: choices[0][1] })
            ]);
        } else if (gameState["talking"] == false) {
            makeBox(this, dialogue[2] + this.checkTime(), this.viewCenter.x, this.viewCenter.y * 0.75),
                makeBox(this, choices[1][0], this.viewCenter.x, this.viewCenter.y * 1.5, { callback: viewIntro, cbScope: this, hoverText: "continue" });
        } else {
            makeBox(this, dialogue[1], this.viewCenter.x, this.viewCenter.y * 0.5);

            makeBox(this, "Go to the water", this.viewCenter.x, this.viewCenter.y * 1, { callback: this.gotoScene, cbArgs: "shallow", cbScope: this, hoverText: "Go to [The Shallow]" });

            makeBox(this, "Go home", this.viewCenter.x, this.viewCenter.y * 1.2, { callback: this.gotoScene, cbArgs: "parkingLot", cbScope: this, hoverText: "End the game" });

            makeBox(this, "Check the board", this.viewCenter.x, this.viewCenter.y * 1.4, { callback: this.gotoScene, cbArgs: "fishBoard", cbScope: this, hoverText: "Go to [The Board]" });

            makeBox(this, "Sneak past into the park", this.viewCenter.x, this.viewCenter.y * 1.6, { callback: this.gotoScene, cbArgs: "park", cbScope: this, hoverText: "Go to [The Park]" });
        }
    }
}

class Shallow extends AdventureScene {
    constructor() {
        super("shallow", "Shallow Water", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("ShallowWater", "ShallowWater1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "ShallowWater");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeBox(this,"Back to the shore",this.viewCenter.x + this.w*0.25, this.viewCenter.y*1.5,{callback: this.gotoScene, cbArgs: "shore", hoverText: "Go to [Shore]"});

        makeBox(this, "Swim to the South", this.viewCenter.x + this.w * 0.25, this.viewCenter.y * 0.4, { callback: this.gotoScene, cbArgs: "southDeep", hoverText: "Go to [Southern Deep Waters]" });

        makeBox(this, "Swim to the North", this.viewCenter.x - this.w * 0.25, this.viewCenter.y * 0.4, { callback: this.gotoScene, cbArgs: "northDeep", hoverText: "Go to [Northern Deep Waters]" });

        makeBox(this, "Dive under", this.viewCenter.x, this.viewCenter.y*0.75, { callback: this.gotoScene, cbArgs: "shallow_dive", hoverText: "Search for fish" });
    }
}

class Shallow_dive extends AdventureScene {
    constructor() {
        super("shallow_dive", "Shallow Water (Diving)", fishList);
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("UnderwaterShallow", "UnderwaterShallow.png");
        this.load.image("testFish","fish/TestFish.png");
        this.localFish = {
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],

            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            
            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],
            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],
            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],
            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],
            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],
            
            "Mamo": masterFishData["Mamo"],
            "Mamo": masterFishData["Mamo"],
            "Mamo": masterFishData["Mamo"],
            "Mamo": masterFishData["Mamo"],
            
            "Eyestripe Surgeonfish": masterFishData["Eyestripe Surgeonfish"],
            "Eyestripe Surgeonfish": masterFishData["Eyestripe Surgeonfish"],
            "Eyestripe Surgeonfish": masterFishData["Eyestripe Surgeonfish"],

            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],

            "Rudderfish": masterFishData["Rudderfish"],
            "Rudderfish": masterFishData["Rudderfish"],
            "Rudderfish": masterFishData["Rudderfish"],
            "Rudderfish": masterFishData["Rudderfish"],

            "Reef Triggerfish": masterFishData["Reef Triggerfish"],
            
            "Unicornfish": masterFishData["Unicornfish"],
            "Unicornfish": masterFishData["Unicornfish"],
            "Unicornfish": masterFishData["Unicornfish"],
            "Unicornfish": masterFishData["Unicornfish"],
            "Unicornfish": masterFishData["Unicornfish"],
            "Unicornfish": masterFishData["Unicornfish"],
            //"FishName": [startX (Approx), startY (Approx), endX (Approx), endY (Approx), speedX, speedY, scale]
        }

        this.selectedFish = [];

        let fishAmount = Phaser.Math.Between(6, 12);
        console.log(`Amount: ${fishAmount}`);
        for (let i = 0; i < fishAmount; i++) {
            let selected = Phaser.Math.Between(0, Object.keys(this.localFish).length - 1);
            let fish = Object.entries(this.localFish)[selected];
            this.load.image(fish[0], `fish/${fish[0]}.png`);
            this.selectedFish.push(fish[0]);
            console.log(`${fish[0]} (${selected})`);
        }
    }

    onEnter() {
        this.bg = this.add.image(this.viewCenter.X, this.viewCenter.y*0.75, "UnderwaterShallow");
        this.bg.setScale(6);
        this.bg.setDepth(-1);
        this.bg.setAlpha(0.85);
        let oceanCurrent = this.tweens.add({
            targets: this.bg,
            persist: true,
            x: "+= 1400",
            //y: { value: '+= 200', duration: 4500 },
            //alpha: { value: '-= 0.3', duration: 1100 },
            repeat: -1,
            duration: Phaser.Math.Between(1000, 5000),
            yoyo: true,
            ease: "Sine.InOut",

            onRepeat() {
                oceanCurrent.data[0]["duration"] = Phaser.Math.Between(2000, 5000);
            }
        });

        let testBounds = {
            x1: this.viewCenter.x,
            x2: this.viewCenter.x * 2,
            y1: this.viewCenter.y,
            y2: this.viewCenter.y * 1.25
        };
        
        for (let fish of this.selectedFish) {
            console.log(fish);
            //console.log(this.localFish[fish][4])
            makeFish(this, fish, this.localFish[fish][0], this.localFish[fish][1], this.localFish[fish][2], this.localFish[fish][3], this.localFish[fish][4], this.localFish[fish][5]).setScale(this.localFish[fish][6]).setDepth(-2);
            // makeFish(this, "testFish",testBounds["x1"],testBounds["y1"],testBounds["x2"],testBounds["y2"],2000,1200);
            
        }
        
        let testFish = 

        makeBox(this, "Back to the surface", this.viewCenter.x*1.6, this.viewCenter.y*0.1, { callback: this.gotoScene, cbArgs: "shallow", hoverText: "Catch your breath" });

        this.debugText = this.add.text(this.viewCenter.x*0.25,this.viewCenter.y*1.75,"Debug");
        this.debugText.setFontSize(this.s*2.5);
    }

    update() {
        //this.fish.setAlpha(0.75 - (this.fish.y / this.h));
        this.debugText.text = `Mouse: (${Math.trunc(this.input.activePointer.x)}, ${Math.trunc(this.input.activePointer.y)})`;

    }
}

class SouthDeep extends AdventureScene {
    constructor() {
        super("southDeep", "Southern Deep Waters", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("SouthSide", "SouthSide1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "SouthSide");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeBox(this, "Swim to the North", this.viewCenter.x*0.35, this.viewCenter.y * 1.9, { callback: this.gotoScene, cbArgs: "northDeep", hoverText: "Go to [Northern Deep Waters]" });

        makeBox(this, "Swim to the shallow", this.viewCenter.x*1.6, this.viewCenter.y*1.5, { callback: this.gotoScene, cbArgs: "shallow", hoverText: "Go to [Shallow]" });

        makeBox(this, "Dive under", this.viewCenter.x, this.viewCenter.y * 1.4, { callback: this.gotoScene, cbArgs: "southDeep_dive", hoverText: "Search for fish" });

        makeBox(this, "Swim to the rocks", this.viewCenter.x*0.3, this.viewCenter.y * 1.2, { callback: this.gotoScene, cbArgs: "rockWall", hoverText: "Go to [Southern Rock Wall]" });
    }
}

class SouthDeep_dive extends AdventureScene {
    constructor() {
        super("southDeep_dive", "Southern Deep Waters (Diving)", fishList);
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("UnderwaterDeep", "UnderwaterDeep.png");
        this.load.image("testFish", "fish/TestFish.png");
        this.localFish = {
            "Spectacled Parrotfish (male)": masterFishData["Spectacled Parrotfish (male)"],
            "Spectacled Parrotfish (male)": masterFishData["Spectacled Parrotfish (male)"],
            "Spectacled Parrotfish (male)": masterFishData["Spectacled Parrotfish (male)"],

            "Grey Damselfish": masterFishData["Grey Damselfish"],
            "Grey Damselfish": masterFishData["Grey Damselfish"],
            "Grey Damselfish": masterFishData["Grey Damselfish"],

            "Yelloweyed Surgeonfish": masterFishData["Yelloweyed Surgeonfish"],
            "Yelloweyed Surgeonfish": masterFishData["Yelloweyed Surgeonfish"],
            "Yelloweyed Surgeonfish": masterFishData["Yelloweyed Surgeonfish"],

            "Reef Triggerfish": masterFishData["Reef Triggerfish"],

            "Bluestripe Snapper": masterFishData["Bluestripe Snapper"],
            "Bluestripe Snapper": masterFishData["Bluestripe Snapper"],

            "Convict Tang": masterFishData["Convict Tang"],
            "Convict Tang": masterFishData["Convict Tang"],
            "Convict Tang": masterFishData["Convict Tang"],
            //"FishName": [startX (Approx), startY (Approx), endX (Approx), endY (Approx), speedX, speedY, scale]
        }

        this.selectedFish = [];

        let fishAmount = Phaser.Math.Between(6, 12);
        console.log(`Amount: ${fishAmount}`);
        for (let i = 0; i < fishAmount; i++) {
            let selected = Phaser.Math.Between(0, Object.keys(this.localFish).length-1);
            let fish = Object.entries(this.localFish)[selected];
            this.load.image(fish[0], `fish/${fish[0]}.png`);
            this.selectedFish.push(fish[0]);
            console.log(`${fish[0]} (${selected})`);
        }
    }

    onEnter() {
        this.bg = this.add.image(this.viewCenter.X, this.viewCenter.y, "UnderwaterDeep");
        this.bg.setScale(5);
        this.bg.setDepth(-1);
        this.bg.x = this.viewCenter.x + this.bg.width/2;

        for (let fish of this.selectedFish) {
            console.log(fish);
            //console.log(this.localFish[fish][4])
            this.tweens.add({
                targets: makeFish(this, fish, this.localFish[fish][0], this.localFish[fish][1], this.localFish[fish][2], this.localFish[fish][3], this.localFish[fish][4], this.localFish[fish][5]).setScale(this.localFish[fish][6]),
                persist: true,
                //x: "+= 1400",
                //y: { value: '+= 200', duration: 4500 },
                alpha: { value: '-= 0.7', duration: Phaser.Math.Between(1000, 5000) },
                repeat: -1,
                duration: Phaser.Math.Between(1000, 5000),
                yoyo: true,
                ease: "Sine.InOut",
            }); 
            // makeFish(this, "testFish",testBounds["x1"],testBounds["y1"],testBounds["x2"],testBounds["y2"],2000,1200);

        }
        
        makeBox(this, "Back to the surface", this.viewCenter.x * 1.6, this.viewCenter.y * 0.1, { callback: this.gotoScene, cbArgs: "southDeep", hoverText: "Catch your breath" });

        this.debugText = this.add.text(this.viewCenter.x * 0.25, this.viewCenter.y * 1.75, "Debug");
        this.debugText.setFontSize(this.s * 2.5);
    }

    update() {
        //this.fish.setAlpha(0.75 - (this.fish.y / this.h));
        this.debugText.text = `Mouse: (${Math.trunc(this.input.activePointer.x)}, ${Math.trunc(this.input.activePointer.y)})`;

    }
}

class RockWall extends AdventureScene {
    constructor() {
        super("rockWall", "Southern Rock Wall", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("DeepRocks", "DeepRocks.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "DeepRocks");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeBox(this, "Dive under", this.viewCenter.x, this.viewCenter.y, { callback: this.gotoScene, cbArgs: "rockWall_dive", hoverText: "Search for fish" });

        makeBox(this, "Swim to the deep", this.viewCenter.x * 1.6, this.viewCenter.y * 0.25, { callback: this.gotoScene, cbArgs: "southDeep", hoverText: "Go to [Southern Deep Waters]" });
    }
}

class RockWall_dive extends AdventureScene {
    constructor() {
        super("rockWall_dive", "Southern Rock Wall (Diving)", fishList);
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("UnderwaterRocks", "UnderwaterRocks.png");
        this.load.image("testFish", "fish/TestFish.png");
        this.localFish = {
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],

            "Christmas Wrasse": masterFishData["Christmas Wrasse"],
            "Christmas Wrasse": masterFishData["Christmas Wrasse"],
            "Christmas Wrasse": masterFishData["Christmas Wrasse"],

            "Belted Wrasse": masterFishData["Belted Wrasse"],
            "Belted Wrasse": masterFishData["Belted Wrasse"],
            "Belted Wrasse": masterFishData["Belted Wrasse"],


            "Bird Wrasse": masterFishData["Bird Wrasse"],
            "Bird Wrasse": masterFishData["Bird Wrasse"],

            "Manybar Goatfish": masterFishData["Manybar Goatfish"],
            "Manybar Goatfish": masterFishData["Manybar Goatfish"],
            "Manybar Goatfish": masterFishData["Manybar Goatfish"],

            "Needlefish": masterFishData["Needlefish"],
            "Needlefish": masterFishData["Needlefish"],

            "Trumpetfish": masterFishData["Trumpetfish"],
            "Trumpetfish": masterFishData["Trumpetfish"],
        }

        this.selectedFish = [];

        let fishAmount = Phaser.Math.Between(6, 12);
        console.log(`Amount: ${fishAmount}`);
        for (let i = 0; i < fishAmount; i++) {
            let selected = Phaser.Math.Between(0, Object.keys(this.localFish).length - 1);
            let fish = Object.entries(this.localFish)[selected];
            this.load.image(fish[0], `fish/${fish[0]}.png`);
            this.selectedFish.push(fish[0]);
            console.log(`${fish[0]} (${selected})`);
        }
    }

    onEnter() {
        this.bg = this.add.image(this.viewCenter.X, this.viewCenter.y, "UnderwaterRocks");
        this.bg.setScale(5);
        this.bg.setDepth(-1);
        this.bg.x = this.viewCenter.x + this.bg.width / 2;

        for (let fish of this.selectedFish) {
            console.log(fish);
            this.tweens.add({
                targets: makeFish(this, fish, this.localFish[fish][0], this.localFish[fish][1], this.localFish[fish][2], this.localFish[fish][3], this.localFish[fish][4], this.localFish[fish][5]).setScale(this.localFish[fish][6]),
                persist: true,
                scale: '*= 0.5',
                repeat: -1,
                duration: Phaser.Math.Between(3000, 5000),
                yoyo: true,
                ease: "Sine.InOut",
            });
        }

        makeBox(this, "Back to the surface", this.viewCenter.x * 1.6, this.viewCenter.y * 0.1, { callback: this.gotoScene, cbArgs: "rockWall", hoverText: "Catch your breath" });

        this.debugText = this.add.text(this.viewCenter.x * 0.25, this.viewCenter.y * 1.75, "Debug");
        this.debugText.setFontSize(this.s * 2.5);
    }

    update() {
        //this.fish.setAlpha(0.75 - (this.fish.y / this.h));
        this.debugText.text = `Mouse: (${Math.trunc(this.input.activePointer.x)}, ${Math.trunc(this.input.activePointer.y)})`;

    }
}

class NorthDeep extends AdventureScene {
    constructor() {
        super("northDeep", "Northern Deep Waters", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("NorthSide", "NorthSide1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "NorthSide");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeBox(this, "Swim to the shallow", this.viewCenter.x, this.viewCenter.y * 1.75, { callback: this.gotoScene, cbArgs: "shallow", hoverText: "Go to [Shallow]" });

        makeBox(this, "Swim to the South", this.viewCenter.x + this.w * 0.25, this.viewCenter.y, { callback: this.gotoScene, cbArgs: "southDeep", hoverText: "Go to [Southern Deep Waters]" });

        makeBox(this, "Swim to the shelf", this.viewCenter.x*0.8, this.viewCenter.y * 0.65, { callback: this.gotoScene, cbArgs: "shelf", hoverText: "Go to [Northern Shelf]" });

        makeBox(this, "Dive under", this.viewCenter.x, this.viewCenter.y*1.2, { callback: this.gotoScene, cbArgs: "northDeep_dive", hoverText: "Search for fish" });
    }
}

class NorthDeep_dive extends AdventureScene {
    constructor() {
        super("northDeep_dive", "Northern Deep Waters (Diving)", fishList);
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("UnderwaterDeep", "UnderwaterDeep.png");
        this.load.image("testFish", "fish/TestFish.png");
        this.localFish = {
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],

            "Spectacled Parrotfish (female)": masterFishData["Spectacled Parrotfish (female)"],
            "Spectacled Parrotfish (female)": masterFishData["Spectacled Parrotfish (female)"],
            "Spectacled Parrotfish (female)": masterFishData["Spectacled Parrotfish (female)"],

            "Grey Damselfish": masterFishData["Grey Damselfish"],
            "Grey Damselfish": masterFishData["Grey Damselfish"],
            "Grey Damselfish": masterFishData["Grey Damselfish"],

            "Mamo": masterFishData["Mamo"],
            "Mamo": masterFishData["Mamo"],

            "Yelloweyed Surgeonfish": masterFishData["Yelloweyed Surgeonfish"],
            "Yelloweyed Surgeonfish": masterFishData["Yelloweyed Surgeonfish"],
            "Yelloweyed Surgeonfish": masterFishData["Yelloweyed Surgeonfish"],

            "Leopard Shark": masterFishData["Leopard Shark"],

            "Bluestripe Snapper": masterFishData["Bluestripe Snapper"],
            "Bluestripe Snapper": masterFishData["Bluestripe Snapper"],

            "Convict Tang": masterFishData["Convict Tang"],
            "Convict Tang": masterFishData["Convict Tang"],
            "Convict Tang": masterFishData["Convict Tang"],
            "Convict Tang": masterFishData["Convict Tang"],
        }

        this.selectedFish = [];

        let fishAmount = Phaser.Math.Between(6, 12);
        console.log(`Amount: ${fishAmount}`);
        for (let i = 0; i < fishAmount; i++) {
            let selected = Phaser.Math.Between(0, Object.keys(this.localFish).length - 1);
            let fish = Object.entries(this.localFish)[selected];
            this.load.image(fish[0], `fish/${fish[0]}.png`);
            this.selectedFish.push(fish[0]);
            console.log(`${fish[0]} (${selected})`);
        }
    }

    onEnter() {
        this.bg = this.add.image(this.viewCenter.X, this.viewCenter.y, "UnderwaterDeep");
        this.bg.setScale(5);
        this.bg.setDepth(-1);
        this.bg.x = this.viewCenter.x + this.bg.width / 2;

        for (let fish of this.selectedFish) {
            console.log(fish);
            this.tweens.add({
                targets: makeFish(this, fish, this.localFish[fish][0], this.localFish[fish][1], this.localFish[fish][2], this.localFish[fish][3], this.localFish[fish][4], this.localFish[fish][5]).setScale(this.localFish[fish][6]),
                persist: true,
                //x: "+= 1400",
                //y: { value: '+= 200', duration: 4500 },
                alpha: { value: '-= 0.7', duration: Phaser.Math.Between(1000, 5000) },
                repeat: -1,
                duration: Phaser.Math.Between(1000, 5000),
                yoyo: true,
                ease: "Sine.InOut",
            });
        }

        makeBox(this, "Back to the surface", this.viewCenter.x * 1.6, this.viewCenter.y * 0.1, { callback: this.gotoScene, cbArgs: "northDeep", hoverText: "Catch your breath" });

        this.debugText = this.add.text(this.viewCenter.x * 0.25, this.viewCenter.y * 1.75, "Debug");
        this.debugText.setFontSize(this.s * 2.5);
    }

    update() {
        //this.fish.setAlpha(0.75 - (this.fish.y / this.h));
        this.debugText.text = `Mouse: (${Math.trunc(this.input.activePointer.x)}, ${Math.trunc(this.input.activePointer.y)})`;

    }
}

class Shelf extends AdventureScene {
    constructor() {
        super("shelf", "Northern Sea Shelf", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("BeachShelf", "BeachShelf1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "BeachShelf");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        makeBox(this, "Dive under (Shallow)", this.viewCenter.x*0.5, this.viewCenter.y*1.35, { callback: this.gotoScene, cbArgs: "shelf_shallowDive", hoverText: "Search for fish" });

        makeBox(this, "Dive under (Rocks)", this.viewCenter.x*1.2, this.viewCenter.y*1.1, { callback: this.gotoScene, cbArgs: "shelf_rockDive", hoverText: "Search for fish" });

        makeBox(this, "Swim to the deep", this.viewCenter.x * 1.45, this.viewCenter.y * 0.25, { callback: this.gotoScene, cbArgs: "northDeep", hoverText: "Go to [Northern Deep Waters]" });
    }
}

class Shelf_rockDive extends AdventureScene {
    constructor() {
        super("shelf_rockDive", "Northern Shelf (Rock Diving)", fishList);
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("UnderwaterRocks", "UnderwaterRocks.png");
        this.load.image("testFish", "fish/TestFish.png");
        this.localFish = {
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],

            "Christmas Wrasse": masterFishData["Christmas Wrasse"],
            "Christmas Wrasse": masterFishData["Christmas Wrasse"],

            "Belted Wrasse": masterFishData["Belted Wrasse"],
            "Belted Wrasse": masterFishData["Belted Wrasse"],

            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],
            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],
            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],
            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],

            "Saddle Wrasse": masterFishData["Saddle Wrasse"],
            "Saddle Wrasse": masterFishData["Saddle Wrasse"],
            "Saddle Wrasse": masterFishData["Saddle Wrasse"],

            "Bird Wrasse": masterFishData["Bird Wrasse"],
            "Bird Wrasse": masterFishData["Bird Wrasse"],

            "Blue Goatfish": masterFishData["Blue Goatfish"],
            "Blue Goatfish": masterFishData["Blue Goatfish"],
            "Blue Goatfish": masterFishData["Blue Goatfish"],

            "Manybar Goatfish": masterFishData["Manybar Goatfish"],
            "Manybar Goatfish": masterFishData["Manybar Goatfish"],

            "Moorish Idol": masterFishData["Moorish Idol"],
            "Moorish Idol": masterFishData["Moorish Idol"],
            "Moorish Idol": masterFishData["Moorish Idol"],

            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],

            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],

            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],

            "Needlefish": masterFishData["Needlefish"],

            "Trumpetfish": masterFishData["Trumpetfish"],
        }

        this.selectedFish = [];

        let fishAmount = Phaser.Math.Between(6, 12);
        console.log(`Amount: ${fishAmount}`);
        for (let i = 0; i < fishAmount; i++) {
            let selected = Phaser.Math.Between(0, Object.keys(this.localFish).length - 1);
            let fish = Object.entries(this.localFish)[selected];
            this.load.image(fish[0], `fish/${fish[0]}.png`);
            this.selectedFish.push(fish[0]);
            console.log(`${fish[0]} (${selected})`);
        }
    }

    onEnter() {
        this.bg = this.add.image(this.viewCenter.X, this.viewCenter.y, "UnderwaterRocks");
        this.bg.setScale(5);
        this.bg.setDepth(-1);
        this.bg.x = this.viewCenter.x + this.bg.width / 2;

        for (let fish of this.selectedFish) {
            console.log(fish);
            this.tweens.add({
                targets: makeFish(this, fish, this.localFish[fish][0], this.localFish[fish][1], this.localFish[fish][2], this.localFish[fish][3], this.localFish[fish][4], this.localFish[fish][5]).setScale(this.localFish[fish][6]),
                persist: true,
                scale: '*= 0.5',
                repeat: -1,
                duration: Phaser.Math.Between(3000, 5000),
                yoyo: true,
                ease: "Sine.InOut",
            });
        }

        makeBox(this, "Back to the surface", this.viewCenter.x * 1.6, this.viewCenter.y * 0.1, { callback: this.gotoScene, cbArgs: "shelf", hoverText: "Catch your breath" });

        this.debugText = this.add.text(this.viewCenter.x * 0.25, this.viewCenter.y * 1.75, "Debug");
        this.debugText.setFontSize(this.s * 2.5);
    }

    update() {
        //this.fish.setAlpha(0.75 - (this.fish.y / this.h));
        this.debugText.text = `Mouse: (${Math.trunc(this.input.activePointer.x)}, ${Math.trunc(this.input.activePointer.y)})`;

    }
}

class shelf_shallowDive extends AdventureScene {
    constructor() {
        super("shelf_shallowDive", "Northern Shelf (Shallow Diving)", fishList);
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("UnderwaterShallow", "UnderwaterShallow.png");
        this.load.image("testFish", "fish/TestFish.png");
        this.localFish = {
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],
            "Hawaiian Flagtail": masterFishData["Hawaiian Flagtail"],

            "Christmas Wrasse": masterFishData["Christmas Wrasse"],
            "Christmas Wrasse": masterFishData["Christmas Wrasse"],

            "Belted Wrasse": masterFishData["Belted Wrasse"],
            "Belted Wrasse": masterFishData["Belted Wrasse"],

            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],
            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],
            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],
            "Cleaner Wrasse": masterFishData["Cleaner Wrasse"],

            "Saddle Wrasse": masterFishData["Saddle Wrasse"],
            "Saddle Wrasse": masterFishData["Saddle Wrasse"],
            "Saddle Wrasse": masterFishData["Saddle Wrasse"],

            "Bird Wrasse": masterFishData["Bird Wrasse"],
            "Bird Wrasse": masterFishData["Bird Wrasse"],

            "Blue Goatfish": masterFishData["Blue Goatfish"],
            "Blue Goatfish": masterFishData["Blue Goatfish"],
            "Blue Goatfish": masterFishData["Blue Goatfish"],

            "Manybar Goatfish": masterFishData["Manybar Goatfish"],
            "Manybar Goatfish": masterFishData["Manybar Goatfish"],

            "Moorish Idol": masterFishData["Moorish Idol"],
            "Moorish Idol": masterFishData["Moorish Idol"],
            "Moorish Idol": masterFishData["Moorish Idol"],

            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],
            "Raccoon Butterflyfish": masterFishData["Raccoon Butterflyfish"],

            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],
            "Milletseed Butterflyfish": masterFishData["Milletseed Butterflyfish"],

            "Bluestripe Butterflyfish": masterFishData["Bluestripe Butterflyfish"],

            "Needlefish": masterFishData["Needlefish"],

            "Trumpetfish": masterFishData["Trumpetfish"],
        }

        this.selectedFish = [];

        let fishAmount = Phaser.Math.Between(6, 12);
        console.log(`Amount: ${fishAmount}`);
        for (let i = 0; i < fishAmount; i++) {
            let selected = Phaser.Math.Between(0, Object.keys(this.localFish).length - 1);
            let fish = Object.entries(this.localFish)[selected];
            this.load.image(fish[0], `fish/${fish[0]}.png`);
            this.selectedFish.push(fish[0]);
            console.log(`${fish[0]} (${selected})`);
        }
    }

    onEnter() {
        this.bg = this.add.image(this.viewCenter.X, this.viewCenter.y * 0.75, "UnderwaterShallow");
        this.bg.setScale(6);
        this.bg.setDepth(-1);
        this.bg.setAlpha(0.85);
        let oceanCurrent = this.tweens.add({
            targets: this.bg,
            persist: true,
            x: "+= 1400",
            //y: { value: '+= 200', duration: 4500 },
            //alpha: { value: '-= 0.3', duration: 1100 },
            repeat: -1,
            duration: Phaser.Math.Between(1000, 5000),
            yoyo: true,
            ease: "Sine.InOut",

            onRepeat() {
                oceanCurrent.data[0]["duration"] = Phaser.Math.Between(2000, 5000);
            }
        });

        let testBounds = {
            x1: this.viewCenter.x,
            x2: this.viewCenter.x * 2,
            y1: this.viewCenter.y,
            y2: this.viewCenter.y * 1.25
        };

        for (let fish of this.selectedFish) {
            console.log(fish);
            //console.log(this.localFish[fish][4])
            makeFish(this, fish, this.localFish[fish][0], this.localFish[fish][1], this.localFish[fish][2], this.localFish[fish][3], this.localFish[fish][4], this.localFish[fish][5]).setScale(this.localFish[fish][6]).setDepth(-2);
            // makeFish(this, "testFish",testBounds["x1"],testBounds["y1"],testBounds["x2"],testBounds["y2"],2000,1200);

        }

        let testFish =

            makeBox(this, "Back to the surface", this.viewCenter.x * 1.6, this.viewCenter.y * 0.1, { callback: this.gotoScene, cbArgs: "shelf", hoverText: "Catch your breath" });

        this.debugText = this.add.text(this.viewCenter.x * 0.25, this.viewCenter.y * 1.75, "Debug");
        this.debugText.setFontSize(this.s * 2.5);
    }

    update() {
        //this.fish.setAlpha(0.75 - (this.fish.y / this.h));
        this.debugText.text = `Mouse: (${Math.trunc(this.input.activePointer.x)}, ${Math.trunc(this.input.activePointer.y)})`;

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
            this.time.delayedCall(1000, () => this.scene.start("shore"));
        });
    }
}

class ParkingLot extends AdventureScene {
    constructor() {
        super("parkingLot", "The Parking Lot", fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("parkingLot", "ParkingLot.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "parkingLot");
        this.bg.setScale(2);
        this.bg.setDepth(-1);

        
        makeBox(this, dialogue[3], this.viewCenter.x, this.viewCenter.y * 0.75);
        makeBox(this, "Continue", this.viewCenter.x, this.viewCenter.y * 1.5, { callback: this.gotoScene, cbArgs: "outro", cbScope: this, hoverText: "" });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "Thanks for playing!").setFontSize(50);
        this.add.text(50, 100, `You found ${fishList["[numFound]"]} out of ${fishList["[knownTotal]"]} fish`).setFontSize(50);
    }
}

/*
class Template extends AdventureScene {
    constructor() {
        super("template", "Empty Room",fishList);
    }

    preload() {
        this.load.path = "assets/";

        this.load.image("bg", "BeachView1.png");
    }

    onEnter() {
        this.bg = this.add.image(this.w / 2 - this.w / 7, this.h / 2, "bg");
        this.bg.setScale(2);
        this.bg.setDepth(-1);
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
    scene: [TitleScreen, FishBoard, Shore, Shallow, Shallow_dive, SouthDeep, SouthDeep_dive, RockWall, RockWall_dive, NorthDeep, NorthDeep_dive, Shelf, Shelf_rockDive, shelf_shallowDive, ParkingLot, Outro],
    title: "Adventure Game",
});

