chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get('closePinnedTabs', (data) => {
    const closePinnedTabs = data.closePinnedTabs || false;

    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const currentTabId = tab.id;

      tabs.forEach(t => {
        if (t.id !== currentTabId && (closePinnedTabs || !t.pinned)) {
          chrome.tabs.discard(t.id);
        }
      });
    });
  });
});