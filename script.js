// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Only add event listener if elements exist
    const btn = document.getElementById('btn');
    const demo = document.getElementById('demo');
    if (btn && demo) {
        btn.addEventListener('click', function () {
            demo.innerHTML = "New text";
        });
    }

    // Optional: log that the page loaded
    console.log('Sommer-Projekt main page loaded');
});