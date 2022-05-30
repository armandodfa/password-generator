export class PasswordSet {
  static getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  static getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  static getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  static getRandomSymbols() {
    let symbolsStr = "!@#$%(){}[]/";
    return symbolsStr[Math.floor(Math.random() * symbolsStr.length)];
  }
  static getPasswordObj(state) {
    let passwordObj = {};
    for (let key of Object.keys(state)) {
      if (typeof state[key] === "boolean" && state[key]) {
        passwordObj = {
          ...passwordObj,
          [key]: state[key],
        };
      }
    }
    return passwordObj;
  }
  static generedPassword(passwordObj, passwordLength) {
    let thePassword = "";
    for (
      let i = 0;
      i < Number(passwordLength);
      i += Object.keys(passwordObj).length
    ) {
      if (passwordObj.lowerLetters)
        thePassword += `${this.getRandomLowerCase()}`;
      if (passwordObj.upperLetters)
        thePassword += `${this.getRandomUpperCase()}`;
      if (passwordObj.numbers) thePassword += `${this.getRandomNumbers()}`;
      if (passwordObj.symbols) thePassword += `${this.getRandomSymbols()}`;
    }
    return thePassword;
  }
}
