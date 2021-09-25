import View from "./view";

class NoteView extends View {
	parent = document.querySelector(".notes-container");

	generateMarkup() {
		if (!this.state)
			return '<p class="note__message">ابتدا یک دفترچه بسازید<br>یا یکی را انتخاب کنید</p>';

		if (!this.state.notes.length)
			return "<p class='note__message'>این دفترچه خالی است<br>یک یادداشت جدید اضافه کنید</p>";

		return `${this.state.notes
			.map(
				(note) => `
                <div class="note" data-id="${note.id}">
					<div class="note__header">
						<h4 class="note__title">${note.title}</h4>
						<i class="note__icon fa fa-edit btn--view"></i>
						<i class="note__icon fas fa-trash-alt btn--trash"></i>
					</div>
					<div class="note__body">
						<h5 class="note__text">
							${note.text}
						</h5>
					</div>
				</div>
            `
			)
			.join("")}
			`;
	}

	handleDeleteNote(handler) {
		this.parent.addEventListener("click", (e) => {
			if (!e.target.classList.contains("btn--trash")) return;
			const target = e.target.closest(".note");
			handler(target.dataset.id);
		});
	}
}

export default new NoteView();
