import { render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Footer from "../Footer";


test("copyright should load on rendering footer", async () => {
    const footer = render(
        <StaticRouter>
            <Provider store = {store}>
                <Footer/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=> expect(footer.getByTestId("footer")))

    const footerDetail = footer.getByTestId("detail")
    console.log(footerDetail);
    expect(footerDetail.innerHTML).toContain("2023");
 
})