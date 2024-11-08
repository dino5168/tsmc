
      // Function to handle language change
      function changeLanguage() {
        const languageSelector = document.getElementById("language-selector");
        const selectedLanguage = languageSelector.value;

        // Redirect based on selected language
        switch (selectedLanguage) {
          case "en":
            window.location.href = "./index.html"; // English page URL
            break;
          case "zh":
            window.location.href = "./indextw.html"; // Chinese page URL
            break;
          case "ja":
            window.location.href = "./indexja.html"; // Japanese page URL
            break;
          case "ko":
            window.location.href = "./indexko.html"; // Korean page URL
            break;
          case "hi":
                window.location.href = "./indexhi.html"; // Korean page URL
                break;
         case "es":
                window.location.href = "./indexes.html"; // Korean page URL
                break;
                case "fr":
                    window.location.href = "./indexfr.html"; // Korean page URL
                    break;
        case "pt":
                    window.location.href = "./indexpt.html"; // Korean page URL
                break;
          default:
            break;
        }
      }
    