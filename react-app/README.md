
## STEPS FOLLOWED TO USE SUNBIRD-QUML-PLAYER AS WEB-COMPONENT IN REACT APP

- Create react app if not exist with `npx create-react-app my-app`

- Copy files from the `https://github.com/project-sunbird/sunbird-quml-player/tree/main/web-component`
	- Copy `assets` folder to `public` folder to access the assets from `sunbird-quml-player`
	- Create new folder in `src` (eg. sunbird) and keep `sunbird-quml-player.js` and `style.css` files in it.

- To use the quml-player, import the both `sunbird-quml-player.js` and `style.css` files in it.

- Create `.eslintignore` file if not exist and add `library` folder to avoid lint issues from the library files

- Assign jQuery and questionListUrl to window object

- Use `sunbird-quml-player` and pass the input as given in the example

- Update styles of `App.css` as given in example

- For the events use `useRef` hook

- run file by providing `.eslintignore` file path - `react-scripts start --ignore-path .eslintignore`

<!-- - Quml-libray uses `jQuery`, `katex` and `@project-sunbird/telemetry-sdk`, install and import those in the component.
`npm i jquery @project-sunbird/telemetry-sdk katex --save` -->

