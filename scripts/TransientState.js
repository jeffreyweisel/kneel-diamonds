// Set up the transient state data structure and provide initial values
const transientState = {
    "styleId": "",
    "metalId": "",
    "sizeId": 0
}


// Functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}


//Function that converts transient state to permanent state
export const saveJewleryChoice = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch ("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newJewleryChoiceAdded")
    document.dispatchEvent(customEvent)

}