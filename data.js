const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf-8");

console.log(data);
console.log("================================");

const convrtJson = JSON.parse(data);

console.log(convrtJson);

let dataFilter = [];

convrtJson.forEach((element) => {
  if (element.umur < 22) {
    dataFilter.push(element);
  }
});
console.log(dataFilter);
