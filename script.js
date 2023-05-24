document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.getElementById("project-cards");

    // Sample project data (replace with your own data)
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet.",
            link: "project1.html",
        },
        {
            title: "Project 2",
            description: "Consectetur adipiscing elit.",
            link: "project2.html",
        },
        {
            title: "Project 3",
            description: "Praesent vel semper nunc.",
            link: "project3.html",
        },
        // Add more projects as needed
    ];

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
