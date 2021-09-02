// const fs = require('fs')
// fs.mkdirSync('Folder-1')
// fs.writeFileSync('Folder-1/index.txt', 'Hello Beautiful')
// fs.appendFileSync('Folder-1/index.txt', ' World')
// const data = fs.readFileSync('Folder-1/index.txt', 'utf-8')
// console.log(data)
// fs.renameSync('Folder-1/index.txt', 'Folder-1/Hello.txt')
// fs.unlinkSync('Folder-1/hello.txt')
// fs.rmdirSync('Folder-1')
var test = require("./require_test");
var tst = new test.T();
var tst1 = new test.P();
console.log(tst.print());
console.log(tst1.print());
// var test3 = new test2();
// console.log(test3.print2());
