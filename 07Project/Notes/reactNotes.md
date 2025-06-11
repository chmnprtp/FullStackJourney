<!-- 1-Inception  -->
# Inception
## How do we write Basic program with html

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Start React</title>
        </head>
        <body>
            <div id="root">
                <h1>Hello World</h1>
            </div>
        </body>
        </html>

## how do we write basic program using js

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Start React</title>
        </head>
        <body>
            <div id="root"></div>

            <script>
                const heading = document.createElement("h1")
                heading.innerHTML = "Hello World from Js";

                const root = document.getElementById("root");
                root.appendChild(heading);

            </script>
        </body>
        </html>

## How we can create basic Hello Word program using React

    --> Browsers donot understand react.
    --> to use react in our project we need to configure our project with React.

        Ways to add react to out project:-
        1- By React CDN-(A CDN (Content Delivery Network) is a system of distributed servers that deliver web content, such as images, videos, HTML, CSS, JavaScript, and other assets, to users based on their geographic location.)

        index.html
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Start React</title>
            </head>
            <body>

            <!-- ⚠️ Anything outside this root div will render normally, React will not control it -->
            <div id="root"></div>

            <!-- 
                ? What is crossorigin?
                - The `crossorigin` attribute is used in HTML to control how resources (like scripts, fonts, etc.) are fetched from other domains.
                - It works with CORS (Cross-Origin Resource Sharing), a browser security feature that restricts cross-domain requests.
            -->

            <!-- React Core (must come before ReactDOM and your own scripts) -->
            <script
                crossorigin
                src="https://unpkg.com/react@18/umd/react.development.js"
            ></script>

            <!-- React DOM (used to interact with the DOM) -->
            <script
                crossorigin
                src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
            ></script>

            <!-- Your React Code -->
            <script>
                // Create a React element (takes 3 arguments: tag, props object, content)
                const heading = React.createElement(
                "h1",
                { id: "heading", xyz: "abc" },
                "Hello World from React"
                );

                console.log(heading); // Output: React element (a JS object)

                // Create root and render the element
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(heading); // Renders <h1>Hello World from React</h1> into the DOM
            </script>

            </body>
            </html>


<!-- How to create nested Structure in React
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
        </div>
    </div>
 -->
            <script>
                const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                React.createElement("h1",{},"I'm h1 tag"))
                );
            </script>

        - ReactElement(object) => HTML(Browser Understands)

<!-- Now how create sibling html element
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
 -->
            <script>
                const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")])
                );
            </script>
            //By adding element in array in third argument

            -It is hard to code in this way.....that's why we use jsx
            -React can also be written without jsx
            - React element is nothing but Javascript object


        2- By using npm

<!-- If we write some static HTML content like <div>Chaman</div> and then render content using React, the static content will be replaced by the React content. "Chaman" may appear for a brief moment before being replaced. -->

<!-- Suppose there are three <div> elements on the HTML page, and React is rendering into the first one (with id="root"). 
The content inside the other two <div>s will still be displayed on the web page, as React only controls the div it is mounted to. -->



<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 2-Igniting our App  -->
# Igniting our App

## What is React?

    --> React is a Javascript Library.
    --> React developed by facebook.

    Notes - Most expensive operation in webpage or browser is Dom manipulation.
          - react can be applied to small portion of the page

## What is Jsx

    --> to solve complex react code.

## npm

<!-- 
  Can React alone build a fast, production-ready app? 
  No — React by itself is just a UI library.
  To build a fast production-ready app, we need to use additional libraries and tools 
  alongside React (such as routing, state management, bundlers, and performance optimizations).
