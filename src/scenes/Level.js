
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.tileSprite(0, 56, 256, 112, "bg");
		bg.setOrigin(0, 0);

		// player0
		this.add.image(32, 160, "player", 0);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.cameras.main.setBackgroundColor('0x000000');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
