import {projects} from './data/projects';

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.getElementById("project-cards");

    // Create project cards
    projects.forEach(function (project) {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const title = document.createElement("h2");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View Project";

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        projectCards.appendChild(card);
    });
});
