let randomNum = Math.random();
let result;

if (randomNum < 0.5) {
  result = "Heads";
} else {
  result = "Tails";
}

console.log("Coin Flip Result: " + result);

if (result === "Heads") {
  console.log("The coin landed on Heads. It symbolizes a fresh start!");
} else {
  console.log("The coin landed on Tails. Looks like a chance to take a risk!");
}

let headsCount = 0;
let tailsCount = 0;

console.log("\nSimulating 10 coin flips:");

for (let i = 0; i < 10; i++) {
  let flip = Math.random() < 0.5 ? "Heads" : "Tails";
  console.log("Flip " + (i + 1) + ": " + flip);

  if (flip === "Heads") {
    headsCount++;
  } else {
    tailsCount++;
  }
}

console.log("\nAfter 10 flips:");
console.log("Heads: " + headsCount);
console.log("Tails: " + tailsCount);
