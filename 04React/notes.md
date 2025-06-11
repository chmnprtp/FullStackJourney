### Modules
in js we need to give full path with extension in import not in react
export one file only in default export.
we can change the name while importing the default module

for many file use name export
use {} in named import and export


## React - Open source library for building user Interfaces
    why learn React?
        - Created and maintain by Facebook
        - More than 100k starts on Github
        - Huge Community
        - In demand skillset
     

static - data donot change according to user
dynamic - data changes according to user

types of web applicaiton:-
    1) multipaage application - html ,css ,js , (page reloading) , previous or new request to server
    2) single page application - one html page - (no page reloading) , cache storage, not send prev request.

why not reloding in SPA - because of component based architecture

react - library of js, single page applicaiton
library - collection of predefine code
framework - collection of library known as framework
singlepage - one html page
imperative - have to tell wha to do how to do

create react app  -> depricate
 component - building block of webpage. which is resuable
 dom - tree like structure of html
 meta tag - for media query - responsive k lie

why use react? to make spa ui.
## feature of react
 - 1 single page applicaiton
 - 2 component based architecture - component - dividing of webpage in different different component
 - 3 declaritive (tell what to do how to do react will takecare)
 - 4 Virtual DOM - copy of real dom
 - 5 React native for mobile applications

# jsx - combination of js and xml - syntax extension of js used in react
- jsx is not necessary
- jsx transpile to js
rules:
    return single parent element
    use className instead of class
    self-closed empty tags
    Expression inside {}
    
Example: using JSX
    return(
        <div>
        <h1>hi My Name is Chaman</h1>
        </div>
    )

Example: Without using Jsx
    return React.createElement('div',{id:'hello',className:'dummyClass},React.createElement('h1',null,'hi My Name is Chaman'))

jsx differences:
    Class --> className
    for   --> htmlFor
    camelCase property convention
  onclick --> onClick
  tabindex-->tabIndex




package.json - stores the detail of project like - name of package , dependency etc.
package-lock.json - detail info of package.json

html vs xml
predefine in hmtl , user define in xml
one parent tag is mandatory in xml but not in xml
in xml we need to close unpair tag


##
createRoot - render to ui
component - return xml

## Components - building block of webpage - resuable code, can be nested inside other components.
component name Should be start with Capital letter.
 two types of components:
    1) class based
    2) function based

        ClASS BASED                     FUNCTION BASED
            js classes                       js function
            statefull                        stateless
            no hooks                         hooks
            life cycle methods               no life cycle methods
            this keyword                     no this keyword
            render method                    no render method

# functional component - is a js function that return jsx , use to define UI components in React
feature:-
    can recieve props
    return jsx to render UI
    supports Hooks
    simpler than class components

# class component - is js classes that return jsx which maintain internal state. 
 extends Component class
 render method which return jsx


# State - a container where we can store data within component
state are mutable.

js code will be before return statement in component
but in class based component we write js after render before return
to use js in return method in component we use {} 
no need to use () after function name in xml for example we pass in button attribute.


whenever state update it re-render the component all the parent and child component.
if multiple component are connected then child component will also re-render
every component will re-render 

