document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const button = document.querySelector(".button");
    const text = document.querySelector(".text");
  
    const animateStart = () => {
      container.classList.add("animating");
      button.innerHTML = "+";
  
      text.innerHTML = "";
  
      setTimeout(() => {
        text.innerHTML = "Mèo đang suy nghĩ về câu hỏi của bạn."
      }, 3300);
  
      setTimeout(() => {
        text.innerHTML = "Mèo đã có câu trả lời."
      }, 11300);
  
      setTimeout(() => {
        text.innerHTML = "Mèo sẽ nói câu trả lời ra."
      }, 13300);
  
      setTimeout(() => {
        text.innerHTML = ""
      }, 15300);
    }
  
    button.addEventListener("click", animateStart);
  });
  