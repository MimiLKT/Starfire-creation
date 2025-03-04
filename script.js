const starContainer = document.querySelector('.stars-background');

// Crée 50 étoiles aléatoires
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Position et taille aléatoires
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  const size = Math.random() * 3 + 1; // Taille entre 1px et 4px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  starContainer.appendChild(star);
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("projectForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page

        // Récupération des valeurs du formulaire
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const partners = document.getElementById("partners").value.trim();
        const capital = document.getElementById("capital").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const imageInput = document.getElementById("imageInput");
        const imageFile = imageInput.files[0];

        let projects = JSON.parse(localStorage.getItem("projects")) || [];

        let newProject = { title, description, partners, capital, contact };

        // Vérification et ajout de l'image
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                newProject.image = event.target.result; // Convertir l'image en Base64
                projects.push(newProject);
                localStorage.setItem("projects", JSON.stringify(projects)); // Sauvegarde
                window.location.href = "recap.html"; // Redirection vers la page de récap
            };
            reader.readAsDataURL(imageFile);
        } else {
            projects.push(newProject);
            localStorage.setItem("projects", JSON.stringify(projects));
            window.location.href = "recap.html";
        }
    });
});