-->


    what is npm?
        It is a package manager for JavaScript, primarily used to manage libraries and dependencies in projects. 

        It is also a repository (https://www.npmjs.com) for all publicly shared JavaScript packages.

        npm init       # Initialize a new project (creates package.json)
        npm install react  # Install React package
        npm run build  # Run custom script defined in package.json

    what is package.json?
        its a configuration for npm. it keeps a track of what version of package is installed in your project

        ✅ Key Information Stored in package.json:
        Project name and version
        Dependencies (dependencies, devDependencies)
        Scripts (e.g., npm run build, npm start)
        Author, license, and repository info

    what is package?
        A package refers to a collection of files that are bundled together to deliver functionality.
        package and dependency are the same thing.

    what is dependency/package?
        A dependency refers to a package that your project depends on.
        It's the term used for packages listed in your package.json file

    why we need package.json?
        The package.json file is needed to keep track of the libraries (dependencies) your project uses, as well as to store important information like project details and scripts for running tasks.

    what is package-lock.json?
        it keeps track of exact versions of those dependencies to ensure everyone gets the same set of dependencies and prevents version mismatch issues

    what is bundler?
        A bundler is a tool that takes all the files in your project (like JavaScript, CSS, and images) and combines them into a smaller, optimized file that can be used in a web browser. ultimately improving your app’s load time and performance.
    Example:- webpack, parcel, vite, etc
        create-react-app behind the scene uses webpack bundler

    npm install -D parcel?
        means installing Parcel as a development dependency. dev build means for practice
        parcel is a package.
        There are two types of dependency we can install
            - dev dependency - it is for development phase
            - normal dependency - for production

    For production build ready?
        npx parcel build index.html
        remove main from package.json

    when we do npx parcel build index.html where build goes?
        dist folder

    what is "^2.8.3" or "~2.8.3" or "2.8.3" in package.json?
        ^ means later it can be update to any minor latest version which will be update - 2.8.4
        ~ means later it can be updated to major version. - 3.0.1
        without ^ and ~ exact same version always.

    what is node_modules?
        its a folder where all the installed dependencies (both direct and transitive) for the project are stored.
        its a collection of modules.

    what is transitive dependencies?
        Transitive dependencies are dependencies that are not directly added to your project but are required by the packages you’ve already included in your project.

    How many package.json and package-lock.json files is available in our project?
        In root level one - one
        but in every module . they have their own package.json and package-lock.json file.

    should we push node_modules to github?
        no because it is very big in size. just put package.json and package-lock.json. put it in .gitignore - /node_modules
        we can re-create all node_modules with package.json using npm install.
        dist folder and parcel-cache also put in .gitignore bcz we can re-generate using package.json

    what is npx parcel index.html?
        npx means executing a package.
        we are executing parcel

    what is npx vite and npm run dev?
        npx means executing a package.
        both gives same result to Start a local development server.
        npm run dev: Runs the Vite server using the dev script defined in your package.json.
        px vite: Runs the Vite server directly from the local Vite installation without needing a script defined in package.json.

    Why cdn is not a preffered way to bring react and react dom to our project?
        it will be slower then install locally.

    how to install react?
        npm create vite@latest
        npm install react 
    
    Also install react-dom
        npm i react-dom

    how to start a server ?
        npx vite or npm run dev
        npx parcel index.html - use small script - In package.json scripts add==> "start": "parcel index.html ==> then use command npm run start or npm start
        for production add==> "build" : "parcel build index.html" - npm run build

    To use import export file type should be?
        "module"

    when we run app using Parcel?
    - Creates Dev Build
    - Creates Local Server
    - HMR = Hot Module Replacement - auto refreshing
    - File Watching Algorithm - written in C++
    - Caching - Faster Builds
    - Image Optimization
    - Minification
    - Bundling
    - Compress
    - consistent Hashing
    - code splitting
    - Differential Bundling - support older browsers
    - Diagnostics
    - Error Handling
    - HTTPs
    - Tree Shaking - remove unused code
    - Different dev and production bundles

    How make spa app is fast?
        not alone with react but using bundlers also.

    Feature                         Vite                         	                 Webpack                     	                            Parcel
    Configuration	    Minimal, zero-config (for modern apps)	Highly customizable, but complex    	Zero-config, automatic optimizations
    Development Speed	Extremely fast (esbuild)	            Slower, but highly customizable	        Fast, but may lag behind Vite in certain cases
    Build Optimization	Uses Rollup (great for production)	    Highly customizable optimization	    Built-in optimizations, but less flexibility
    Complexity	        Low, modern framework-focused	        High, steep learning curve	            Low, simple and intuitive
    Flexibility	        Moderate, ideal for modern apps	        Extremely high (supports any use case)	Limited flexibility, but good for simpler projects
    Use Case	        Modern JavaScript apps, fast builds	    Large, complex apps, legacy projects	Small to medium projects, fast prototyping

    How to make out app compatible to older version of Brosers?
      - broswerslist - its a npm package. it needs some configuration. in package.json

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 3 -Laying the foundation  -->
# Laying the foundation


##  ✅ What are DOM Elements?
        HTML elements rendered on the browser are called DOM (Document Object Model) elements.
        Example: <h1>Hello</h1> becomes a node in the DOM tree.

##  ✅ What are React Elements?
        React elements are JavaScript objects that describe what to render in the DOM.
        They are not HTML elements, but they become DOM elements when rendered.
        Example using React.createElement:
        const heading = React.createElement("h1", { id: "heading" }, "Plain Text");
        JSX is syntactic sugar for React.createElement, and also represents a React Element.

##  ✅ How to Render React Element?
        const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading); // Replaces existing content inside #root

