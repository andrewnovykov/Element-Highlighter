// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	if (request.action === 'highlightElement') {
// 		const elements = document.querySelectorAll(request.selector);
// 		for (const element of elements) {
// 			element.style.outline = '2px solid red';
// 			element.style.zIndex = '9999';
// 		}
// 		sendResponse({ success: true });
// 	}
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	if (request.action === 'highlightElement') {
// 		const elements = document.querySelectorAll(request.selector);
// 		for (const element of elements) {
// 			highlightElementWithOverlay(element);
// 			showSelectorTooltip(element, request.selector);
// 		}
// 		sendResponse({ success: true });
// 	}
// });

// function highlightElementWithOverlay(element) {
// 	const rect = element.getBoundingClientRect();
// 	const overlay = document.createElement('div');
// 	overlay.style.position = 'absolute';
// 	overlay.style.width = `${rect.width}px`;
// 	overlay.style.height = `${rect.height}px`;
// 	overlay.style.left = `${rect.left + window.scrollX}px`;
// 	overlay.style.top = `${rect.top + window.scrollY}px`;
// 	overlay.style.backgroundColor = 'rgba(111, 168, 220, 0.3)';
// 	overlay.style.zIndex = '9999';
// 	overlay.style.pointerEvents = 'none';
// 	document.body.appendChild(overlay);
// }

// function showSelectorTooltip(element, selector) {
// 	const tooltip = document.createElement('div');
// 	tooltip.textContent = selector;
// 	tooltip.style.position = 'absolute';
// 	tooltip.style.backgroundColor = 'white';
// 	tooltip.style.border = '1px solid black';
// 	tooltip.style.padding = '4px';
// 	tooltip.style.borderRadius = '4px';
// 	tooltip.style.fontSize = '12px';
// 	tooltip.style.zIndex = '10000';

// 	const rect = element.getBoundingClientRect();
// 	tooltip.style.left = `${rect.left + window.scrollX}px`;
// 	tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;

// 	document.body.appendChild(tooltip);

// 	setTimeout(() => {
// 		tooltip.remove();
// 	}, 3000);
// }

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'highlightElement') {
		const elements = document.querySelectorAll(request.selector);
		for (const element of elements) {
			element.style.outline = '2px solid red';
			element.style.zIndex = '9999';
			showSelectorTooltip(element, request.selector);
		}
		sendResponse({ success: true });
	}
});

function showSelectorTooltip(element, selector) {
	const tooltip = document.createElement('div');
	tooltip.textContent = selector;
	tooltip.style.position = 'absolute';
	tooltip.style.backgroundColor = 'black';
	tooltip.style.color = 'white';
	tooltip.style.border = '1px solid black';
	tooltip.style.padding = '4px';
	tooltip.style.borderRadius = '4px';
	tooltip.style.fontSize = '12px';
	tooltip.style.zIndex = '10000';

	const rect = element.getBoundingClientRect();
	tooltip.style.left = `${rect.left + window.scrollX}px`;
	tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;

	document.body.appendChild(tooltip);
}
