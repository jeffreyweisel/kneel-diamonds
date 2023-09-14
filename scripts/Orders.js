export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders =  await fetchResponse.json()
    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.metalId.price + order.styleId.price + order.sizeId.price
           
               return `<div>Order #${order.id} costs ${parseFloat(orderPrice)}</div>`
        }
    )

    return ordersHTML
}






