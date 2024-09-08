document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('closePinnedTabs', (data) => {
    document.getElementById('closePinnedTabs').checked = data.closePinnedTabs || false;
  });

  document.getElementById('save').addEventListener('click', () => {
    const closePinnedTabs = document.getElementById('closePinnedTabs').checked;
    chrome.storage.sync.set({ closePinnedTabs }, () => {
      alert('Options saved.');
    });
  });
});
