'use strict';

const domContainer = document.querySelector('#react-app');
const root = ReactDOM.createRoot(domContainer);

function MyComponent() {

    const [count, setCount] = React.useState(0);

    React.useEffect(()=>{
        console.log("Begin to run effect!")
        return () => {
            console.log("End to run effect!")
        };
    }, [count]);
    const Unmount = React.createElement("div", {
        "id": "Unmount",
        onClick: () => {
            root.unmount();
        }
    }, "Unmount!");
    const Update = React.createElement("div", {
        "id": "update",
        onClick: () => {
            setCount(count+1);
        }
    }, "Update!");
    const CountRender = React.createElement("div", {"id": "count"}, count);
    return React.createElement("div", {}, [Unmount, Update, CountRender, React.createElement(MyComponent2)]);
}


function MyComponent2() {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log("2 Begin to run effect!")
        return () => {
            console.log("2 End to run effect!")
        };
    }, []);

    return React.createElement("div", {}, "Hello! Im the 2 element!")
}


root.render(React.createElement(MyComponent));