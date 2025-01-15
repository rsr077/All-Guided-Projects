
  const copyText = document.querySelector("textare[name =copyTxt");
const finalText  =document.querySelector("textarea[name=finalTxt");
const moveBtn =document.querySelector(".moveBtn");
const copyBtnBtn =document.querySelector(".copyBtn");
const output =document.querySelector(".output");

copyBtn. addEvenListener("click", () =>{
  let temp = copyText.value;
  copyToClipBoard(temp);
});



copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());

function copyToClipBoard(str) {
  const outputContainer =document.querySelector(".output-container");

  const textarea = document.createElement("textarea");
  textarea.value =str;
  outputContainer.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>Content Copied</h3>`;
  output.classList.add ("added");
    setTimeout(() => {
      output.classList.toggle("added");
      output.textContent ="";

    },2000);
  
}