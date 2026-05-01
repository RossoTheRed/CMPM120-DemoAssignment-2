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


function findFish(fishFound) {
    if (fishData[fishFound] != null && fishData[fishFound] == false) {
        fishData[fishFound] = true;
        fishData[numFound] += 1;
    }
}


class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room",fishData);
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
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


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

