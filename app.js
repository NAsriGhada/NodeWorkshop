console.log('Starting app.js')

    // ! requiring internal modules and its functionalities
// const fs = require('fs')
    // ? this is one of the fs module functionalities
// fs.appendFileSync("greetings.txt", "my first Node application")

    // ! requiring external modules
const notes = require("./notes");
// console.log(notes.add(5, 7))

    // ! requiring third module parties: first create a package.json file
const yargs = require('yargs');
// console.log("Process", process.argv)
// console.log("Yargs", yargs.argv)

// const title = process.argv[4]
// console.log(title)

const titleTwo = yargs.argv.title
console.log(titleTwo)

const body = yargs.argv.body
console.log(body)

const command = yargs.argv._[0]
console.log(command)

// ? yargs is easier than argv to build interactive command line tools

switch (command) {
    case 'add':
        console.log("adding a note")
        notes.addingNote(titleTwo, body)
        break;
    case 'remove':
        console.log('removing note')
        notes.removingNote(titleTwo)
        break;
    case 'read':
        console.log('reading a note')
        notes.readNote(titleTwo)
        break;
    case 'list':
        console.log('listing all notes')
        notes.getAllNotes()
        break;
    default:
        console.log("Invalid command");
}