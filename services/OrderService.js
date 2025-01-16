import url from "./url";

export default async function createOrder(customer_name, items, total_price, is_delivery, target_time, payment_method) {
    let body = JSON.stringify({
        customer_name, items, total_price, is_delivery, target_time, payment_method
    })

    const response = await fetch(`${url}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body
        }
    )

    if (response.ok) {
        return response
    }
    return response
}
