
// Check if we're on a Roll20 page
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    const statusDiv = document.getElementById('status');
    const statusText = document.getElementById('status-text');
    
    if (currentTab.url && currentTab.url.includes('app.roll20.net/editor/')) {
        statusDiv.className = 'status active';
        statusText.textContent = '✅ Ativo no Roll20';
    } else {
        statusDiv.className = 'status inactive';
        statusText.textContent = '⚠️ Acesse uma mesa do Roll20';
    }
});