##  ✅ What is JSX?
        JSX (JavaScript XML) is a syntax created by Facebook developers.
        It looks like HTML but is actually syntactic sugar for React.createElement.
        JSX makes code more readable and easier to write.
        JSX is not HTML in JS — it's HTML-like syntax.
        JSX is not part of React, and React can work without JSX.
        JS engine doesn't understand JSX directly.
        const jsxHeading = <h1 id="heading">Hello Chaman</h1>; // JSX → React Element
        
    Why use {} in JSX?
        To inject JavaScript expressions or call functions inside JSX.

    How does JSX work if JS engine can't understand it?
        JSX is transpiled (converted) to JavaScript using Babel.
        Babel is an open-source tool (not by Facebook).
        It converts JSX → React.createElement() calls.
        It also compiles modern ES6+ code to older JS for better browser support.

        Flow:
            JSX
            ⬇ (transpiled by Babel)
            React.createElement()
            ⬇
            React Element (JS Object)
            ⬇
            DOM Element (via render)

##  ✅ Differences Between HTML and JSX
        HTML	    JSX
        class	    className
        tabindex	tabIndex
        for	        htmlFor
        onclick     onClick

##  ✅ What is a Component in React?
        Building blocks of the UI.
        Describe a part of the interface.
        Components are:
                        Reusable
                        Nestable
        Must start with Capital letter
        Cannot be used before they are defined

##  ✅ Types of Components
        1. Functional Component (Modern)
            A JavaScript function that returns JSX.

                const HeadingComponent = () => {
                return <h1>React Functional Component</h1>;
                }

                // OR (shorter)
                const HeadingComponent = () => (
                <h1>React Functional Component</h1>
                );

            Rendering:
            root.render(<HeadingComponent />);

        2. Class Component (Older)

            class HeadingComponent extends React.Component {
            render() {
                return <h1>React Class Component</h1>;
            }
            }

##  ✅ Functional vs Class Components
        Class Component	        Functional Component
        Uses ES6 class syntax	Uses normal JS function
        Stateful	            Initially stateless (now supports state via Hooks)
        Uses this keyword	    No this keyword
        Lifecycle methods	    Uses Hooks (e.g., useEffect)
        Uses render() method	Returns JSX directly

    ✅ Other Concepts
    🔹 What is Component Composition?
        Using one or more components inside another component.
        const Layout = () => (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
        );

    🔹 How to Render JSX/JS in Component?
        Use {} to evaluate JavaScript expressions.
        const name = "Chaman";
        return <h1>Hello {name}</h1>;

    🔹 How to Use Component?
        These are all valid:
        <Component />
        <Component></Component>
        {Component()} // Not preferred, unless the component is a regular function

    ✅ Can We Write CSS in the Same File in React?
        Yes, by using inline styles as an object:
        const style = {
        color: "red",
        backgroundColor: "black"
        };

        return <h1 style={style}>Styled Heading</h1>;

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 4 -Talk is cheap, show me the code -->    
# Talk is cheap, show me the code

##  ✅ What is a Prop?
        prop is short for properties.
        Used to pass data from a parent component to a child component.
        Works just like arguments to a function.
        Enables dynamic data transfer into components.
        Under the hood, props is an object that holds all the values passed to a component.

    Three common patterns of using props:
        Parent → Child (standard)
        Child → Parent using a callback function (e.g., onClick, onChange)
        Parent → Deeply Nested Children using prop drilling

##  ✅ What is Config-driven UI?
        The behavior and structure of the UI is controlled by configuration/data, not hardcoded logic.
        Example: A JSON file determines which components to show and how they behave.
        Useful for building dynamic, flexible, and customizable UIs (e.g., forms, dashboards, CMS platforms).

##  ✅ What is Optional Chaining (?.)?
        A JavaScript feature that safely accesses deeply nested properties.
        Prevents errors when accessing properties on undefined or null.
        const user = {
        profile: {
            name: "Chaman"
        }
        };

        console.log(user?.profile?.name); // "Chaman"
        console.log(user?.address?.city); // undefined (no error thrown)

##  ✅ Why do we need to provide a key when looping through an array?
        React uses the key to identify each element in the virtual DOM.
        Helps React to optimize rendering by reusing and updating only the changed elements.
        Without a unique key, React will re-render all items even if only one changes.
        ⚠️ Do not use index as a key if the order of items might change — it can lead to rendering bugs.

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 5 -Let's get hooked -->   
# Let's get hooked

    Types of Export/Import?
        default  - export default NameOfComponent;
                   import NameOfComponent from "path";

        Named    - export const Component   ---- when we need to multiple export
                   import {Component} from "path";

    What is Hook?
    A React Hook is a built-in function provided by React that lets you use React features—such as state, lifecycle methods, and context—inside functional components.

