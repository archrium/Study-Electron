// ==== libaries
const fs = require('fs');
const path = require('path');

// ==== variables | identifiers
todoField01 = document.getElementById('todoField01');
todoField02 = document.getElementById('todoField02');
todoButton01 = document.getElementById('todoButton01');

// :: define folder name
let pathName = './data';
// :: create folder if it does not exists
if (!fs.existsSync(pathName)){
    fs.mkdirSync(pathName);
}

// ==== Listener
todoButton01.addEventListener('click', function(){
    let file = path.join(pathName, todoField01.value + '.txt');
    let contents = todoField02.value;
    fs.writeFile(file, contents, function(err){
        if (err){ return console.log(err) }
        console.log("the file is created")
    })
})