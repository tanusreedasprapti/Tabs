const panels = Array.from(document.querySelectorAll(".section-panels > div"));
const tabs = Array.from(document.querySelectorAll(".section-tab"));
const tabsContainer = document.querySelector(".section-menu");

// Hide all panels except the first one
panels.forEach((panel, index) => {
    if (index > 0) panel.setAttribute("hidden", "");
});

// Function to handle switching tabs
const switchTab = (e) => {
    try {
        // Find the clicked Tab
        const clickedTab = e.target.closest("li");
        if (!clickedTab) return; // If no tab is clicked, return

        // Remove the "active" class from all Tabs
        tabs.forEach((tab) => tab.classList.remove("active"));
        // Add the "active" class to the clicked Tab
        clickedTab.classList.add("active");

        // Get the associated panel for the clicked tab
        const activePanelId = clickedTab.children[0].getAttribute("href");
        const activePanel = document.querySelector(activePanelId);

        // Hide all panels
        panels.forEach((panel) => {
            panel.setAttribute("hidden", "");
        });
        // Show the panel associated with the clicked tab
        activePanel.removeAttribute("hidden", "");

        return 0; // Return 0 to indicate success
    } catch (error) {
        console.error("Error switching tabs:", error);
        return 1; // Return 1 to indicate an error
    }
};

// Event listener for tab switching
tabsContainer.addEventListener("click", switchTab);