##   What is React useState Hooks?
        useState lets you store data inside a component and update it in a way that triggers UI re-renders.
        a normal js function, its pre-built.
        it maintain the state of the component.
        it is use to create local state variable inside component.
        Regular variables don’t trigger UI updates. State does.
        whenever a state variable updates , react triggers reconciliation cycle(react re-render the component).
        it sync with ui layer with data layer.
        need to import hooks - import {useState} from "react";
        const [undefined,fn] =  useState();  --> use can pass default value like -> useState(here);
        - do not create useState outside component.
        - don't create useState in conditional,loops. it will create but code will be inconsistent.
        - don't create inside for loops
        - don't create inside functions
        - just create at higher lever of functional component.
        There are many functions:-
        -useState - state variable in react - returns array
        -useEffect()

    Reconciliation Algorithm?
        Also known as ReactFiber(React16)
        Reconciliation is the overall process React uses to update the UI.
         In React 16 and later, the Reconciliation Algorithm was completely re-implemented using a system called React Fiber.

    Virtual DOM?
        representation of actual DOM.
        A virtual DOM is a copy of the actual DOM stored in memory. React uses it to determine what exactly needs to change in the browser, instead of updating the whole UI.
        
        ⚒️ Process (Simplified):
            You update state/props → React re-renders component → Creates new Virtual DOM
            React compares new V-DOM to old V-DOM → Finds what changed (diffing)
            React updates only the changed parts in the real DOM (via Reconciliation)

    Diff algorithm?
        The diffing algorithm is a core part of React’s reconciliation process.
        It is the method React uses to compare the old virtual DOM and the new virtual DOM.

    Why react is fast?
        because it is doing  efficient DOM manupulation How? Bcz its has a virtual DOM
