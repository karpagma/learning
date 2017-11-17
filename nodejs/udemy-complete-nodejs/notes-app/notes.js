const fs = require('fs');
const _ = require('lodash');
const {promisify} = require('util');
const fileStat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function readNotes() {
    try {
        const content = await readFile('notes-data.json', {encoding: 'UTF-8'});
        return JSON.parse(content);
    } catch(e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }
        return [];
    }
}

async function writeNotes(notes) {
    writeFile('notes-data.json', JSON.stringify(notes));
}

async function addNote(title, body) {
    let notes = await readNotes();
    const duplicateNote = notes.find(n => n.title === title);
    if (duplicateNote) {
        throw Error(`Note with ${title} already exists`);
    }

    const note = {
        title,
        body
    };
    notes.push(note)

    await writeNotes(notes);
}

async function getAll() {
    return readNotes();
}

async function getNote(title) {
    const notes = await readNotes();
    const note = notes.find(n => n.title === title);
    if (!note) {
        throw Error(`${title} not found`);
    }

    return note;
}

async function removeNote(title) {
    const notes = await readNotes();
    const note = notes.find(n => n.title === title);
    if (!note) {
        throw Error(`${title} not found`);
    }

    const newNotes = notes.filter(n => n.title !== title);
    writeNotes(newNotes);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
