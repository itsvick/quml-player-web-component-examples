# Steps followed to use web-component in vanilla Javascript

1. Copy all files from (https://github.com/project-sunbird/sunbird-quml-player/tree/main/web-component) folder.
2. Create [index.html](./index.html)
3. Create a wrapper div (here `my-player`)
4. Apply applicable styling to it.
5. Import the script and style files.
6. Create playerConfig object
7. `sunbird-quml-player` web-components requires api url to fetch the questions. Pass the url through `window.questionListUrl`
8. Using JS api create dom element for `sunbird-quml-player` and pass attributes to it.
9. Add eventListeners for `playerEvent` and `telemetryEvent`
10. Run the application with local server