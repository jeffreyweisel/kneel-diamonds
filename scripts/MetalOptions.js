import { setMetal } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    //listens for change to the metals that are clicked
    document.addEventListener("change", handleMetalChange)

    

    // Use .map() to generate new array of strings
    const metalsArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // Use join() to concatenate the array elements into a single string
    const metalOptionsHTMLString = metalsArray.join("")

    return metalOptionsHTMLString
}


//Handles what happens when different metals are clicked    
const handleMetalChange = (changeEvent) => {
        if (changeEvent.target.name === "metal") {
            setMetal(parseInt(changeEvent.target.value))
        }
    }