
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
		const player0 = this.add.sprite(32, 160, "player", 0);
		player0.play("player_run");

		// enemy0
		const enemy0 = this.add.sprite(128, 128, "enemy", 0);
		enemy0.play("enemy_fly");

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
