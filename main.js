var word = prompt('Enter a word:');
var length = word.length;
var thirdChar = word.charAt(2);
var lower = word.toLowerCase();
var upper = word.toUpperCase();
var sentence = "I love to play with " + word + " whenever I'm in school.";
var subword = word.substring(1,4);

alert("You entered: " + word +
  "\nThere are " + length + " letters in the word." +
  "\nThe third character is '" + thirdChar + "'" +
  "\nLowercase: " + lower +
  "\nUppercase: " + upper +
  "\nExample: " + sentence +
  "\nSubword: " + subword);