<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 6 -Exploring the world -->  
# Exploring the world

    Monolith vs Microservice Architecture?
        Monolith - traditionally app usses it. All code in same Service, if we need to change we need to build again , deploy whole project again.
        Microservices - small task in different services known seperation of concern.  how these services talk to each other?  all services run on their own port. all these port can map to a domain name.

    How web app fetch data from backend?
    two ways:-
        1- Fetch on page load and wait for data before rendering. - Page with Data
        2- Quick render on page load, then fetch the data and update the UI once it's available (this is the approach commonly used in React).
    In react we use 2nd approach.

    hook? React Hooks are JavaScript functions that offer predefined functionality to work with state, lifecycle events, and other features inside functional components.

    useEffect hook?
        if you need to done something after rendering the component write inside useEffect.
        It's useful for tasks like fetching data, setting up subscriptions, or manually updating the DOM.
        need to import hooks - import {useEffect} from "react";

        takes two argument.
        first - arrow callback function - its mandatory
        second - dependency array.- its not mandatory - changes the behaviour of the render.

        -if no dependency array - useEffect is called on every component render.
        -if dependency array is empty - [] => useEffect is called on initial render and just once.
        -if we put something in dependency array - it will call when dependency changes.
        
            syntax - useEffect(()=>{
                return ()=>{}
            },[]);
        when useEffect callback function be called? after every component render.

        why no async with useEffect?

    fetch()? given by browser, fetch return promise.

    Output:? how?
        useEffect(()=>{
            const timer = setInterval(()=>{
                console.log("HI")
            },1000)
            console.log("useEffect");
            return()=>{
                clearInterval(timer);
                console.log("useEffect Return")
            }
        },[]);
        console.log("render")

                    🧠 Execution Flow:
            1. When the component first renders:

            console.log("render") runs immediately during render phase.
            Then useEffect is triggered after the component mounts.
            Inside useEffect:

            setInterval starts.
            console.log("useEffect") runs once.
            Cleanup function (return) is saved but not called yet.
            🕒 After that:
            Every 1 second, the setInterval logs "HI".
            🧹 When the component unmounts or reloads:
            The cleanup function runs:
            clearInterval(timer) stops the interval.
            console.log("useEffect Return") runs once.

    How to convert data to json? data.json();

    CORS policy?

    corsproxy.io

    Shimmer UI? we load fake page untill we get data from the api.
                we can show skeleton.

    Condition rendering ? Rendering based on condition is condition rendering.

    Why we need state variable over normal variable? when state variable changes    react re-render the component that doesnot happend in normal variable. it trigger reconciliation.
    Behind the scene react contain one big object to store all the state variable.

    How const variable in useState can be updated? when we update value of state variable react render the component(calling function) that variable is a new variable and update with new value.
    
    🔁 What Happens in a React Controlled <input>:
        User types something
        onChange handler runs:
            → It grabs the input value from e.target.value
            → It updates React state using setState(value)
        React re-renders the component
        The new state value is passed to the value prop of the input
        The input displays that value back to the user

   When you use an <input> field in React and assign a value attribute (like value={stateVariable}), you're creating a controlled component.
    That means the input's value is controlled by React state, and you must update the state using onChange.
        <input
        value={stateVariable}
        onChange={(e) => setStateVariable(e.target.value)}
        />
    This ensures that when the user types something, the input field updates because:
        The onChange event fires.
        You call setStateVariable(e.target.value).
        React re-renders the component with the new stateVariable.
        That updated value is passed back into value={stateVariable} — keeping it in sync.
    🧠 Why this matters:
        If you use value without onChange, the input becomes read-only and won’t respond to typing.
        Controlled components give you full control over form behavior — like validation, formatting, or resetting inputs.

    ✅ What is e in onChange={(e) => ...}?
        In this code:
            <input onChange={(e) => setText(e.target.value)} />
        e is the event object automatically passed to your function by React.
        It's a SyntheticEvent in React — a wrapper around the native DOM event for better performance and cross-browser compatibility.

    🔍 Inside e (the event object):
    Here’s what e contains:
        Property	What It Means
        e.target	The element that triggered the event (the <input>)
        e.target.value	The current value of that element (what the user typed)
        e.type	Type of event (e.g. "change", "click")    

    every function has e?
        ❌ Not every function has e
        ✅ Only event handler functions (like for onClick, onChange, onSubmit, etc.) receive e automatically.

    ✅ When e is passed:
        Whenever a React (or regular DOM) event is triggered, the browser (or React) automatically passes the event object (e) to your handler function.

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 7 -Finding the path -->  
# Finding the path

    ReactRouter DOM?
        for configure routing between pages
         npm i react-router-dom

            import {createBrowserRouter,RouterProvider} from "react-router-dom"
            const Approuter = createBrowserRouter([
                {
                    path:"/",
                    element:<App/>,
                    errorElement: <Error/>
                },
                {
                    path:"/about",
                    element:<About/>,
                },
            ]);
            const root = ReactDOM.createRoot(document.getElementById("root));
            root.render(<RouterProvider  router={Approuter}/>)

        - There are more Router available other than createBrowserRouter. but react recommends this

    childrenRoutes - use Outlet - Outlet is a special component used to render child routes inside a parent route.
    Outle will replace by requesten Component.


    useRouterError Hook? more info about error
        const err = useRouterError();
        console.log(err); // return object
        {err.status}

    how to create Link to navigate ?
      - don't use anchor tag. bcz it refresh whole page.
      - use Link from react-router-dom
      -   <Link to="/path"></Link>

    Two types of Routing:-
        1. Client Side Routing - SPA
        2. Server Side Routing - loads the page

    Dynamic Routing? path: "/name/:dynamicId"


    useParam hook?
    gives what is there in url as param 
    http://localhost:1234/restaurants/24144
     import {useParams} from "react-router-dom";
     const {resId} = useParams();

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 8 -Let's get Classy -->
# Let's get Classy

## 🧬 Life Cycle Method
    Refers to the sequence of stages a component goes through from **creation to destruction**.

---

## 🏷️ Class-Based Component
    - It's a normal JavaScript class.
    - Uses the `class` keyword.
    - Needs to extend the `Component` class from React.
    - Has a `render()` method.
    - The `render()` method returns JSX.

### ✅ Syntax:
    
    import React from "react";

    class Name extends React.Component {
    render() {
        return (
        <div>Hello</div>
        );
    }
    }

    export default Name;

        🎁 How to Pass Props in a Class Component?
            Use a constructor: constructor(props)
            Must use super(props) inside the constructor.
            Display data with {this.props.name}
            Props can be accessed anywhere using this.props.

            class Welcome extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return <h1>Hello {this.props.name}</h1>;
            }
            }
            ⚠️ Loading a class-based component on the web page means creating an instance of the class.

        ❓ Why Do We Need super(props)?
            Because super(props) calls the constructor of the parent class (React.Component), enabling access to this.props inside the constructor.

        📦 How to Create State Variables in a Class Component?
            this.state = {
            count: 0,
            count2: 0,
            };
            This object stores all state variables.

        🔍 How to Access State Variables?
            {this.state.count}
            {this.state.count2}

        🔁 How to Update State Variables?
            ❌ You cannot update the state variable directly:
            this.state.count = this.state.count + 1; // ❌ wrong
            ✅ Use this.setState({}) instead:

            <button onClick={() => {
            this.setState({
                count: this.state.count + 1,
            });
            }}>
            Count Increase
            </button>

        ⚙️ Important Notes
            useEffect is not literally doing componentDidMount behind the scenes — it's a similar pattern for functional components.
            If setState updates only one variable, React will keep the others unchanged. (It merges, doesn't replace.)
            Loading, rendering, or mounting the component essentially mean the same thing.
            When a class is loaded, an instance is created, then:
            constructor -> render

        📌 componentDidMount() — Used for API Calls
            It runs after the component is mounted and render() is finished.

            Call order:
            constructor -> render -> componentDidMount

            🧪 If Both Parent and Child Have componentDidMount, Order Is:
            constructor (Parent)
            render (Parent)
            constructor (Child)
            render (Child)
            componentDidMount (Child)
            componentDidMount (Parent)

        ❓ Why Use componentDidMount for API Calls?
            Because it runs after the DOM is ready — ensures everything is rendered before making side effects like fetching data.

        🔁 What If Parent Has Two Identical Child Class Components?
            Two separate instances of the same class component will be created.

            🧱 Life Cycle Order:
            Parent Constructor
            Parent Render
            First Child Constructor
            First Child Render
            Second Child Constructor
            Second Child Render
            < DOM UPDATED IN SINGLE BATCH >
            First componentDidMount
            Second componentDidMount
            Parent componentDidMount

        React batches all child renders first, then commits the DOM updates at once because DOM updates are costly.

        🧬 React Lifecycle Method Diagram -  
        https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

        How things render in class-based components:
        Useful visual: React Lifecycle Diagram
        Refer to episode-8 at 1:30

        🔄 React Lifecycle: Phases

            🚀 Mounting
            constructor
            render — triggers reconciliation
            React updates the DOM & refs
            componentDidMount — commit phase
            All class-based components finish the render phase first. Then React performs a batch commit of DOM changes.

            🔁 Update Cycle
            render()
            componentDidUpdate()
            ❌ Unmounting

        componentWillUnmount() — when the component is removed or page changes

        🌐 How to Make API Calls in Class-Based Components?
            async componentDidMount() {
            const data = await fetch("https://api.example.com/data");
            const json = await data.json();
            this.setState({ data: json });
            }
        📚 Summary of React Lifecycle (Class-Based):
            ----- Mounting Cycle -----
            Constructor
            Render
            componentDidMount

            ----- Update Cycle -----
            render()
            componentDidUpdate

            ----- Unmounting -----
            componentWillUnmount

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 9 -Optimising our App -->
# Optimising our App

    single responsibility principle ?  every component have single responsibility.
    Modularity - divide code in diff module. code become resuable,maintainable,testable

##  Custom Hooks?  help code to become resuable,maintainable,testable.
        A custom hook in React is a JavaScript function that allows you to reuse stateful logic and side effects across multiple components. It is essentially a way to extract and share logic that is not specific to any one component. Custom hooks are built using React's built-in hooks (such as useState, useEffect, useContext, etc.) and follow the same rules as regular hooks (such as starting with use).

    why we need custom hook ? it is not mandatory thing , but a very good thing bcz that will make your code look more redable, more modular, more resuable.

    - prefer to create seperate file for seperate custom hook.

    is it mandatory to use "use" before custome hook? NO but its a recommend way.

    what is linter?
    A linter is a tool that analyzes your code to:
        ✅ Find errors and bugs
        📏 Enforce coding standards
        🧼 Improve code quality and readability
        ⚠️ Warn about potential issues before you run the code

    what is parcel ? its a bundler
    what is bundling? means all files make in one file. it will generate on js file.
    How to check? inspect-> network tab-> then click on js tab

    is it good to have on js file? problem is size of the js file will increase alot.
    How to optimise it? 

    ✅ Should we do bundling? Yes!
        Because we don’t want all components and code to load at once on the webpage — especially in large applications.

    Also, we don't want thousands of files bundled into one single JS file.
        Solution:  
        We will make smaller bundles of these files.  
        👉 This is known as:
        - Chunking
        - Code Splitting
        - Dynamic Bundling
        - Lazy Loading
        - On-Demand Loading
        - Dynamic Import
        - (and many other names)
  
         How it works?
        Instead of loading everything upfront, we load only what’s needed — when it's needed.
    
    ## What is Lazy Loading?
        When our app loads initially, a particular component will not load.
        ✅ That component will only load when you visit it (or when it's needed).

        This helps in:
        - Reducing initial bundle size
        - Improving app performance
        - Loading only what's required at the moment
        - Saving user data & improving speed on slow networks

        ---

        ✅ Example:
        const LazyComponent = React.lazy(() => import("./LazyComponent"));

        Use it with Suspense:
        <Suspense fallback={<Loading />}>
            <LazyComponent />
        </Suspense>
        
        💡 The fallback component shows while the lazy-loaded component is being downloaded.

        lazy()? it is a function which is given by React. lazy takes callback fn inside it write your component import.
            inside callack import is not above import we do in every compoent.
            inside import is a function which take the path of the Component.
          - The js file initial will not have code for lazyComponent.
          - When you visit that lazy Component in network tab where js files created there will be one more js file be created of lazyComponent.
          - Suspence is a component which comes from react. we need to put our lazyComponent between Suspence Component as above example where we are calling our lazyComponent.
          - and we need to give fallback  ? for what should react render if the code is not available like loading screen.

<!-- ------------------------------------------------------------------------------------------------ -->
<!-- 10 - Jo dikhta hai,vo bikta hai -->
# Jo dikhta hai, vo bikta hai
    How to write css in React?
    First way -     Normal tradition way-
    Second way -    Sass and SCSS are both CSS preprocessors — tools that extend the 
                    capabilities of standard CSS by adding features like variables, nesting, functions, and more.
            sass - Syntactically Awesome Style Sheets - writing css with some feature
            scss - SCSS is a newer syntax of Sass that is more like regular CSS.

                    This is not a recommend way
    Third way - 
        Tailwind Css?
        Chakra UI?
        Material UI? - give componet
        Bootstrap?
        ant design?
    What is Styled components? company uses it

##   Tailwind CSS
    how to configure Tailwind with parcel?
        npm install tailwindcss @tailwindcss/postcss

        create a file in root folder -> .postcssrc

        type inside .postcssrc
            {
            "plugins": {
                "@tailwindcss/postcss": {}
            }
            }

        
        postcss => a tool for transforming CSS with JavaScript
        tailwind uses postcss behind the scene
        if tailwind doesnot give suggestion - ctrl+spacebar
        it is lightweight - bcz it only include those classes which you have used once.












# Jspider ------------------------------------------------------------------------------------------------------

## Module

    A module is a way to organize and structure code by dividing it into smaller, reusable pieces.

    export :-
    import statement only execute in module...type="module"
    named - two way
            import - import{add,subtraction} from "./functions.js"
            1-export function add(n1,n2){
                return n1+n2;
                 }

               export function subtraction(n1,n2){
                 return n1-n2;
                 }
             2- export {add,subtraction};

    default- in one file only one function will export, we can use any name bcz only one function we are exporting
            function multiply(n1,n2){
                return n1*n2;
            }
            export default multiply

undefined vs null
undefined vs no defined
Get-ExecutionPolicy //unrestricted or remotesigned then good to go otherwise below step to follow
Set-ExecutionPolicy RemoteSigned // if it is restricted

terminal at folder location React -> npx create-vite@latest ->myreactapp-> cd myreactapp -> npm install -> npm run dev

what is framework? collection of library.
what is library? collection of pre defines codes, lightweighted.

why need react ? spa - have only one html page which donot need to reload, faster than mpa.

features of react :-
1- single page application - spa vs mpa
2- declarative - we don't tell react how to do, we just tell what to do. Ex -artists-we tell what to do, not how to do ---js is imperative
3- component based architechture -diving of page with diff diff building blocks. component -> building blocks of webpage, resuable code
4- Virtual DOM -

what is component?
building blocks of code,
components descibe a part of the user interface,
They are re-suable and can be nested inside other components
Two Type :-
1- Stateless function components
2- Statefull class components

types of components:-
class based components: functional components:

- js classes, js functions
- statefull stateless
- no hooks hooks(achieve to get statefull and life cycle)
- life cycle methods no life cycle method
- this keyword no this keyword
- render method returning html no render method

jsx - xml is casesensitive
function inside object is method.
npx vs npm
npx - npm package runner not need to install globaly.
npm - install package globally

folder structure:-
node module -all dependencies are installed, pre defined codes , npm install downloads node module
public folder - which files we need globally
src - everything we code in src, assests - all images etc.
index.html - only div with root id and script tag with main.js
.gitignore - which files we don't need to push
package.json - contains dependency detail about project with version , all library list
package-lock.json - detail about package.json

import {createRoot} from "react-don/client" --> createRoot lets you create a root to display React components inside a browser DOM node
createRoot(div).render(<h1>React</h1>);

createRoot(document.getElementById("root)).render(<h1>Hello React</h1>);

## functional components:- just js functions. that accepts input as properties(prop) and return jsx.

    Greet.jsx
    import React from "react";
    // function Greet(){
    //     return <h1>Hello Chaman</h1>
    // }
    const Greet = ()=> <h1>Hello CHaman</h1>
    export default Greet;

    main.jsx
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import Greet from "./codeEvolution/components/Greet";
    createRoot(document.getElementById("root")).render(<Greet></Greet>);

## Class Component

    class component are es6 classes. can optionally recieve props and return jsx, can maintain private data- state.
    Welcome.jsx
    import React,{Component} from "react";
    class Welcome extends Component{
        render(){
        return <h1>Hello Chaman Pratap</h1>
        }
    }
    export default Welcome;

    main.jsx
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import Welcome from "./codeEvolution/components/welcome";
    createRoot(document.getElementById("root")).render(<Welcome/>);

## JSX

    -Javascript XML(jsx) - Extension to the JavaScript language syntax.
    -Write XML-like code for elements and components.
    -JSX tags have a tag name, attributes and children.
    -it is not mandatory to use Jsx.
    -jsx transpiles to pure Javascript which is understood by the browers.
    -Class -> className
    -for -> htmlFor
    -camelCase property naming convention
        onclick -> onClick
        tabindex -> tabIndex

    Components with JSX:-
    Hello.jsx
    import React from "react";
    const Hello =()=>{
        return(
            <div className='dummyClass'>
                <h1>Hello Mr.</h1>
            </div>
        )
    }
    export default Hello;

    main.jsx
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import Hello from "./codeEvolution/components/Hello";
    createRoot(document.getElementById("root")).render(<Hello/>);

    Components without JSX:-
    Hello.jsx
    import React from "react";
    const Hello =()=>{
        return React.createElement('div',{id:'hello',className:'dummy'},React.createElement('h1',null,'Hello Mister'))  // first parameter - string with html tag, second - props, third - children for html element
    }
    export default Hello;

    main.jsx
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import Hello from "./codeEvolution/components/Hello";
    createRoot(document.getElementById("root")).render(<Hello/>);

## Props

    -props short for properties is the optional input that your component can accepts.
    -it also allows the components to be dynamic.
    -props are immutable means their value cannot be changed.

    props in functional Components:-
    import React from "react";
    const Greet = (props) => {
    console.log(props);
    return (
        <>
        <h1>
            Hello {props.name} a.k.a {props.heroName}
        </h1>
        {/* {} is feature of jsx which help react to evaluate jsx expressions. */}
        {props.children} //if you have no clue what is going to be pass as prop or want to pass as dynamic html content pass it in between component tag and render in component definition as prop.children.
        </>
    );
    };
    export default Greet;

    main.jsx
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import Greet from "./codeEvolution/components/Greet";
    import Welcome from "./codeEvolution/components/welcome";
    createRoot(document.getElementById("root")).render(
    <>
    <Greet name="Chaman" heroName="Hanuman"> <p>This id Children props</p> </Greet>
    <Greet name="Rajat" heroName="ShivShambu"> <button>Click me</button></Greet>
    <Greet name="Rishabh" heroName="Bajrangbali"/>
    </>

    );


    props in Class components:-
    Welcome.jsx
    import React,{Component} from "react";
    class Welcome extends Component{
        render(){
        return <h1>Welcome{this.props.name} a.k.a {this.props.heroName}</h1>
        }
    }
    export default Welcome;

    main.jsx
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import Greet from "./codeEvolution/components/Greet";
    import Welcome from "./codeEvolution/components/welcome";
    createRoot(document.getElementById("root")).render(
    <>
    <Welcome name="Chaman" heroName="Hanuman"></Welcome>
    <Welcome name="Rajat" heroName="ShivShambu"></Welcome>
    <Welcome name="Rishabh" heroName="Bajrangbali"></Welcome>
    </>
    );

## Props vs State

    props                               state
    props pass to the component         state is managed within the component.
    Analogy-Function parameters         Analogy- variables declared in the function body
    props are immutable                 state can be changed
    props - function components         useStateHook - Functional Components
    this.props - class components       this.state - Class Components

## State

notes - if key we acces which is not in object will give undefine.
react understand prop as obejct .
prop(key) name as attribute will be same as key in child component.
send data from child to parent using callbacks.
