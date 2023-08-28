// pages
const projects = [
    {
        title: "BB8's Battle",
        description: "Potential Loading Screen",
        link: "BB8s_Battle",
    },
    {
        title: "Hexagons",
        description: "Interesting homg page background",
        link: "hexagons",
    },
];

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
        link.href = `./projects/${project.link}/${project.link}.html`;
        link.textContent = "View Project";

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        projectCards.appendChild(card);
    });
});
