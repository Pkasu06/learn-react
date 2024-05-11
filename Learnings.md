# Learnings

1. Understood the react flow and structure of it.
2. Learnt how react uses render, DOM to display a page. Also have seen how to create our own. Understood the difference between the way react-template and vite-template creates react app.
3. Understood why we need hooks like useState, useEffect.
4. Got to know the concept of Virtul DOM, Reconcilation Algorithm, Fibre. Learnt why keys are necessary when rendering a list or array or loops. Learnt that react is using Fibre instead of Virtual DOM and the glimpse of the algorithm.
5. Understood how to add tailwind to the project, how to pass props , way of building components.
6. Learnt how the state updation statements at a time looks like, and why it updates only once doesnt matter how many times we write. Also to get the rpevious state value as parameter in the call back to get it working.

        <button onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
        }}>+3</button>

        <button onClick={() => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
        }}>+3</button>

#### TODO
    - [ ] Need to read React Offical Docs about the useState hook and state management.

7. ### bgChanger app:
    - Just updated the bg color by using state, got the color value using onclick from the event targets inner text property. Also got to know why we use callback for the onclick if we have to take arguments, as by default the onclick function excepts the function , but not the return statement that the function returns, so if we use call back then it just returns the function instead of the return statement.
8. ### 05pwdGeneratorApp:
    1. Learnt how to manually generate a aplhanumeric password using Math.random, how to include, not to include special characters, numbers.
    2. Got to know about useCallback() hook and its usage while declaring methods/functions for optimized cache and performance, and how to pass dependency array to the useCallback() hook.
    #### TODO
        - [ ] Need to read React Offical Docs about the useCallback().
    3. Got to know about useRef() hook usage while copying the input content to clipboard.
    #### TODO
        - [ ] Need to read React Offical Docs about the useRef(), try to use useRef() hook and create something on my own so that i understand it better, see if inventory page in admin dashboard in the DSDJ cohort can be rewritten using useREf instead of using document.getQuerySelector().
    4. Understood how to copy the content to clipboard in React () `window.navigator.clipboard.writeText(contentVariableToCopyFrom)`
    5. Got to know about range input type for showing a range slider of numbers.
    6. Learnt about `defaultChecked` attribute on input checkbox, to check or uncheck the checkbox. Also got to know about using ! and changing the checkbox onChange instead of checking the value as below:
    `<input type="checkbox" id="charInput" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />`

9. ### 06currencyConvertorApp:
    1. Learnt about creating custom hooks for calling api in  a seperate hooks folder inside src folder. 
    2. Got to know about creating components in a seperate folder, (created InputBox), passing variables, functions as props from one component to another.

10. ### 07reactRoter:
    1. Two ways of Creating React Router and managing all the navigation links for header, footer.
    2. Getting Param values form the url, using react router, useParams() hook.
    3. Creating Layout file in such a way that deafult header, footer will come automatically for all the pages.
    4. `<Link />, <NavLink />` usage.  Got to know about some features of `<NavLink />`
    #### TODO
    - [ ] Need to learn more about React Router through documentation

11. ### Context API:
    1. Learnt why context API is required --> To avoid prop chaining. Context API provides a central context like a global variable, where any component can read or update the data instead of prop chaining.
    2. Other alternatives of Context AOI --> Redux: Redux Tool Kit (RTK), react-redux; Zustand are the popular ones.

12. ### 08minContext:
    1. Learnt how to create context, provider, how to read and update data from context. Below are the steps:
        1. Create "context" folder under src folder. 
        2. Create a Context file(say UserContext.js).
        3. Create a context variable(say UserContext), set `React.createContext()` to this variable and export the variable.
        4. Create Context Provider file(say UserContextProvider.jsx).
        5. In UserContextProvider file, wrap the code inside `<UserContext.Provider></UserContext.Provider>`. 
        6. Create a state and add the state variable, state function(this is the data you want to make available to other components). Add "value attribute with values as this state variable, state function." like this: 
            ```
            const UserContextProvider = ({children}) => {
                const [user, setUser] = useState(null);
                return(
                    <>
                        <UserContext.Provider value={{user, setUser}}>
                            {children}
                        </UserContext.Provider>
                    </>
                )
            }
            ```
        7. Now in `App.jsx` wrap the components with <UserContextPRovider> as below:
            ```
            function App() {
                return (
                    <UserContextProvider>
                    <h1>Context API in React</h1>
                    <Login />
                    <Profile />
                    </UserContextProvider>
                )
            }
            ```
        8. Updating values in context from child component: 
        ```
            import React, { useContext, useState } from 'react'
            import UserContext from '../context/UserContext'

            function Login() {

                const [username, setUsername] = useState("")
                const [password, setPassword] = useState("")

                const {setUser} = useContext(UserContext);

                const handleSubmit = (e) => {
                    e.preventDefault();
                    setUser({username, password});
                }
                return (
                    <div>
                        <h2>Login</h2>
                        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        {"  "}
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleSubmit} type="submit">Button</button>
                    </div>
                )
            }

            export default Login
        ```
        9. Getting data from context:

        ```
            import React, { useContext } from 'react'
            import UserContext from '../context/UserContext'

            function Profile() {

                const {user} = useContext(UserContext)
                if(!user) return <div>Please Login</div> 
                return <div>Welcome {user.username}</div>
                // return (
                //     <>
                //         {!user ? <div>Please Login</div> : `<div>Welcome ${user.username}</div>`}
                //     </>
                // )
            }

            export default Profile
        ```
13. ### 09themeSwitcher: 
    In this instead of writing seperate file for Context, ContextProvider, using `useContext` hook inside the child components to call context we can directly write everything in single file and use custom hook for calling the Context using `useContext` hook. 
    
    1. Below is the code of usage of `Theme.js`. Below while creating context itself we pass the values that need to added to the context, later these values or functions are declared
    in the `Appp.jsx`
    ```
       import { createContext, useContext } from "react"

        export const ThemeContext = createContext({
            themeMode: "light",
            darkTheme: () => {

            },
            lightTheme: () => {

            },
        });

        export const ThemeProvider = ThemeContext.Provider

        export const useTheme = () => {
            return useContext(ThemeContext);
        }
    ```
    2. `App.jsx`. We need to use the same variable, function names as we used inside while creating Context in `Theme.js` inside the values of the Provider, while declaring them in App.jsx as well 
    ```
        import { useEffect, useState } from 'react'
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        import './App.css'
        import ThemeBtn from './components/ThemeBtn'
        import Card from './components/Card'
        import { ThemeProvider } from './context/Theme'

        function App() {

        const [themeMode, setThemeMode] = useState("light");

        const lightTheme = () => {
            setThemeMode("light")
        }

        const darkTheme = () => {
            setThemeMode("dark")
        }

        // actual change in theme

        useEffect(() => {
            document.querySelector('html').classList.remove("light", "dark");
            document.querySelector('html').classList.add(themeMode);
        }, [themeMode])
        

        return (
            <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                    <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>
        )
        }

        export default App
    ```
    3. use the variable, functions in context using `useTheme` custom hook. 
    ```
        import { useTheme } from "../context/Theme";

        export default function ThemeBtn() {
            const {themeMode, lightTheme, darkTheme} = useTheme();
            const onChangeBtn = (e) => {
                const darkModeStatus = e.currentTarget.checked;
                if(darkModeStatus){
                    darkTheme()
                } else{
                    lightTheme()
                }
                
            }
            return (
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={onChangeBtn}
                        checked={themeMode === "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-white-900">Toggle Theme</span>
                </label>
            );
        }
    ```