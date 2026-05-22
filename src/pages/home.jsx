import { useState } from "react"
import "./home.css"
import AppHeader from "../components/AppHeader"
import LinkCard from "../components/LinkCard"
import SettingsSidebar from "../components/SettingsSidebar"
import { useNavigate } from "react-router-dom"

function Home() {
  const [url, setUrl] = useState("")
  const [links, setLinks] = useState([])
  const [sidebar, setSidebar] = useState(null)
  const [activeQR, setActiveQR] = useState(null)
  const [showGuestPopup, setShowGuestPopup] = useState(false)
  const [guestPopupShown, setGuestPopupShown] = useState(false)
  const navigate = useNavigate()

  function closeGuestPopup() {
    setShowGuestPopup(false)
  }

  function handleShorten() {
    if (!url) return

    const newLink = {
      id: Date.now(),
      original: url,
      short: "short.ly/" + Math.random().toString(36).slice(2, 7)
    }

    setLinks([newLink, ...links])
    setUrl("")

    if (!guestPopupShown) {
      setShowGuestPopup(true)
      setGuestPopupShown(true)
    }
  }

  function toggleQR(id) {
    setActiveQR(activeQR === id ? null : id)
  }

  return (
    <div className="dashboard">
      <AppHeader
        userLabel="Войти"
        userClickable
        onUserClick={() => navigate("/")}
      />

      <div className="dashboard__content">
        <div className="shortener">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Вставьте ссылку для сокращения"
          />
          <button type="button" className="btn btn--primary" onClick={handleShorten}>
            Сократить
          </button>
        </div>

        <div className="cards">
          {links.map((item) => (
            <LinkCard
              key={item.id}
              item={item}
              onOpenSidebar={setSidebar}
              activeQR={activeQR}
              onToggleQR={toggleQR}
              showQrPopup
            />
          ))}
        </div>
      </div>

      <SettingsSidebar sidebar={sidebar} onClose={() => setSidebar(null)} />

      {showGuestPopup && (
        <div className="guest-popup-overlay" onClick={closeGuestPopup}>
          <div
            className="guest-popup"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="guest-popup-title"
            aria-modal="true"
          >
            <button
              type="button"
              className="guest-popup__close"
              onClick={closeGuestPopup}
              aria-label="Закрыть"
            >
              ×
            </button>

            <h2 id="guest-popup-title" className="guest-popup__title">
              Войдите и получите больше возможностей
            </h2>
            <p className="guest-popup__subtitle">
              Сохраняйте ссылки и отслеживайте статистику
            </p>

            <ul className="guest-popup__features">
              <li>История сокращенных ссылок</li>
              <li>Аналитика переходов</li>
              <li>Доступ с любого устройства</li>
            </ul>

            <div className="guest-popup__actions">
              <button
                type="button"
                className="btn btn--primary guest-popup__btn"
                onClick={() => {
                  closeGuestPopup()
                  navigate("/")
                }}
              >
                Войти
              </button>
              <button
                type="button"
                className="btn btn--ghost guest-popup__btn"
                onClick={closeGuestPopup}
              >
                Продолжить без регистрации
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
