console.log(111);
let { awaitWaring, hello } = await import("./father2.mjs");
awaitWaring();
console.log(hello);
