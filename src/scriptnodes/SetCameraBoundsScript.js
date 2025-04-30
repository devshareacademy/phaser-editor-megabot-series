
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetCameraBoundsScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	x = 0;
	/** @type {number} */
	y = 0;
	/** @type {number} */
	width = 768;
	/** @type {number} */
	height = 224;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if (!this.scene) {
			return;
		}
		this.scene.cameras.main.setBounds(this.x, this.y, this.width, this.height);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
