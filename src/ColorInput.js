
import "./ColorInput.css"
import colorNames from "colornames"

const ColorInput = ({color, setColor, setHexValue, isDarkText, setIsDarkText}) => {
    return (
        <form className="colorInputForm" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="inputColor">Enter Color or Hex Code: </label>
            <input
                id="inputColor"
                placeholder="Enter Color or Hex Code"
                type="text"
                required
                value={color}
                onChange={
                    (event) => {
                        setColor(event.target.value)
                        setHexValue(colorNames(event.target.value))
                    }
                }
            />
            <button
                className="colorModeToggle"
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default ColorInput