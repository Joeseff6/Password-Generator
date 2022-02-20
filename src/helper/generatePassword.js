const generatePassword = (formObject) => {
  let possibleCharacters = "";
  if (formObject.lowercase) {possibleCharacters += "abcdefghijklmnopqrstuvwxyz"};
  if (formObject.uppercase) {possibleCharacters += "ABCDEFGHIJKLMOPQRSTUVWXYZ"};
  if (formObject.symbols) {possibleCharacters += "!@#$%^&*()"};
  if (formObject.numbers) {possibleCharacters += "0123456789"};
  let possibleCharactersLength = possibleCharacters.length;
  let generatedPassword = "";
  let iterator = 1;
  while (iterator < formObject.charLength + 1) {
    generatedPassword += possibleCharacters[Math.floor(Math.random() * possibleCharactersLength)];
    iterator++;
  }
  return [generatedPassword];
}

export default generatePassword;