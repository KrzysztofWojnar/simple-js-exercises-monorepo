const fs = require('node:fs');
const getData = new Promise((resolve, reject) => {
    fs.readFile('./data/todos.json', 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
});

(async function(){
    const data = JSON.parse(await getData);

    // Ex 2.1
    // filter and display completed todos (titles of todos only)
    // your code here
    console.log(data); // Delete this line

})();
