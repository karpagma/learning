const yargs = require('yargs');
const notes = require('./notes.js');

const title = {describe: 'Title of note', demand: true, alias: 't'};
const body = {describe: 'Body of note', demand: true, alias: 'b'};

const argv = yargs
    .command('add', 'Add a new note', {title, body})
    .command('list', 'List all notes')
    .command('read', 'Read a note', {title})
    .command('remove', 'Remove a note', {title})
    .help()
    .argv;

var command = argv._[0];

const print = note => {
    console.log('---');
    console.log(`Title : ${note.title}`);
    console.log(`Body  : ${note.body}`);
    console.log('---');
}

async function main() {
    try {
        if (command === 'add') {
            await notes.addNote(argv.title, argv.body);
            console.log('Note added');
        } else if (command === 'list') {
            const entries = await notes.getAll();
            entries.forEach(n => print(n));
        } else if (command === 'read') {
            const note = await notes.getNote(argv.title);
            print(note);
        } else if (command === 'remove') {
            await notes.removeNote(argv.title);
            console.log('Note removed');
        } else {
            console.log('Command not recognized');
        }
    } catch(e) {
        console.error(e);
    }
}

main();
