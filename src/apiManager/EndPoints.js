const ENDPOINTS = {
    CUSTOMERS: (id) => `/customers/${id}`,

    ORDERS: () => `/orders`,
    SPECIFIC_ORDER: (id) => `/orders/${id}`,
    CUSTOMER_ADDRESS: (id)=> `/addresses/${id}`,
    ADDRESS: ()=> `/addresses`,

    USER_ORDERS: (id) => `/customers/previous-orders/${id}`,

    EVENTS: (id) => `/events/customers/${id}`,
}

export default ENDPOINTS;