import { CartPage } from "./CartPage";
import { CheckoutPage } from "./ChckoutPage";
import { LaunchApplication } from "./LaungchApplication";
import { LoginPage } from "./LoginPage";
import { PaymentPage } from "./PaymentPage";
import { ProductsPage } from "./ProductsPage";

export class ObjectMapper {
    constructor(page) {
        this.page = page;

        this.launchAppInstance = new LaunchApplication(page);
        this.loginPageInstance = new LoginPage(page);
        this.productsPageInstance = new ProductsPage(page);
        this.cartPageInstance = new CartPage(page);
        this.checkoutPageInstance = new CheckoutPage(page);
        this.paymentPageInstance = new PaymentPage(page);
    }

    getLaunchAppInstance() {
        return this.launchAppInstance;
    }

    getLoginPageInstance() {
        return this.loginPageInstance;
    }

    getProductsPageInstance() {
        return this.productsPageInstance;
    }

    getcartPageInstance() {
        return this.cartPageInstance;
    }

    getCheckoutPageInstance() {
        return this.checkoutPageInstance;
    }

    getPaymentPageInstance() {
        return this.paymentPageInstance;
    }
}