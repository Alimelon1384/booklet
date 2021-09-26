import View from "./view";

class DirectoryView extends View {
	parent = document.querySelector(".directories-container");
	btnOpen = document.querySelector(".btn--open-dirs");
	btnClose = document.querySelector(".btn--close-dirs");

	handleOpenCloseDirs() {
		const dirs = document.querySelector(".directories");
		this.btnOpen.addEventListener("click", () => {
			dirs.classList.toggle("open");
			dirs.classList.toggle("close");
		});

		this.btnClose.addEventListener("click", () => {
			dirs.classList.toggle("open");
			dirs.classList.toggle("close");
		});
	}

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
		const dirs = document.querySelector(".directories");

		this.parent.addEventListener("click", (e) => {
			const target = e.target.closest(".directory");
			if (!target || e.target.classList.contains("btn--trash")) return;

			dirs.classList.toggle("open");
			dirs.classList.toggle("close");

			handler(target.dataset.id);
		});
	}
}

export default new DirectoryView();
