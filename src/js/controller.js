import * as model from "./model";
import DirectoryView from "./views/directoryView";
import NoteView from "./views/noteView";
import PathView from "./views/pathView";
import DirWindowView from "./views/dirWindowView";
import NoteWindowView from "./views/noteWindowView";\

import 'core-js/stable'
import 'regenerator-runtime/runtime'

const controlAddDir = function (dir) {
	model.createDir(dir);
	DirectoryView.render(model.state.directories);
};

const controlOpenDir = function (id) {
	const note = model.state.directories.find((note) => note.id === id);
	if (note.opened) {
		note.opened = false;
		model.state.currentDir = undefined;
	} else model.openDir(id);

	DirectoryView.render(model.state.directories);
	PathView.render(model.state.currentDir);
	NoteView.render(model.state.currentDir);
};

const controlAddNote = function (note, id) {
	console.log(id);
	if (id) {
		model.updateNote(id, note);
	} else model.createNote(note);

	NoteView.render(model.state.currentDir);
};

const controlDeleteDir = function (id) {
	model.removeDir(id);
	DirectoryView.render(model.state.directories);
	NoteView.render(model.state.currentDir);
};

const controlDeleteNote = function (id) {
	model.removeNote(id);
	NoteView.render(model.state.currentDir);
};

const controlEditNote = function (id) {
	// find the note
	const note = model.searchNote(id);
	// open note editor window
	NoteWindowView.toggle(id);
	// insert data into window
	NoteWindowView.insertData(note.title, note.text);
};

const init = function () {
	DirectoryView.render(model.state.directories);
	NoteView.render(model.state.currentDir);
	PathView.render(model.state.currentDir);
	DirWindowView.handleSubmit(controlAddDir);
	DirectoryView.handleOpenDir(controlOpenDir);
	NoteWindowView.handleSubmit(controlAddNote);
	DirectoryView.handleDeleteDir(controlDeleteDir);
	NoteView.handleDeleteNote(controlDeleteNote);
	NoteView.handleEditNote(controlEditNote);
	DirectoryView.handleOpenCloseDirs();
};
init();
