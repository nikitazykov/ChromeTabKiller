chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({}, (tabs) => {
        const currentTabId = tab.id;
      
        tabs.forEach(t => {
            if (t.id !== currentTabId) {
            chrome.tabs.discard(t.id);
            }
        });
    });
});