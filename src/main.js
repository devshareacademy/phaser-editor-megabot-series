import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";
import Title from "./scenes/Title.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		pixelArt: true,
		width: 256,
		height: 224,
		type: Phaser.AUTO,
        backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Level", Level);
	game.scene.add("Title", Title);
	game.scene.add("Preload", Preload, true);
});
