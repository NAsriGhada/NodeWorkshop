console.log("starting notes.js");

// ! A TEST
//  const add = (x, y) => {
//     return x + y
// }

// module.exports = {
//     add: add
//     // or simply:
//     // add
// }

const fs = require("fs");
const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    return [];
  }
};
// todo Adding notes
const addingNote = (title, body) => {
  // ? read the file
  let notes = fetchNotes();
  const note = {
    title: title,
    body: body,
    // or simply: title, body
  };
  if (!Array.isArray(notes)) {
    notes = [];
  }
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));
};

// todo removing notes
const removingNote = (title) => {
  // ? get all notes
  let notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
};

// todo reading a note
const readNote = (title) => {
  // ? get all notes
  let notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title);
  // fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
  console.log(
    `title: ${filteredNotes[0].title} body: ${filteredNotes[0].body}`
  );
};

// todo getting all notes
const getAllNotes = () => {
  // ? get all notes
  let notes = fetchNotes();
  notes.forEach((note) => {
    for (let item in note) {
      console.log(`${item}: ${note[item]} ${"\n"}`);
    }
  });
};
module.exports = {
  addingNote,
  removingNote,
  readNote,
  getAllNotes,
};
