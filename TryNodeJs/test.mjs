import fs from "node:fs"

let dir = fs.opendirSync("./")
console.log(dir)

for (const dirent of dir) {
    console.log(dirent.name)
}

console.log(Symbol())
