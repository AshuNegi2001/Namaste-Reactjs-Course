# _Chapter -08 Lets get Classy_

## Q1. How do you create `Nested Routes` react-router-dom configuration?

```javascript
const router = createBrowserRouter([// it is router for creating multiple routing
    {path:"parent", // it will show path routing
    element: "component",// it will show component for particular path
    errorElement:"error"// it will show path of error component if the routing path is not found
    children : [ // this will  show nested routes
        {
            path: "child", // routing path of child
            element: "child-component", // show child-component
            children : [
                {
                    path: "sub-child",
                    element: "sub-component",
                    children: [ // show nested routes inside  another route
                        {path: "", // it will perform similiar like another
                        element: "
                        },

                        {path: "",
                        element: ""
                        }
                    ]
                }
            ]

        }
    ]
    },
    {path:"another-parent", // it will similiar perform like first object
    element : "component"}
])
```

## Q2. Read abt `createHashRouter`, `createMemoryRouter` from React Router docs?

- `createHashRouter` : This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".[Read More]("https://reactrouter.com/en/main/routers/create-hash-router")

- `createMemoryRouter` : Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.[Read More]("https://reactrouter.com/en/main/routers/create-memory-router")

## Q3. What is the order of `life cycle method` calls in `Class Based Components`?

This order is only for single `class based component`:

1. constructor()
2. render()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more details [React-Lifecycle-methods-Diagram]("https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/")

## Q4. Why do we use `componentDidMount`?

The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. Wwe can run any piece of react code to modify the components. For ex. It's the best place to make `API calls`.

## Q5. Why do we use `componentWillUnmount`? Show with example.

- `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
- For example, In Repository class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repository component.

## Q6. (Research) Why do we use `super(props)` in constructor?

- `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
- super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
- The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Q7. (Research) Why can't we have the `callback function` of `useEffect async`?

`useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
