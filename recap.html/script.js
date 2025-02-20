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
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    
    if (projects.length === 0) {
        document.getElementById("recapContainer").innerHTML = "<p>Aucun projet trouvé.</p>";
        return;
    }

    let lastProject = projects[projects.length - 1];  // Dernier projet ajouté

    document.getElementById("recapTitle").innerText = lastProject.title;
    document.getElementById("recapDescription").innerText = lastProject.description;
    document.getElementById("recapPartners").innerText = lastProject.partners;
    document.getElementById("recapCapital").innerText = lastProject.capital + " €";

    if (lastProject.image) {
        const imgElement = document.createElement("img");
        imgElement.src = lastProject.image;
        imgElement.alt = "Image du projet";
        imgElement.style.maxWidth = "100%";
        document.getElementById("imageContainer").appendChild(imgElement);
    }

    // Redirection vers feed.html
    document.getElementById("addToFeed").addEventListener("click", function() {
        window.location.href = "feed.html";
    });
});
