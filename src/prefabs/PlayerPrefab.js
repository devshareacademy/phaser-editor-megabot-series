
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setSize(28, 28, false);

		// leftKey
		const leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		this.leftKey = leftKey;
		this.rightKey = rightKey;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once(Phaser.GameObjects.Events.DESTROY, () => {
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;

	/* START-USER-CODE */

	// Write your code here.
	update() {
		if (!this.active) {
			return;
		}
		if (this.leftKey.isDown) {
			this.setVelocityX(-80);
			this.setFlipX(true);
			this.play("player_run", true);
		} else if (this.rightKey.isDown) {
			this.setVelocityX(80);
			this.setFlipX(false);
			this.play("player_run", true);
		} else {
			this.setVelocityX(0);
			this.play("player_idle", true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
