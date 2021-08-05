const yargs = require("yargs");
const { removeNotes } = require("./notes.js");
const notes = require("./notes.js");

// const msg = getNotes();
// console.log(msg);
// console.log(chalk.green("SUCESS!!!!!"));
// chalkmsg = chalk.inverse.red.bold("what the hell is wrong");
// console.log(chalkmsg);
// console.log(process.argv);
// console.log(process.argv[2]);

// console.log(process.argv);  these will give us  how to use chalk and argv
// yargs.command({
//   command: "add",
//   describe: "add a note",
//   builder: {
//     title: {
//       type: "string",
//       demandOption: "true",
//       describe: "my title",
//     },

//     body: {
//       type: "string",
//       demandOption: "true",
//       describe: "app's body",
//     },
//   },
//   handler: function () {
//     console.log("title: " + argv.title);
//     console.log("body: " + argv.body);
//     console.log("whole app ", argv);
//   },
// });
// yargs.command({
//   command: "remove",
//   describe: "removing a note",
//   handler: function () {
//     console.log("removing a note");
//   },
// });
// yargs.command({
//   command: "List",
//   describe: "listing a note",
//   handler: function () {
//     console.log("listing a note");
//   },
// });
// yargs.command({
//   command: "read",
//   describe: "reading a note",
//   handler: function () {
//     console.log("reading a note");
//   },
// });

// yargs.parse();

//2nd revision lecture 16 : yargs are used to parse the value in a better way..instead of "process" use yargs
// yargs.command({
//   command: "list",
//   describe: "list items",
//   handler: function () {
//     console.log("listing all the note");
//   },
// });
// yargs.command({
//   command: "include",
//   describe: "incude a new body",
//   builder: {
//     title: {
//       type: "string",
//       demandOption: true,
//       describe: "include body",
//     },
//     body: {
//       type: "string",
//       demandOption: true,
//       describe: "include note",
//     },
//   },
//   handler: function (argv) {
//     console.log("title :" + argv.title);
//     console.log("body : " + argv.body);
//   },
// });
// yargs.parse();

yargs.command({
  command: "add",
  builder: {
    title: {
      type: "string",
      demandOption: "true",
    },
    body: {
      type: "string",
      demandOption: "true",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});
yargs.command({
  command: "list",
  handler() {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});
yargs.parse();
