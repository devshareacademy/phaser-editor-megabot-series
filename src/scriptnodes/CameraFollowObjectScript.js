
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CameraFollowObjectScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	targetGameObject;
	/** @type {number} */
	lerpX = 0.5;
	/** @type {number} */
	lerpY = 0.5;
	/** @type {number} */
	deadZoneWidth = 100;
	/** @type {number} */
	deadZoneHeight = 100;

	/* START-USER-CODE */


	// Write your code here.
	awake() {
		if (!this.scene || !this.targetGameObject) {
			return;
		}
		this.scene.cameras.main.startFollow(this.targetGameObject, true, this.lerpX, this.lerpY).setDeadzone(this.deadZoneWidth, this.deadZoneHeight);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
