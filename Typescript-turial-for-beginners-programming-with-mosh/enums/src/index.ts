// Old Javascript way
const small = 1;
const medium = 2;
const large = 3;

// PascalCase
enum Size { Small, Medium, Large }
// Explicit examples
enum SizeString { Small = "s", Medium = "m", Large = "l"}
const enum SizeInt {Small = 1, Medium, Large}

console.log(Size.Medium, SizeString.Medium, SizeInt.Medium)
