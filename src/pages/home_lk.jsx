import { useState } from "react"
import "./home.css"
import AppHeader from "../components/AppHeader"
import LinkCard from "../components/LinkCard"
import SettingsSidebar from "../components/SettingsSidebar"

function Home_lk() {
  const [url, setUrl] = useState("")
  const [links, setLinks] = useState([])
  const [sidebar, setSidebar] = useState(null)
  const [activeQR, setActiveQR] = useState(null)

  function handleShorten() {
    if (!url) return

    const newLink = {
      id: Date.now(),
      original: url,
      short: "short.ly/" + Math.random().toString(36).slice(2, 7)
    }

    setLinks([newLink, ...links])
    setUrl("")
  }

  function toggleQR(id) {
    setActiveQR(activeQR === id ? null : id)
  }

  return (
    <div className="dashboard">
      <AppHeader userLabel="Username" />

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
              showAnalytics
              showQrPopup
            />
          ))}
        </div>
      </div>

      <SettingsSidebar sidebar={sidebar} onClose={() => setSidebar(null)} />
    </div>
  )
}

export default Home_lk
