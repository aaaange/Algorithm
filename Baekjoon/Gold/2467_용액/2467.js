const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = N - 1;
let min_value = Infinity;
let result = [];

while (left < right) {
    let mix = arr[left] + arr[right]
    if (abs(mix) < min_value ) {
        min_value = abs(mix)
        result = [arr[left], arr[right]]
    }

    if (mix > 0) {
        right --
    } else {
        left ++
    }
}

console.log(result[0], result[1]);