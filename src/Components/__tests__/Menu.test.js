import { render, waitFor, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import RestaurantMenu from "../RestaurantMenu.js";
import { MENU_DATA } from "../../mocks/data.js";
import Header from "../Header.js";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

// This is integration testing: because In this testing we are dealing with more than one component.
test("add item to cart", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(menu.getByTestId("menu")));

  const addButton = menu.getAllByTestId("add-btn");
  // console.log(addButton);
  fireEvent.click(addButton[0])


  const cart = menu.getByTestId("cart")

  expect(cart.innerHTML).toContain("1"); // cart.innerHTML is contain 1 then it means this add item to cart is working. Test is passed.
});
