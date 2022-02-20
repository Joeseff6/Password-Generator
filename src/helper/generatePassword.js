const generatePassword = (formObject) => {
  let possibleCharacters = "";
  if (formObject.lowercase) {possibleCharacters += "abcdefghijklmnopqrstuvwxyz"};
  if (formObject.uppercase) {possibleCharacters += "ABCDEFGHIJKLMOPQRSTUVWXYZ"};
  if (formObject.symbols) {possibleCharacters += "!@#$%^&*()"};
  if (formObject.numbers) {possibleCharacters += "0123456789"};
  let possibleCharactersLength = possibleCharacters.length;
  let generatedPassword = "";
  let generatedPasswordArray = [];
  let iterator = 1;
  while (iterator < formObject.charLength * formObject.numOfPasswords + 1) {
    generatedPassword += possibleCharacters[Math.floor(Math.random() * possibleCharactersLength)];
    if (generatedPassword.length === formObject.charLength) {
      generatedPasswordArray.push(generatedPassword);
      generatedPassword = "";
    }
    iterator++;
  }
  return generatedPasswordArray;
}

export default generatePassword;