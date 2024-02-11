const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');


yesBtn.addEventListener("click", ()=>{
    question.innerHTML ="HEHEHE YOU MINEEE :3"
    gif.src ="hehe.gif";


    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    const openFileBtn = document.createElement('button');
    openFileBtn.textContent = 'Open Love Letter';
    openFileBtn.className = 'open-file-btn';
    openFileBtn.addEventListener('click', () => {
        window.open('love letter.txt', '_blank');
    });

    wrapper.appendChild(openFileBtn);
});
noBtn.addEventListener("click", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px'; 
    noBtn.style.top = randomY + 'px'; 
});