# Hooks - inbuit method, identify prefix with use
        
    useState - is a React hook that allow to add state functionality to functional component
             - useState return array which have two element [undefined,f]
             Example - const [state,setState] = useState(initialValue);
             state: the current value
             setState: a function to update that value
             initialishValue:the starting value of the state

             -when we call setter function react re-renders the component with new value
             -useStae can hold any type: number,string,array,object,etc;

    in class based component - this point to current component

    Context API - Refers to the entire system in React that allows you to share state or data globally without prop drilling
    useContext - A React Hook that lets you access the context value inside functional components.

                The Context API includes:
                1. Create context -  React.createContext() — to create a context
                                     Create outside the component (usually at the top or in a separate file)
                                     Export the context for use in Provider and consumer components
                                     Example:- 
                                                const MyContext = React.createContext();
                                                export default MyContext; // ✅ Export it so it can be used elsewhere


                2. Provide context - Context.Provider — to provide the value to components
                                     Provider uses a built-in value prop to pass the data.
                                     Example: 
                                                <MyContext.Provider value={data}>
                                                <YourComponents />
                                                </MyContext.Provider>

                3. Consume Context - Context.Consumer — to consume the value (older way)
                                     Example: 
                                                <MyContext.Consumer>
                                                {value => <div>{value}</div>}
                                                </MyContext.Consumer>

                                     useContext() — the modern hook to access context in function components
                                     Example:
                                                const value = useContext(MyContext);

                                                 

                When you use useContext, every component that consumes the context will re-render whenever the context value changes, even if they don't actually use the part of the value that changed.


    useEffect - return nothing, take two argument - callback fn , dependency array.

                no array - works as render - run on mounting phase and update phase
                with array - only once in mounting
                with value in array - need you use useRef to stop rending on mounting phase

    useReducer - state management hook
                 large state to manage
                 return array [undefined ,fn]
                 [state,dispatch] = useReducer();
                 takes as argument - (reducerFN,initialState)

                 let [state,dispatch] = useReducer(reducerFn, initialState)
                 //Initialstate value store in state;

                 dispatch is a function
                 dispatch() is use to run reducerFn
                 whatever we pass in dispatch argument will go to reducerFn paramater aciton

                 reducerFn(prevState,action)

                 how to update : - code
                 use dispatch() fn in onClick() to run reduceFn


                 

    Redux - combination of useContext and useReducer
            state management library

    useMemo - performance optimisation hook
              accepts callback and dependecy array
              useMemo(()=>{},[])
              return memoised value
              stops un-necessary calculation
              will only recompute the memoized value when one of the deps has changed
    
    React.memo - isse child component render ni hoga agr state change ni hori to
    memo        - unnessary re-rendering ko rokna
                - memoised whole component
                - lets you skip- re-rendring a component when its props are unchanged.
                - it renders though you are not using props in child when state change in parent

    useCallback -   performance optimisation hook
                -   will return a memoized version of the callback that only changes
                   if one of the inputs has changed. 
               -   stops un-necessary re-rendring of child component 
                
                

# prop - a prop(short for property) is a way to pass data from parent component to child component
we pass props as attributes when calling a component.
props are immutable - child cannot modify
props make component reusable and dynamic
props.children if there is something between opening and closing tag of calling component


how to send data from child to parent component - using callback
propDrillig - sending data from parent component to nested component 
    P - C - C
    
#               Prop             Vs               State
    Prop passed to Component             Manage within Component
    Function Parameter                   Variable declared in function Body
    Props are immutable                  state can be changed
    props in Function Components         useState hook  - Functional Components
    this.props in Class Components       this.state in Class Components


# Add CSS in React
Types of CSS:
Inline - use camelCase not -  ==> backgroundColor not background-color
Global - file create in src folder where main and App are present - import in main - import "./global.css"
Module - for particular component - .module.css
         In module.css don't directy target with element selector bcz of nesting component. use combinator selector(binding)


# Forms
    Controlled Form - useState - form data handled by component state - uses virtual dom
        always use onChange atttribute  and value
        e.target.value

    unControlled Form - useRef - uses real dom 
    useRef - return object. it is a hook
    can use to target element by ref
    ref.current.value

# parameter are container which store argument



# Tailwind
tailwind css intellisense

 three way


    01
    Install Tailwind CSS
    npm install tailwindcss @tailwindcss/vite


    02
    Configure the Vite plugin
    Add the @tailwindcss/vite plugin to your Vite configuration.

    vite.config.ts
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    })


    03
    Import Tailwind CSS
    Add an @import to your CSS file that imports Tailwind CSS.
    CSS
    @import "tailwindcss";


# DOM /Browser DOM- tree like structure of html document

Virtual DOM / in Memory DOM - copy of DOM

