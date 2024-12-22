import Body from "../body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data.js";
import "@testing-library/jest-dom";

// we created mock fetch for fetching the data.fetch return a promise in readable stream then we convert into json

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

//  1. Here, we are testing shimmer will load when search button will render.
test("shimmer should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);

  // shimmer will wait for search button then, it will render.
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const shimmer = body.getByTestId("shimmer");
  // expect(shimmer).toBeInTheDocument(); // toBeInTheDocument is coming from @testing-library/jest-dom
  expect(shimmer.children.length).toBe(15);
  expect(shimmer.children.length).not.toBe(10);
  // console.log(shimmer);
});

// 2. Here, we are testing restaurant will render when search will render.
test("restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);

  // shimmer will wait for search button then, it will render restaurant
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const res = body.getByTestId("res-list");

  expect(res.children.length).toBe(15);
  // console.log(res);
});

// 3. Here, we are testing search "food" string on homepage
test("search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  // we are creating mock value for search input because this is not a manual testing.
  fireEvent.change(input, {
    target: {
      value: "biryani",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  // we are mock clicking through fireEvent:
  fireEvent.click(searchBtn);

  const res = body.getByTestId("res-list");

  expect(res.children.length).toBe(2);
});
