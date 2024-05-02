const fs = require('node:fs');
const getData = new Promise((resolve, reject) => {
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
});

(async function(){
    const data = JSON.parse(await getData)

    // Ex 2.2
    // filter and display the names (first + last) of only those users whose email ends with ".biz" 
    // your code here
    console.log(data); // Delete this line
    
})();
