class NoteWindowView {
	window = document.querySelector(".note-window-container");
	btnOk = this.window.querySelector(".btn-ok");
	btnCancel = this.window.querySelector(".btn-cancel");
	overlay = this.window.querySelector(".overlay");
	input = this.window.querySelector("input");
	textArea = this.window.querySelector("textarea");
	errorContainer = this.window.querySelector(".window__error");
	message = "عنوان را مقداردهی کنید.";

	constructor() {
		document.querySelector(".path").addEventListener("click", (e) => {
			if (!e.target.closest(".btn--add-note")) return;
			if (e.target.classList.contains("disable")) return;
			this.toggle();
		});
		this.overlay.addEventListener("click", this.toggle);
		this.btnCancel.addEventListener("click", (e) => {
			e.preventDefault();
			this.toggle();
		});
	}

	clear() {
		this.input.value = "";
		this.textArea.value = "";
		this.input.blur();
		this.textArea.blur();
	}

	toggle = () => {
		this.errorContainer.innerHTML = "";
		this.window
			.querySelector(".note-window")
			.classList.toggle("animate__hidden");
		this.window.classList.toggle("hidden");
		this.input.focus();
	};

	displayError() {
		this.errorContainer.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${this.message}`;
	}

	handleSubmit(handler) {
		this.btnOk.addEventListener("click", (e) => {
			e.preventDefault();
			if (!this.input.value) return this.displayError();

			const note = {
				title: this.input.value,
				text: this.textArea.value,
			};
			handler(note);
			this.toggle();
			this.clear();
		});
	}
}

export default new NoteWindowView();
