const fs = require('fs');

//creating file sync
fs.writeFileSync("hii.txt", "Hey")
console.log("Writen File Successfully!");
  
// // //creating file async
fs.writeFile("hola.text", "HOLA", ()=>{
    try {
        console.log("Writen File Successfully  in hola.txt!");
    } catch (error) {
        console.log("error", error);
    }
})
  
// append in files sync
fs.appendFileSync("hii.txt", "hey\n")
console.log("Append sync File Successfully!");

//append in files async
fs.appendFile("hola.text", "Heya\n", ()=>{
    try {
        console.log("Append async File Successfully!");
    } catch (error) {
        console.log("error", error);
    }
})

//reading sync file
const res = fs.readFileSync("programming.txt", "utf-8")
console.log(res);

//reading async file
fs.readFile("programming.txt", "utf-8", function name(err, data) {
    console.log(data);
})
