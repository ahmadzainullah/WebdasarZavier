const textEfect = ["Freelancer", "Frontend Developer", "Pekerja keras"];
let count = 0;
let textIndex = 0;
let currentText = "";
let words = "";

(function ngetik() {
  if (count == textEfect.length) {
    count = 0;
  }
  currentText = textEfect[count];

  words = currentText.slice(0, ++textIndex);
  document.querySelector(".efek-ngetik").textContent = words;
  if (words.length == currentText.length) {
    count++;
    textIndex = 0;
  }
  setTimeout(ngetik, 250);
})();
