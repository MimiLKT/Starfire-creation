document.addEventListener("DOMContentLoaded", () => {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    const feedContainer = document.getElementById("feed");

    if (projects.length === 0) {
        feedContainer.innerHTML = "<p>Aucun projet enregistré.</p>";
        return;
    }

    projects.forEach((project, index) => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        // Récupérer les likes et commentaires stockés
        let likes = JSON.parse(localStorage.getItem(`likes_${index}`)) || 0;
        let comments = JSON.parse(localStorage.getItem(`comments_${index}`)) || [];

        projectDiv.innerHTML = `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Partenaires :</strong> ${project.partners}</p>
                <p><strong>Capital :</strong> ${project.capital} €</p>
                <p><strong>Contact :</strong> <a href="mailto:${project.contact}">${project.contact}</a></p>
                ${project.image ? `<img src="${project.image}" alt="Image du projet" class="project-image">` : ""}
                
                <!-- Bouton Like -->
                <button class="like-btn" data-index="${index}">❤️ Like (<span id="like-count-${index}">${likes}</span>)</button>
                
                <!-- Espace Commentaire -->
                <div class="comments-section">
                    <h4>Commentaires</h4>
                    <div id="comments-${index}" class="comments-list">
                        ${comments.map(comment => `<p>${comment}</p>`).join("")}
                    </div>
                    <input type="text" id="comment-input-${index}" placeholder="Ajouter un commentaire...">
                    <button class="comment-btn" data-index="${index}">Envoyer</button>
                </div>
            </div>
        `;

        feedContainer.appendChild(projectDiv);
    });

    // Gestion des likes
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            let likes = JSON.parse(localStorage.getItem(`likes_${index}`)) || 0;
            likes++;
            localStorage.setItem(`likes_${index}`, JSON.stringify(likes));
            document.getElementById(`like-count-${index}`).textContent = likes;
        });
    });

    // Gestion des commentaires
    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            let input = document.getElementById(`comment-input-${index}`);
            let commentText = input.value.trim();

            if (commentText !== "") {
                let comments = JSON.parse(localStorage.getItem(`comments_${index}`)) || [];
                comments.push(commentText);
                localStorage.setItem(`comments_${index}`, JSON.stringify(comments));

                // Affichage du nouveau commentaire
                let commentList = document.getElementById(`comments-${index}`);
                let newComment = document.createElement("p");
                newComment.textContent = commentText;
                commentList.appendChild(newComment);

                // Réinitialiser l’input
                input.value = "";
            }
        });
    });
});
