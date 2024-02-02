const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const gif = document.querySelector(".gif");
const question = document.querySelector(".question");
const wrapper = document.querySelector(".wrapper");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noButton.getBoundingClientRect();

yesButton.addEventListener('click', () =>{
  question.innerHTML = "Yayyyy, thank you bebe. I love you!!";
  gif.src = "./img/love.gif";
  }
);

noButton.addEventListener('click', () =>{
  question.innerHTML = "I'm hurt now bebe.. You're mean."
  gif.src = "./img/dudu-cry-hay-nako-reika.gif";
  }
);

noButton.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noButton.style.top = j + 'px';
  noButton.style.left = i + 'px';
  }
);





