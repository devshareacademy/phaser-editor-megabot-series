
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnablePhysicsBodyScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if (!this.gameObject) {
			return;
		}
		this.gameObject.scene.physics.add.existing(this.gameObject, true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
