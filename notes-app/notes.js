const chalk = require("chalk");
const fs = require("fs");
const { parse } = require("path");
const getNotes = function () {
  return "your notes..";
};
// const addNote = function (title, body) {          // ///// filter method goes through all the elements in an array and returns an array consisting of removed or filtered elements... and find method finds the given element and returns the array of that element//////// SO USE "FIND" METHOD HERE
//   const note = loadNote();
//   const duplicateNotes = note.filter((note) => {
//     return note.title === title;
//   });
//   if (duplicateNotes.length === 0) {
//     note.push({ title: title, body: body });
//     saveNote(note);
//     console.log(chalk.green("new title got added"));
//   } else {
//     console.log(chalk.red(`${title} title already taken`));
//   }
// };
const addNote = (title, body) => {
  const note = loadNote(); //find method will take an array return elements(note: Not an array of elements) of duplicate elements
  const duplicateNotes = note.find((note) => {
    return note.title === title;
  });
  if (!duplicateNotes) {
    // so for "no duplicate elements" condition to be true .. "!" is used
    note.push({ title: title, body: body });
    saveNote(note);
    console.log(chalk.green("new title got added"));
  } else {
    console.log(chalk.red(`${title} title already taken`));
  }
};
const saveNote = function (notes) {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};
const loadNote = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
const removeNotes = function (title) {
  const note = loadNote();
  const notesToKeep = note.filter((notes) => {
    return notes.title !== title;
  });
  if (notesToKeep.length < note.length) {
    console.log(chalk.green(`${title} got removed`));
    saveNote(notesToKeep);
  } else {
    console.log(chalk.red("nothing got removed"));
  }
};
const listNotes = () => {
  const note = loadNote();
  console.log(note);
  note.forEach((element) => {
    //console.log(element); this proves foreach takes only arrays and without JSON value inside those arrays
    console.log(element.title);
  });
};
const readNotes = (title) => {
  const notes = loadNote();
  const read = notes.find((note) => {
    return note.title === title;
  });
  //console.log(read) this will prove "find" does not return an array but just the element found inside the array and since "for each" only takes an array thus 'for each' wont work here
  if (read) {
    console.log(chalk.yellow.inverse(read.title));
    console.log(read.body);
  } else {
    console.log(chalk.red.inverse("Cant read Note"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
