document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.body;
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Positionnement aléatoire
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Taille aléatoire
        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Animation aléatoire
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random()}s`;

        starContainer.appendChild(star);
    }
});
