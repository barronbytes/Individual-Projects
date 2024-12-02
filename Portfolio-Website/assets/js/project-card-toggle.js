document.addEventListener("DOMContentLoaded", () => {
    const LIST_ITEMS = document.querySelectorAll(".portfolio-2 .group");

    LIST_ITEMS.forEach((item) => {
        const originalImage = item.querySelector("a"); // Target the original content
        const originalContent = item.innerHTML; // Save the original structure

        // Define new content
        const newContent = `
            <div class="project-item" aria-live="polite" role="region">
                <h6>Adipiscing, elit sapien hendrerit vulputate vehicula.</h6>
                <a class="button footer-cta" href="#" title="Check Out The Details">Open My Project</a>
            </div>
        `;

        // Add event listeners for hover, focus, and touch interactions
        item.addEventListener("mouseenter", () => toggleContent(item, originalImage, newContent));
        item.addEventListener("mouseleave", () => revertContent(item, originalImage, originalContent));
        item.addEventListener("focus", () => toggleContent(item, originalImage, newContent));
        item.addEventListener("blur", () => revertContent(item, originalImage, originalContent));
    });

    function toggleContent(item, originalImage, newContent) {
        if (item.getAttribute("aria-expanded") === "true") return;

        // Hide the original image
        originalImage.style.display = "none";

        // Add the new content
        item.setAttribute("aria-expanded", "true");
        item.insertAdjacentHTML("beforeend", newContent);
    }

    function revertContent(item, originalImage, originalContent) {
        if (item.getAttribute("aria-expanded") === "false") return;

        // Show the original image
        originalImage.style.display = "";

        // Remove the added content
        const projectItem = item.querySelector(".project-item");
        if (projectItem) projectItem.remove();

        // Reset the attributes
        item.setAttribute("aria-expanded", "false");
    }
});
