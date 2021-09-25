class DirWindowView {
	btnOpen = document.querySelector(".btn--add-dir");
	window = document.querySelector(".dir-window-container");
	btnOk = this.window.querySelector(".btn-ok");
	btnCancel = this.window.querySelector(".btn-cancel");
	overlay = this.window.querySelector(".overlay");
	input = this.window.querySelector("input");
	errorContainer = this.window.querySelector(".window__error");
	message = "فیلد خالی است.";

	constructor() {
		this.btnOpen.addEventListener("click", this.toggle);
		this.overlay.addEventListener("click", this.toggle);
		this.btnCancel.addEventListener("click", this.toggle);
	}

	clear() {
		this.input.value = "";
		this.input.blur();
	}

	toggle = () => {
		this.clear();
		this.errorContainer.innerHTML = "";
		this.window
			.querySelector(".dir-window")
			.classList.toggle("animate__hidden");
		this.window.classList.toggle("hidden");
		this.input.focus();
	};

	displayError() {
		this.errorContainer.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${this.message}`;
	}

	handleSubmit(handler) {
		this.btnOk.addEventListener("click", () => {
			if (!this.input.value) return this.displayError();

			handler(this.input.value);
			this.toggle();
		});

		this.window.addEventListener("keypress", (e) => {
			if (e.key !== "Enter") return;

			handler(this.input.value);
			this.toggle();
		});
	}
}

export default new DirWindowView();
