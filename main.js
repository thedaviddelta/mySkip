new MutationObserver(() => {
    const skipButton = document.querySelector(".ytp-ad-skip-button-container");
    const closeButton = document.querySelector(".ytp-ad-overlay-close-button");

    skipButton?.click() ?? closeButton?.click();
}).observe(document.body, {
    childList: true,
    subtree: true
});