import { MetalOptions } from './MetalOptions.js'
import { Orders } from './Orders.js'
import { saveJewlery } from './SaveOrders.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await saveJewlery()
    const orderHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
                </section>
                
                <section class="choices__options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
                ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${orderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

//Adds the new selection each time the save submission button is clicked
document.addEventListener("newJewleryChoiceAdded", render)

render()