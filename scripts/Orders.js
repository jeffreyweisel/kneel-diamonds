//Generate html for each new order that is created after save button is pressed
export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")  //have to access the fully expanded orders to get price property for each object
    const orders = await fetchResponse.json()
    let ordersHTML = orders.map(
        (order) => {
            
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div class="orders">Order #${order.id} costs ${orderPrice} </div>`
        }
    )

    return ordersHTML
}






