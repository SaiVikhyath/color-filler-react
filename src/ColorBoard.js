import "./ColorBoard.css"


const ColorBoard = ({color, hexValue, isDarkText}) => {
    return (
        <div className="colorBoard"
            style={{
                backgroundColor: color,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>
                {color ? color : "Empty Value"}
            </p>
            <p>
                {hexValue ? hexValue : null}
            </p>
        </div>
    )
}

export default ColorBoard