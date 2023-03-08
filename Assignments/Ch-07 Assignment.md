
# _Chapter 07 - Finding the path_

## Q1. What are various ways to add images into our App? Explain with code examples? 
- The first way to add images in our app using `CDN link`.
## Example:
``` javascript
 <img src = "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0"/>
```
- The second way to add images in our app using `import`.
## Example:
``` javascript
import {logo} from ".Images/logo.png";

function Header(){
  return(
    <>
    <img src = {logo} />
    </>
  )
}
```
firstly, In this we will store our image in any folder and then we will import that images via folder structure.
The good way of structuring of image folder is "assets/Images/logo.png"

## Q2. What would happen if we do `console.log(useState())`?
If we do `console.log(useState())`, we get an array [undefined, function] the first item is an array is state variable is undefined and the second item is an array is function which is setState function. This function through we can change the value of state variable.

## Q3. How will useEffect behave if we don't add a dependency array ?
If we don't add a dependency array in useEffect hook then, it will call callback function everytime when component (render or rerender) after the initial render.

## Q4. What is SPA?
`Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## Q5. What is difference between Client Side Routing and Server Side Routing?
- In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

- In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses `client-side routing`.










































 







