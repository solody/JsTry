'use strict';

const domContainer = document.querySelector('#react-app');
const root = ReactDOM.createRoot(domContainer);

function MyComponent() {
    const myRef = React.useRef(null);
    const input = React.createElement("input", {
        "ref": myRef
    });
    const btn = React.createElement("button", {
        onClick() {
            myRef.current.focus();
        },
    },"Click!");
    return React.createElement("div", {}, [input, btn]);
}



root.render(React.createElement(MyComponent));