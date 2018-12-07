/**
 * Execute content.js on the netflix urls that will contain shows/movies
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.includes('https://www.netflix.com') && tab.url.match(/(browse|title|search|Kids)/)) {
		if (changeInfo.status == 'complete' && tab.status == 'complete') {
			chrome.tabs.executeScript(tabId, {file: 'content.js'}, function() {
				//Do nothing
			});
		}
	}
});

/**
 * Open a new tab to the url given if the request is a youtube video url
 */
chrome.runtime.onMessage.addListener(function(request, sender, response) {
	if (request.url.includes('https://www.youtube.com/watch?v=')) {
		chrome.tabs.create(request);
	}
});