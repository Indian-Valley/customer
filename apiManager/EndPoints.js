const ENDPOINTS = {
    CUSTOMERS: (id) => `/customers/${id}`,

    ORDERS: () => `/orders`,
    SPECIFIC_ORDER: (id) => `/orders/${id}`,
    ADDRESS: (id)=> `/addresses/${id}`,

    EVENTS: (id) => `/events/customers/${id}`,
}

export default ENDPOINTS;