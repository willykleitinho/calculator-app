var themeNow = 1;
const themeIndicator = document.getElementById("theme-indicator");
const cssProps = document.querySelector(":root");
const resultScreen = document.getElementById("result-screen");

const log = str => console.log(str);

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

    indicator: "0%",
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

    indicator: "36%",
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

    indicator: "77%",
  },
};

document.getElementById("change-theme").addEventListener("click", () => {
  if (themeNow == 3) {
    themeNow = 1;
  } else {
    themeNow++;
  }

  const setProperty = (property, value) =>
    cssProps.style.setProperty(property, value);

  const theme = "theme" + themeNow;
  setProperty("--clr-bg-main", themes[theme].clrBgMain);
  setProperty("--clr-bg-toggle", themes[theme].clrBgToggle);
  setProperty("--clr-bg-screen", themes[theme].clrBgScreen);
  setProperty("--font-button-color", themes[theme].clrFontButton);
  setProperty("--font-result-color", themes[theme].clrFontResult);
  setProperty("--clr-key", themes[theme].clrKey);
  setProperty("--clr-key-shadow", themes[theme].clrKeyShadow);
  setProperty("--clr-key-secondary", themes[theme].clrKeySecondary);
  setProperty(
    "--clr-key-secondary-shadow",
    themes[theme].clrKeySecondaryShadow
  );
  setProperty("--clr-key-strong", themes[theme].clrKeyStrong);
  setProperty("--clr-key-strong-shadow", themes[theme].clrKeyStrongShadow);
  setProperty("--clr-key-strong-font", themes[theme].clrKeyStrongFont);

  themeIndicator.style.left = themes[theme].indicator;
});

var newField = true;
var tempStr = '';
var hasNumber = false;

document.getElementById("buttons").addEventListener("click", (ev) => {
  if (ev.target.tagName != "BUTTON") {
    return;
  }
  let tmp = '';
  switch (ev.target.value) {
    case "+":
    case "*":
    case "/":
      if (!hasNumber && newField) {
        log('initial state')
        break;
      }
    
      tmp += `(${resultScreen.innerText}) ${ev.target.value} `;
      hasNumber = false;
      newField = true;
      break;
    case "-":
      if (!tempStr && newField) {
        resultScreen.innerText = ev.target.value;
        newField = false;
        hasNumber = true;
        break;
      }

      if (!hasNumber && !newField) {
        break;
      }

      tmp += `(${resultScreen.innerText}) ${ev.target.value} `;
      newField = true;
      break;
    case "=":
    case "del":
      // do something;
      break;
    case "reset":
      // do something;
      break;
    default:
  }
  tempStr += tmp;
  log(tempStr);

  if (newField) {
    if (!tempStr) {
    }
    resultScreen.innerText = "";
    newField = false;
  }

  resultScreen.innerText += ev.target.value;
});
