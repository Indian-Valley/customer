const ENDPOINTS = {
    CUSTOMERS: (id) => `/customers/${id}`,

    ORDERS: () => `/orders`,
    SPECIFIC_ORDER: (id) => `/orders/${id}`,
    ADDRESS: (id)=> `/addresses/${id}`,

    USER_ORDERS: (id) => `/customers/previous-orders/${id}`,

    EVENTS: (id) => `/events/customers/${id}`,
}

export default ENDPOINTS;