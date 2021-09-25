class View {
	state;
	parent;

	render(data) {
		this.state = data;
		const markup = this.generateMarkup();
		this.clear();
		this.parent.insertAdjacentHTML("afterbegin", markup);
	}

	clear() {
		this.parent.innerHTML = "";
	}

	generateMarkup() {
		// TODO
	}
}

export default View;
