import { saveJewleryChoice } from "./TransientState.js"

//What happens when the save submission button is clicked, similar to end of book 3
const handleSaveOrderClick = (clickEvent) => {
    if(clickEvent.target.id === "saveJewlery") {
        saveJewleryChoice()
    }
}

export const saveJewlery = () => {
    document.addEventListener("click", handleSaveOrderClick)

    return "<div><button id='saveJewlery'>Save Order</button></div>"
}