const heading = React.createElement("h1",{},"Hello World from react") //takes 3 argument - element,object,data in element , object is where we give attribute to tag
const root = ReactDOM.createRoot(document.getElementById("root")); //it is the job of react dom
root.render(heading);