in every update new Virtual dom created with updated value
- react compare between new virtual dom and virtaul dom the change - uses Diffing algorithm

- if there is any differen between both it only update that node which is changed.

- use ref used real DOM

- if we update 0 -1 -2 again new virtual dom will be created then it will check to previous new virtual dom the the previous on will be deleted

- changng between new virtual dom to real dom known as patching

- whole process is known as reconciliation

- diffing algo waits for some fraction time to update


# Life cycle method
 - mount
 - update
 - unmount

 user component visit kre then api call ho.



    MOUNTING                     UPDATING                         unMounted

    Constructor()                   

    render()                        render()                        -----------

                             getSnapshotBeforeUpdate()

- monut hoke k baad                                          - unMount hone se pehle
componentDidMount()          ComponentDidUpdate()             ComponentWillUnmount()
                           

constructor - to initialise state before render




getSnapshotBeforeUpdate() - update se pehle value kya tha...


to stop api - use useEffect()


# 🌐 DOM & Virtual DOM

🔹 DOM (Document Object Model)
Tree-like structure of the HTML document.
Browser creates this structure from HTML and renders it.
🔹 Virtual DOM
A lightweight copy of the real DOM, kept in memory.
Used by libraries like React to improve performance.
⚙️ How Virtual DOM Works (React):

On every update, a new Virtual DOM is created with updated values.
React compares the new Virtual DOM with the previous one using the Diffing Algorithm.
Only the parts that have changed are updated in the real DOM.
This update process is called patching.
The entire process (diff + patch) is called Reconciliation.
React delays DOM updates slightly (batching) to optimize performance.
🔸 Using useRef gives you direct access to the real DOM.

# 🔁 React Lifecycle Methods  

🟩 Mounting Phase
Executed when the component is created and inserted into the DOM.

        Method	                     Purpose
        constructor()	             Initialize state, bind methods
        render()	                 Returns JSX to render UI
componentDidMount()	              Called after component mounts; used for API calls

🟨 Updating Phase
Executed when the component’s props or state change.

        Method	                    Purpose
        render()	                Re-renders UI with updated state/props
        getSnapshotBeforeUpdate()	Captures info (e.g., scroll position) before update
        componentDidUpdate()	    Called after the component is re-rendered

🟥 Unmounting Phase
Executed when the component is removed from the DOM.

            Method	                 Purpose
            componentWillUnmount()	Cleanup (e.g., remove listeners, cancel timers)
            
🔄 Example Flow:
// User visits page:
constructor() → render() → componentDidMount() → (API call)

// User updates something:
render() → getSnapshotBeforeUpdate() → componentDidUpdate()

// User leaves the page:
componentWillUnmount()


## Routing
    visiting from one path to another path

    npm i react-router-dom

    1) BrowserRouter        - OLD
    2) createBrowserRouter  - NEW
    
    1) Browser
    BrowserRouter - import first - is a Components - all three are components
    Routes- if one route then we don't need Routes
    Route - inbuilt prop - path="/" element={<Home/>}
    Link - component - alternative for anchor tag  <Link to=""> -- it will give error
            every component should have child of BrowserRouter - put navbar inside BrowserROuter
    NotFound - <Route path="*" element={<NotFound/>}/>

    2) createBrowserRouter
        createBroswerRouter - is a function  - create routes
                            accepts array in arguments
                            return routes
                            creates routes as object in that array using path:"/",element:<Layout/>
                            children key - accepts array

                             

        RouterProvider - inbuit prop router={} - provide routes
                         navbar between RouterProvider

        In layout Component - Outlet component - renders the mathcing child route
        Link Component and to attribut here also works in navbar


## code spliting 
        performance optimisation
        by lazy loading - change import statement  - when we render that particular method reloads

        - lazy method 
                - accepts callback in argument
                const Home = lazy(()=> import ("../../pages/Home))
                - those component which are on screen will be load
  
        - Suspense component - 
                <Suspense fallback={style} prop>
                    
                <Suspense>

## uiverse library