// console.log("hi")
let express =require("express")
let app = express();
const fs = require('fs');
app.get("/json",function(req,res){
    res.send("json");
})

app.get("/html",function(req,res){
    res.send("html");
})
// app.get("/metrics",function(req,res){

//     fs.readFile('static-metrics.txt', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         const filePath = 'example.txt';
//         // Split the content by new lines
//         const lines = data.split('\n');

//         // Append '\n' to each line
//         const modifiedContent = lines.map(line => line + '<br>').join('');
//         // console.log(data);
//         fs.writeFile(filePath, modifiedContent, 'utf8', err => {
//             if (err) {
//               console.error('Error writing file:', err);
//               return;
//             }
//             console.log('File has been modified and saved successfully.');
//           });

//         res.setHeader('Content-Type', 'text/html');
//         res.send(modifiedContent);
//       });


// })

app.post("/metrics",function(req,res){

    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        // let html=`<pre style="word-wrap: break-word; white-space: pre-wrap;">`;
        // html=html+data+`<pre>`;
        // res.setHeader('Content-Type', 'text/html');
        // res.send(html);
        res.send(data);
      });
})

app.get("/metrics",function(req,res){

  fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // let html=`<pre style="word-wrap: break-word; white-space: pre-wrap;">`;
      // html=html+data+`<pre>`;
      // res.setHeader('Content-Type', 'text/html');
      // res.send(html);
      res.send(data);
    });
})
app.listen(8082)