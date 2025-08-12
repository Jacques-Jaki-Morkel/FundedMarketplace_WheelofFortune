const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spinBtn');
const value = Math.ceil(Math.random() * 360);

spinButton.addEventListener('click', () => {
    const rotations = Math.max(Math.random() * 100, 15); // Ensure at least 15 full rotations
    const randomDegree = Math.floor(Math.random() * (360*rotations)) + 720; // Ensure at least two full rotations
    const finalDegree = value + randomDegree;
    
    wheel.style.transition = 'transform 5s ease-in-out';
    wheel.style.transform = `rotate(${finalDegree}deg)`;

//     spin styles
//     cubic-bezier(0.33, 1, 0.68, 1)
})