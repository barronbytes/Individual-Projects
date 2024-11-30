// Select all the project groups
const PROJECT_GROUPS = document.querySelectorAll(".project.group");

// Loop through each project group
PROJECT_GROUPS.forEach(projectGroup => {
    const PROJECT_1 = projectGroup.querySelector(".project-1");
    const PROJECT_1_IMAGE = PROJECT_1.querySelector("img"); // Not used in your current logic, but it's here if needed
    const PROJECT_2 = projectGroup.querySelector(".project-2");

    // Show PROJECT-2 and hide PROJECT-1
    function ShowProject2() {
        PROJECT_1.style.display = "none";
        PROJECT_2.style.display = "flex"; 
    }

    // Hide PROJECT-2 and show PROJECT-1
    function HideProject2() {
        PROJECT_1.style.display = "block";
        PROJECT_2.style.display = "none";
    }

    // Add event listeners for each project group
    PROJECT_1.addEventListener("mouseenter", ShowProject2);
    PROJECT_2.addEventListener("mouseleave", HideProject2);
});
