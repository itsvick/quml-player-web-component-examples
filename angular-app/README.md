# Steps to use web-component in the Angular app

1. Copy files from `assets` folder to `assets` folder
2. Copy files rest of the files to  `assets/sunbird` folder (which will includes `sunbird-quml-player.js`, `styles.css` and font files)
3. Add entries of these files in `angular.json` inside styles and scripts section
4. Add `CUSTOM_ELEMENTS_SCHEMA` in `app.module`
5. Place `sunbird-quml-player` inside the container div and apply styling to it as applicable
6. Use `sunbird-quml-player` tag and pass the input as `playerConfig`, it also exposes two events `playerEvents` and `telemetryEvent`
7. While bootstrapping pass the `questionListUrl` inside `app.module` which will be used by the web-component to fetch the questions