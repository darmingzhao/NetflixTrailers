(function(window, $, undefined) {

	/**
	 * Go through each show/movie and if there is no "Watch Trailer" button, add the button along with a 
	 * click listener that will open the trailer in youtube
	 */
	$('div.jawbone-actions').each(function(index) {
		if (!$(this).find('a.netflix-trailer').length) {
			$(this).find('a.playLink').after(`
				<a class="netflix-trailer">
					<span class="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase">
						<span class="nf-flat-button-text">Watch Trailer</span>
					</span>
				</a>
			`);
			$(this).on('click', function() {
				const info = getInfo($(this).closest('div.jawBone'));
				const request = createSearchRequest({
					q: info.title+' '+info.type+' Trailer',
					key: 'INSERT_API_KEY_HERE',
					part: 'snippet',
					maxResults: '1',
					type: 'video'
				});
				$.getJSON(request, function(data) {
					const url = { url: 'https://www.youtube.com/watch?v='+data.items[0].id.videoId };
					chrome.runtime.sendMessage(url, function(response) {
						//Do nothing
					});
				});
			});
		}
	});

	/**
	 * getInfo will get and return any relevent metadata from the HTML DOM
	 * @param {HTML DOM Element Object} container Element that contains the metadata about the show/movie
	 * @returns {Object} Object with relevant show/movie metadata
	 */
	function getInfo(container) {
		const info = {};
		const title = container.find('div.text');
		info['title'] = title.length ? title.text() : container.find('img.logo').prop('alt');
		info['duration'] = container.find('span.duration').text();
		info['type'] = info['duration'].match(/(Season|Part)/) ? 'TV Show' : 'Movie';
		return info;
	}

	/**
	 * createSearchRequest will construct a GET search request for youtube api, following the properties
	 * outlined in the parameters given
	 * @param {Object} properties Object with relevant info and specifications to contstruct the request
	 * @returns {String} request to youtube api
	 */
	function createSearchRequest(properties) {
		return `https://www.googleapis.com/youtube/v3/search
			?q=${properties.q}
			&key=${properties.key}
			&part=${properties.part}
			&maxResults=${properties.maxResults}
			&type=${properties.type}
		`;
	}
	
})(window, jQuery);