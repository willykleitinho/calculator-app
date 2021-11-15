var themeNow = 1;
const themeIndicator = document.getElementById("theme-indicator");
const cssProps = document.querySelector(":root");
const resultScreen = document.getElementById("result-screen");
var calc = {
  current: 0,
  operation: undefined,
  operand1: undefined,
  operand2: 0,
}

// TODO
function addOperation(operation) {
  switch(operation) {
    case "x":
    case "/":
    case "+":
    case "-":
  }
}

// TODO 
function addNumber(n) {
  calc.operand2 = calc.operand2 * 10 + n;
  resultScreen.innerText = calc.operand2;
}


// TODO
function updateResult() {
  if (typeof calc.operand1 == "number" && typeof calc.operand2 == "number" && calc.operation) {
    let result;
    switch(calc.operation) {
      case "+":
        result = calc.operand1 + calc.operand2;
        break;
      case "-":
        result = calc.operand1 - calc.operand2;
        break;
      case "/":
        result = calc.operand1 / calc.operand2;
        break;
      case "x":
        result = calc.operand1 * calc.operand2;
        break;
    }
    calc.current = result.toString();
    calc.operand1 = result;
    calc.operation = undefined;
    calc.operand2 = undefined;
  } else if (typeof calc.operand1 == "number" && typeof calc.operand2 == "undefined" && typeof calc.operation == "undefined") {}
}

// Application themes
const themes = {
  theme1: {
    clrBgMain: "hsl(222, 26%, 31%)",
    clrBgToggle: "hsl(223, 31%, 20%)",
    clrBgScreen: "hsl(224, 36%, 15%)",

    clrFontButton: "hsl(221, 14%, 31%)",
    clrFontResult: "#fff",

    clrKey: "hsl(30, 25%, 89%)",
    clrKeyShadow: "hsl(28, 16%, 65%)",
    clrKeySecondary: "hsl(225, 21%, 49%)",
    clrKeySecondaryShadow: "hsl(224, 28%, 35%)",
    clrKeyStrong: "hsl(6, 63%, 50%)",
    clrKeyStrongShadow: "hsl(6, 70%, 34%)",
    clrKeyStrongFont: "#fff",

    indicator: "0%"
  },
  theme2: {
    clrBgMain: "hsl(0, 0%, 90%)",
    clrBgToggle: "hsl(0, 5%, 81%)",
    clrBgScreen: "hsl(0, 0%, 93%)",

    clrFontButton: "hsl(60, 10%, 19%)",
    clrFontResult: "hsl(60, 10%, 19%)",

    clrKey: "hsl(45, 7%, 89%)",
    clrKeyShadow: "hsl(35, 11%, 61%)",
    clrKeySecondary: "hsl(185, 42%, 37%)",
    clrKeySecondaryShadow: "hsl(185, 58%, 25%)",
    clrKeyStrong: "hsl(25, 98%, 40%)",
    clrKeyStrongShadow: "hsl(25, 99%, 27%)",
    clrKeyStrongFont: "#fff",

    indicator: "36%"
  },
  theme3: {
    clrBgMain: "hsl(268, 75%, 9%)",
    clrBgToggle: "hsl(268, 71%, 12%)",
    clrBgScreen: "hsl(268, 71%, 12%)",

    clrFontButton: "hsl(52, 100%, 62%)",
    clrFontResult: "hsl(52, 100%, 62%)",

    clrKey: "hsl(268, 47%, 21%)",
    clrKeyShadow: "hsl(290, 70%, 36%)",
    clrKeySecondary: "hsl(281, 89%, 26%)",
    clrKeySecondaryShadow: "hsl(285, 91%, 52%)",
    clrKeyStrong: "hsl(176, 100%, 44%)",
    clrKeyStrongShadow: "hsl(177, 92%, 70%)",
    clrKeyStrongFont: "hsl(198, 20%, 13%)",

    indicator: "77%"
  }
};


document.getElementById("change-theme").addEventListener('click', () => {
  if (themeNow == 3) { themeNow = 1; }
  else { themeNow++; }
  
  const theme = "theme" + themeNow;
  cssProps.style.setProperty("--clr-bg-main", themes[theme].clrBgMain);
  cssProps.style.setProperty("--clr-bg-toggle", themes[theme].clrBgToggle);
  cssProps.style.setProperty("--clr-bg-screen", themes[theme].clrBgScreen);
  cssProps.style.setProperty("--font-button-color", themes[theme].clrFontButton);
  cssProps.style.setProperty("--font-result-color", themes[theme].clrFontResult);
  cssProps.style.setProperty("--clr-key", themes[theme].clrKey);
  cssProps.style.setProperty("--clr-key-shadow", themes[theme].clrKeyShadow);
  cssProps.style.setProperty("--clr-key-secondary", themes[theme].clrKeySecondary);
  cssProps.style.setProperty("--clr-key-secondary-shadow", themes[theme].clrKeySecondaryShadow);
  cssProps.style.setProperty("--clr-key-strong", themes[theme].clrKeyStrong);
  cssProps.style.setProperty("--clr-key-strong-shadow", themes[theme].clrKeyStrongShadow);
  cssProps.style.setProperty("--clr-key-strong-font", themes[theme].clrKeyStrongFont);

  console.log(themeIndicator);
  console.log(themes[theme].indicator);
  themeIndicator.style.left = themes[theme].indicator;
});

// TEST FUCTION
function test(event) {
  console.log(event.srcElement.innerText);
}
const buttons = document.getElementsByClassName("item");

for (let button of buttons) {
  button.addEventListener("click", test, true);
}

// END