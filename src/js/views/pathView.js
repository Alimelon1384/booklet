import View from "./view";

class PathView extends View {
	parent = document.querySelector(".path");

	generateMarkup() {
		return `
		<div class="path__icons">
			<figure class="path__icon btn--add-note ${this.state ? "" : "disable"}">
				<i class="fas fa-file-medical"></i>
			</figure>
		</div>
        <div class="path__directory">دفترچه: ${this.state?.title || "..."}</div>
        <div class="path__notes">یادداشت‌ها: ${
			this.state?.notes.length || "0"
		}</div>
        <div class="path__date">تاریخ ایجاد: ${this.state?.date || "..."}</div>
        `;
	}
}

export default new PathView();
