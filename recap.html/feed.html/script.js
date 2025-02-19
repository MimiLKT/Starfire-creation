document.addEventListener("DOMContentLoaded", () => {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    const feedContainer = document.getElementById("feed");

    if (projects.length === 0) {
        feedContainer.innerHTML = "<p>Aucun projet enregistré.</p>";
        return;
    }

    projects.forEach(project => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Partenaires :</strong> ${project.partners}</p>
                <p><strong>Capital :</strong> ${project.capital} €</p>
                ${project.image ? `<img src="${project.image}" alt="Image du projet" class="project-image">` : ""}
            </div>
        `;
        feedContainer.appendChild(projectDiv);
    });
});
