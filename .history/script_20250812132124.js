const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spinBtn');
const value = Math.ceil(Math.random() * 360);

spinButton.addEventListener('click', () => {
    wheel.style.transform = `rotate(${finalDegree}deg)`;
    const randomDegree = Math.floor(Math.random() * (360*4)) + 720; // Ensure at least two full rotations
    const finalDegree = value + randomDegree;
    
   
    
    

})