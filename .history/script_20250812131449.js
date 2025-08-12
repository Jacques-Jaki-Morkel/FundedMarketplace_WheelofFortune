const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-button');
const value = Math.ceil(Math.random() * 360);

spinButton.addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Ensure at least two full rotations
    const finalDegree = value + randomDegree;
    
    wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
    wheel.style.transform = `rotate(${finalDegree}deg)`;
    
    setTimeout(() => {
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${value}deg)`;
    }, 4000);
}