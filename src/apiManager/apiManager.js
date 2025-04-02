import ENDPOINTS from "./EndPoints.js";
import APIMethods from "./apiMethods.js";

class ApiManager {
    static getCustomerDetails = (id) => {
        return APIMethods.get(ENDPOINTS.CUSTOMERS(id));
    }
    static updateCustomerDetails = (id, data) => {
        return APIMethods.patch(ENDPOINTS.CUSTOMERS(id), data);
    }

    static getSpecificOrder = (id) => {
        return APIMethods.get(ENDPOINTS.SPECIFIC_ORDER(id));
    }

    static newOrder = (customer_name, customer_id, items, total_price, is_delivery, target_time, payment_method) => {
        return APIMethods.post(ENDPOINTS.ORDERS(), {customer_name, customer_id, items, total_price, is_delivery, target_time, payment_method});
    }

    static updateOrderStatus = (id, data) => {
        return APIMethods.patch(ENDPOINTS.SPECIFIC_ORDER(id), data);
    }

    static deleteOrder = (id) => {
        return APIMethods.delete(ENDPOINTS.SPECIFIC_ORDER(id));
    }

    static getCustomerAddress = (customer_id) => {
        return APIMethods.get(ENDPOINTS.ADDRESS(customer_id));
    }

    static getPreviousOrders = (customer_id) => {
        return APIMethods.get(ENDPOINTS.USER_ORDERS(customer_id));
    }

    // static events = () => {
    //     return APIMethods.events();
    // }
}
export default ApiManager;