import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import SignIn from "./Components/SignIn";
// import Profile from "./Components/Profile";
import useOnline from "./utils/useOnline";
// import InstaMart from "./Components/InstaMart";
// import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store.js";

const InstaMart = lazy(() => import("./Components/InstaMart"));
// whenever we will do on demand loading in our website react will suspend our rendering of that component.and If we want to stop that suspend loading then, we will use <suspense> component from react library.

// These all are similiar things:
// code splitting
// chunking
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import

const AppLayout = () => {
  // const[user, setUser] = useState({ // It is a data which we used in User.Context.provider as value.
  //   name: "Ashu Negi",
  //   email: "ashunegi686@gmail.com"
  // });

  // This hook will return boolean value for online or offline
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> !Ooh Offline, Please Check your internet</h1>;
  }
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
      {/* <UserContext.Provider value = {{ // Basically, If we want to use `context` data in our every component then, we will wrap all the component inside our `user.Context.Provider` component and value is used for changing the default dummy data which is already placed in `UserContext.js`. The `value` attribute will change the default data with the `user` data.
        user: user, 
        setUser: setUser}}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider> */}
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        // children: [
        //   {
        //     //  we can create nested routes using children property in createBrowserRouter configuration...
        //     path: "profile",
        //     element: <Profile />,
        //   },
        // ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<h1> This is shimmer of Instamart</h1>}>
            {" "}
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); //Call createRoot api to create a React root for displaying content inside a browser DOM element.

//passing a react element inside the root

//async defer
root.render(<RouterProvider router={approuter} />); // render method help us to render the content in the browser DOM element.also we can use array list for passing multiple element in render method. render method replace all old element with new element which we pass in render method.
