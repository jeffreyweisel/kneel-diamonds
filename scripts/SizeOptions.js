import { setSize } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    //listens for change to the sizes that are clicked
    document.addEventListener("change", handleSizeChange)

    // Use .map() to generate new array of strings
    const sizesArray = sizes.map(
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )

    // Use join() to concatenate the array elements into a single string
    const sizeOptionsHTMLString = sizesArray.join("")

    return sizeOptionsHTMLString
}

//Handles what happens when different styles are clicked    
const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        setSize(parseInt(changeEvent.target.value))
    }
}