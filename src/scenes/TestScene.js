
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TestScene extends Phaser.Scene {

	constructor() {
		super("TestScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.layer();

		// bg
		const bg = this.add.tileSprite(0, 56, 256, 112, "bg");
		bg.setOrigin(0, 0);
		background.add(bg);

		// level
		const level = this.add.layer();

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 160, 128, 16);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3016250;
		rectangle_1.strokeColor = 0;
		level.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(0, 64, 16, 224);
		rectangle.isFilled = true;
		rectangle.fillColor = 3016250;
		rectangle.strokeColor = 0;
		level.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(160, 160, 128, 16);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 3016250;
		rectangle_2.strokeColor = 0;
		level.add(rectangle_2);

		// gameplay
		const gameplay = this.add.layer();

		// enemy0
		const enemy0 = this.add.sprite(224, 96, "enemy", 0);
		enemy0.play("enemy_fly");
		gameplay.add(enemy0);

		// player0
		const player0 = this.add.image(48, 144, "player", 0);
		gameplay.add(player0);

		// ui
		this.add.layer();

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
