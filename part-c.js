// 10:
const categories = ["Electronics", "Fashion", "Books", "Home"];
// 1 
console.log(categories[0]);
const lastIndex= categories.length-1;
console.log(categories[lastIndex]);
// 2
console.log(categories.includes("Books"));
// 3
console.log(categories.indexOf("Fashion"));
console.log(categories.indexOf("Sports"));
// 4
console.log(categories.push("Sports"));
const removed=categories.pop();
console.log(removed);
// 5
categories.splice(1,1, "Games");
console.log(categories);
// 11:
const stockAmounts = [4, 0, 7, 3, 0];
// א
