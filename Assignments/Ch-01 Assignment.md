
# _chapter 01 - Inception_ 

## Q1. what is`Emmet`?
`Emmet` is a essential toolkit for web developers. Emmet is a plugin for many text editors which greatly improves HTML AND CSS Workflow.

Nesting operators: Child: >, Sibling: +,Multiplication: *

Child: >  => div>ul>li 

#### output : 
```html
<div>
    <ul>
       	<li></li>
    </ul>
</div>
```

## Q2. Difference between a Library and Framework?
 Library gives us to some basic functionalities to our app but Framework gives us to bunch of functionality like routing etc. using framework is sufficient for making fully fleged app.

## Q3. What is `CDN`? Why do we use it?
A `content delivery network(CDN)` is a geographically distributed network of server which help to us to get the data from that server.

## Q4. Why is React known as React? 
React goal is to react/respond accordingly whenever the state changes.

## Q5. What is `crossorigin` in script tag?
`Cross-Origin Resource Sharing (CORS)` is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## Q6. What is diference between `React` and `ReactDOM`?
- `React`: responsible for creating React elements (like document.createElement ())

- `ReactDOM`: responsible for rendering React elements to the DOM.

- Note: the reason that React and ReactDOM are separate is because ReactJs support other platforms as well like React Native.
 
## Q7. What is difference between react.development.js and react.production.js files via CDN?

- react.development.js is used when we are in development.

- react.production.js is used when we have to launch our web-app in production ( minifies app ).


## Q8. What is `async` and `defer`?

- In Normal script tag -> html parsing is stopped and script is fetched and executes and after that html parsing will be continue.

- `async` -> html parsing running and file downloads parallelly after sometime html parsing is stopped and js is executes and after that html parsing will be continue.

- `defer` -> js file download parallelly with html parsing and after sometime html parsing is fully completed then js file will be execute.


 







