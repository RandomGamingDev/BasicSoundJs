class BasicSound {
	constructor(loc) {
		this.loc = loc;
	}

	play() {
		const audio = new Audio(this.loc);
		audio.play();
		return audio;
	}
}