
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

		// zKey
		const zKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.zKey = zKey;

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
	/** @type {Phaser.Input.Keyboard.Key} */
	zKey;
	/** @type {number} */
	speed = 80;
	/** @type {number} */
	jumpForce = 200;

	/* START-USER-CODE */

	// Write your code here.
	update() {
		if (!this.active) {
			return;
		}
		if (this.leftKey.isDown) {
			this.setVelocityX(this.speed * -1);
			this.setFlipX(true);
			this.play("player_run", true);
		} else if (this.rightKey.isDown) {
			this.setVelocityX(this.speed);
			this.setFlipX(false);
			this.play("player_run", true);
		} else {
			this.setVelocityX(0);
			this.play("player_idle", true);
		}
		if (Phaser.Input.Keyboard.JustDown(this.zKey) && this.body.blocked.down) {
			this.setVelocityY(this.jumpForce * -1);
			this.scene.sound.play('jump');
		}
		if (!this.body.blocked.down) {
			this.play('player_jump', true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
