const fs = require('fs');
const { json } = require('stream/consumers');


const [,,command] = process.argv;

if(command == "create"){
    const [,,,title] = process.argv;
    let todos =  JSON.parse(fs.readFileSync('./todos.json',{encoding: 'utf8'}));
    todos.push({title: title});  
    fs.writeFileSync('./todos.json',JSON.stringify(todos));
   
}else if(command=="list"){
    let todos =  JSON.parse(fs.readFileSync('./todos.json',{encoding: 'utf8'}));
    console.log(todos);

}else if(command == "delete"){
    const [,,,title] = process.argv;
    let todos =  JSON.parse(fs.readFileSync('./todos.json',{encoding: 'utf8'}));
    let index = todos.findIndex(todo => todo.title == title);
    todos.splice(index,1);
    fs.writeFileSync('./todos.json',JSON.stringify(todos));
}else if (command == "update"){
    const [,,,title] = process.argv;
    const [,,,,utitle] = process.argv;
    let todos =  JSON.parse(fs.readFileSync('./todos.json',{encoding: 'utf8'}));
    let i = todos.findIndex(todo => todo.title == title);
    todos.splice(i,1,{title : utitle});
    fs.writeFileSync('./todos.json',JSON.stringify(todos));
}