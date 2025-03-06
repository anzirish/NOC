function largest(a, b, c) {
  let largest = a > b ? (a > c ? a : c) : b > c ? b : c;

  return largest;
}

console.log(largest(23, 12, 2));
