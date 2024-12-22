import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("logo should be load on rendering header",() => {
    // load header
    const header = render(
    <StaticRouter>
        <Provider store = {store}>
            <Header />
        </Provider>
    </StaticRouter>
    );
    console.log(header);
    // check if logo is loaded
    const logo = header.getAllByTestId("logo");
    console.log(logo[0]);
    expect(logo[0].src).toBe("http://localhost/dummy.png");
})

// This is unit testing: because, In this we are dealing with one component. 
test("cart should be zero on rendering header", () => {
    // load header
    const header = render(
    <StaticRouter>
        <Provider store = {store}>
            <Header />
        </Provider>
    </StaticRouter>
    );
    // console.log(header);

    // check if logo is loaded
    const cart = header.getByTestId("cart"); // we used getByTestId for targeting one element.
    // console.log(cart);
    expect(cart.innerHTML).toContain("Cart") // Here, toContain is checking Cart is available in cart.innerHTML or not.
} )