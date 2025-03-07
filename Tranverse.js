let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let result = "";

for (key in book) {
  result += `${key}: ${book[key]} `;
}

console.log(result);
