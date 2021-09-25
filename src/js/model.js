import uniqid from "uniqid";

export const state = {
	directories: [],
	currentDir: undefined,
};

const formateDate = function () {
	return Intl.DateTimeFormat("fa-IR").format(new Date());
};

export const createDir = function (name) {
	const dir = {
		id: uniqid(),
		title: name,
		date: formateDate(),
		notes: [],
	};

	state.directories.push(dir);
	updateDB();
};

export const removeDir = function (id) {
	const index = state.directories.findIndex((dir) => dir.id === id);
	if (state.directories[index].opened) currentDir = undefined;
	state.directories.splice(index, 1);
	updateDB();
};

export const removeNote = function (id) {
	const index = state.currentDir.notes.findIndex((dir) => dir.id === id);
	state.currentDir.notes.splice(index, 1);
	updateDB();
};

export const createNote = function (note) {
	const { title, text } = note;
	state.currentDir.notes.unshift({
		id: uniqid(),
		title,
		text,
		date: formateDate(),
	});
	updateDB();
};

export const openDir = function (id) {
	state.directories.forEach((dir) => (dir.opened = false));
	const dir = state.directories.find((dir) => dir.id == id);
	dir.opened = true;
	state.currentDir = dir;
};

const updateDB = function () {
	localStorage.setItem("directories", JSON.stringify(state.directories));
};

const getDB = function () {
	const json = localStorage.getItem("directories");
	if (!json || !json.length) return undefined;
	return JSON.parse(json);
};

const clearDB = function () {
	localStorage.removeItem("directories");
};

const init = function () {
	if (!getDB()) {
		state.directories.push({
			id: uniqid(),
			title: "اولین دفترچه (نمونه)",
			date: formateDate(),
			notes: [
				{
					id: uniqid(),
					title: "به رسالات خود خوش آمدید",
					text: "شما میتوانید براحتی با استفاده از قابلیت های این برنامه، یادداشت های خود را به سادگی و با سرعت ذخیره کرده و همیشه همراه خود داشته باشید",
					date: formateDate(),
				},
			],
			opened: false,
		});
	} else {
		state.directories = getDB();
		state.directories.forEach((dir) => (dir.opened = false));
	}
};

init();
