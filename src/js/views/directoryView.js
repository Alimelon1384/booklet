import View from "./view";

class DirectoryView extends View {
	parent = document.querySelector(".directories-container");

	generateMarkup() {
		return `
		<ul>
			${this.state
				.map(
					(directory) => `
						<li class="directory ${directory.opened ? "opened" : ""}" data-id="${
						directory.id
					}">
							<i class="directory__icon far fa-folder${directory.opened ? "-open" : ""}"></i>
							<h4 class="directory__title" title="${directory.title}">
							${directory.title}
							</h4>
							<h5 class="directory__date">${directory.date}</h5>
							<i class="directory__icon fas fa-trash-alt btn--trash"></i>
						</li>
            `
				)
				.join("")}
		</ul>
		`;
	}

	handleDeleteDir(handler) {
		this.parent.addEventListener("click", (e) => {
			if (!e.target.classList.contains("btn--trash")) return;
			const target = e.target.closest(".directory");
			handler(target.dataset.id);
		});
	}

	handleOpenDir(handler) {
		this.parent.addEventListener("click", (e) => {
			const target = e.target.closest(".directory");
			if (!target) return;

			handler(target.dataset.id);
		});
	}
}

export default new DirectoryView();
