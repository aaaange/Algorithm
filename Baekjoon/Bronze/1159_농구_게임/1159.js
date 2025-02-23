const fs = require("fs"); 
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = parseInt(input[0])

const member = []

for (let i = 1; i < N + 1 ; i ++) {
    member.add(input[i])
}

console.log(member)