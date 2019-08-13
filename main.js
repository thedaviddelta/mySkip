new MutationObserver(() => {
    const skipButton = document.getElementsByClassName("ytp-ad-skip-button-container")[0];
    const closeButton = document.getElementsByClassName("ytp-ad-overlay-close-button")[0];

    if (skipButton)
        skipButton.click();
    else if (closeButton)
        closeButton.click();
}).observe(document.body, {
    childList: true,
    subtree: true
});