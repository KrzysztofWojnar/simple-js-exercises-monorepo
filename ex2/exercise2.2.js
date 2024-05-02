const fs = require('node:fs');
const getData = new Promise((resolve, reject) => {
    fs.readFile('./data/comments.json', 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
});

(async function(){
    const data = JSON.parse(await getData)

    // Ex 2.2
    // filter and return the ids (not postId) of comments which have 205 characters. Results should be sorted descending 
    // your code here
    console.log(data); // Delete this line

})().then(result => console.log(result));
