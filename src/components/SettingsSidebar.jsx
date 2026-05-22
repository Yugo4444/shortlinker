import ColorPicker from "./ColorPicker"
import "./SettingsSidebar.css"

function SettingsSidebar({ sidebar, onClose }) {
  return (
    <>
      {sidebar && <div className="overlay" onClick={onClose} />}

      <aside className={`sidebar ${sidebar === "LinkSettings" ? "open" : ""}`}>
        <h2 className="sidebar__title">Параметры URL</h2>
        <div className="sidebar__fields">
          <label className="sidebar__field">
            <span className="sidebar__label">Идентификатор QR-кода</span>
            <input placeholder="yqrid" />
          </label>
          <label className="sidebar__field">
            <span className="sidebar__label">Идентификатор ссылки</span>
            <input placeholder="clckid" />
          </label>
        </div>
      </aside>

      <aside className={`sidebar ${sidebar === "QRSettings" ? "open" : ""}`}>
        <h2 className="sidebar__title">Параметры QR-кода</h2>
        <div className="sidebar__row">
          <ColorPicker />
          <span className="sidebar__label">Цвет кода</span>
        </div>
        <div className="sidebar__row">
          <ColorPicker />
          <span className="sidebar__label">Цвет фона</span>
        </div>
        <img
          className="sidebar__preview"
          src="https://placehold.co/200x200/fafafa/09090b?text=QR"
          alt="QR preview"
        />
      </aside>
    </>
  )
}

export default SettingsSidebar
