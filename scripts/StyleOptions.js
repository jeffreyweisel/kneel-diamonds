import { setStyle } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    //listens for change to the styles that are clicked
    document.addEventListener("change", handleStyleChange)
    
    

    // Use .map() to generate new array of strings
    const stylesArray = styles.map(
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )

    // Use join() to concatenate the array elements into a single string
    const styleOptionsHTMLString = stylesArray.join("")

    return styleOptionsHTMLString
}

//Handles what happens when different styles are clicked    
const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        setStyle(parseInt(changeEvent.target.value))
    }
}