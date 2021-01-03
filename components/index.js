// Set moment locale to locale of browser
moment.locale(window.navigator.userLanguage || window.navigator.language);

// Render JSX
ReactDOM.render(<App />, document.getElementById("ppg-react-root"));
