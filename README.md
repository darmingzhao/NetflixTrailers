# NetflixTrailers
NetflixTrailers is a chrome extension using jQuery and YouTube API to add a 'Watch Trailer' button to all shows/movies in Netflix that, when clicked, opens the trailer of the show/movie on youtube in a new tab.

NOTE: Functionality and usability of the extension may change depending on any updates made to Netflix's website.

## Deployment
### Add Libraries
After cloning the repository:
* Create a new folder called "Libraries" in the root project.
* Download jQuery from https://www.jquery.com/download/ and add the code into a "jquery.js" file. Add this file to the "Libraries" folder.
### API Keys
* Generate a Youtube Data API key from https://www.developers.google.com/.
* Replace "INSERT_API_KEY_HERE" in the "content.js" file with the API key.
### Load the Extension
* Go to chrome://extensions.
* Click "Load unpacked" at the top left corner of the tab.
* Select the NetflixTrailers project.

## User Interface
<img width="1431" alt="user-interface" src="https://user-images.githubusercontent.com/31530273/49629762-5921a800-f9a8-11e8-8abe-db1eb31de899.png">
