import { useState, useRef } from "react"
import "./ColorPicker.css"

function ColorPicker() {
  const [color, setColor] = useState("#000000")
  const inputRef = useRef(null)

  function openPicker() {
    inputRef.current.click()
  }

  return (
    <div className="color-picker">
      <button
        type="button"
        className="color-picker__swatch"
        style={{ background: color }}
        onClick={openPicker}
        aria-label="Выбрать цвет"
      />
      <input
        ref={inputRef}
        type="color"
        className="color-picker__input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}

export default ColorPicker
