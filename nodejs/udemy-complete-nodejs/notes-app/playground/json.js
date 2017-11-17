const obj = {
    name: 'Andrew'
};

const stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj)

const personString = '{"name":"Andrew", "age": 25}';
const jsonObj = JSON.parse(personString);
console.log(jsonObj);

const fs = require('fs');

const note = {
    title: 'Some title',
    body: 'Some body'
};

fs.writeFile('notes.json', JSON.stringify(note), err => {
    if (err) {
        return console.error(err);
    }

    fs.readFile('notes.json', (err, data) => {
        if (err) {
            return console.error(err);
        }

        const notesObj = JSON.parse(data.toString());
        console.log(notesObj);
    });
});
