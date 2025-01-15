const progress =document.getElementById("progress");
const prevBtn =document.getElementById("Prev");
const nextBtn =document.getElementById("next");
const cricles =document.getElementById(".circle");

let activeIndex =1;


 nextBtn.addEventListener("click", () => {
  activeIndex++
  if (activeIndex > circle.length) {
    activeIndex =cricles.length
  }

  updateUI();
 })



function updateUI() {
  cricles.forEach((circle, index) => {
    if (index <  activeIndex) {
      circle .classList.add("acitve"); 
        }else{
          circle.classList.remove("active");
        }

      
  });

  const acitve = document.querySelectorAll(".active");
  progress.style.width =
((actives.length - 1)/ (cricles.length -1)) * 100 +"%";

  if (activeIndex ==1){
    prevBtn.disabled =true;
  }else if (activeIndex == circle.length) {
    nextBtn.disabled =true;
  }else{
    prevBtn.disabled =false;
    nextBtn.disabled =false;
  }
}