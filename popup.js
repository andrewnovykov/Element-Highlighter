document.getElementById('highlight-btn').addEventListener('click', () => {
	const selector = document.getElementById('selector').value;
	if (selector) {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElement', selector: selector }, (response) => {
				if (chrome.runtime.lastError) {
					console.error(chrome.runtime.lastError);
				} else {
					console.log(response);
				}
			});
		});
	}
});
