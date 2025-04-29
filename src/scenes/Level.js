
// You can write more code here

/* START OF COMPILED CODE */

import EnablePhysicsBodyScript from "../scriptnodes/EnablePhysicsBodyScript.js";
import PlayerPrefab from "../prefabs/PlayerPrefab.js";
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

		// backgroundLayer
		const backgroundLayer = this.add.layer();

		// backgroundTileSprite
		const backgroundTileSprite = this.add.tileSprite(0, 56, 256, 112, "bg");
		backgroundTileSprite.setOrigin(0, 0);
		backgroundLayer.add(backgroundTileSprite);

		// levelLayer
		const levelLayer = this.add.layer();

		// floor1
		const floor1 = this.add.rectangle(0, 160, 128, 16);
		floor1.setOrigin(0, 0);
		floor1.isFilled = true;
		floor1.fillColor = 3016250;
		floor1.strokeColor = 0;
		levelLayer.add(floor1);

		// enablePhysicsBodyScript
		new EnablePhysicsBodyScript(floor1);

		// floor2
		const floor2 = this.add.rectangle(160, 160, 128, 16);
		floor2.setOrigin(0, 0);
		floor2.isFilled = true;
		floor2.fillColor = 3016250;
		floor2.strokeColor = 0;
		levelLayer.add(floor2);

		// enablePhysicsBodyScript_2
		new EnablePhysicsBodyScript(floor2);

		// wall
		const wall = this.add.rectangle(0, 64, 16, 224);
		wall.isFilled = true;
		wall.fillColor = 3016250;
		wall.strokeColor = 0;
		levelLayer.add(wall);

		// enablePhysicsBodyScript_1
		new EnablePhysicsBodyScript(wall);

		// gameplayLayer
		const gameplayLayer = this.add.layer();

		// player
		const player = new PlayerPrefab(this, 48, 144);
		gameplayLayer.add(player);

		// enemy0
		const enemy0 = this.add.sprite(244, 96, "enemy", 0);
		gameplayLayer.add(enemy0);

		// uiLayer
		const uiLayer = this.add.layer();

		// lifeBar
		const lifeBar = this.add.image(8, 8, "lifebar", 0);
		lifeBar.setOrigin(0, 0);
		uiLayer.add(lifeBar);

		// lists
		const collisionObjects = [wall, floor2, floor1];

		// collider
		this.physics.add.collider(player, collisionObjects);

		this.collisionObjects = collisionObjects;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle[]} */
	collisionObjects;

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
