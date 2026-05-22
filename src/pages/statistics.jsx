import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./home.css"
import "./statistics.css"
import AppHeader from "../components/AppHeader"
import LinkCard from "../components/LinkCard"
import SettingsSidebar from "../components/SettingsSidebar"

function Statistics() {
  const [sidebar, setSidebar] = useState(null)
  const [activeQR, setActiveQR] = useState(null)
  const navigate = useNavigate()

  const link = {
    id: 1,
    original: "https://google.com",
    short: "short.ly/abc12",
    clicks: 128
  }

  const countries = [
    { name: "Russia", value: 50 },
    { name: "Germany", value: 30 },
    { name: "USA", value: 48 }
  ]

  const browsers = [
    { name: "Chrome", value: 80 },
    { name: "Firefox", value: 25 },
    { name: "Safari", value: 23 }
  ]

  function toggleQR(id) {
    setActiveQR(activeQR === id ? null : id)
  }

  return (
    <div className="dashboard">
      <AppHeader
        center={
          <div className="all-links-link" onClick={() => navigate("/home_lk")}>
            <img src="https://placehold.co/28x28/f4f4f5/71717a?text=←" alt="" />
            <span>Все ссылки</span>
          </div>
        }
        userLabel="Username"
      />

      <div className="dashboard__content">
        <LinkCard
          item={link}
          onOpenSidebar={setSidebar}
          activeQR={activeQR}
          onToggleQR={toggleQR}
          clicks={link.clicks}
          originalUrl={link.original}
          showQrPopup
        />

        <section className="statistics-section">
          <h2 className="statistics-section__title">Переходы по странам</h2>
          <div className="chart-panel">
            <div className="chart">
              {countries.map((c) => (
                <div key={c.name} className="bar-row">
                  <div className="bar-label">{c.name}</div>
                  <div className="bar-bg">
                    <div className="bar-fill" style={{ width: `${c.value}%` }} />
                  </div>
                  <div className="bar-value">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statistics-section">
          <h2 className="statistics-section__title">Переходы по браузерам</h2>
          <div className="chart-panel">
            <div className="chart">
              {browsers.map((b) => (
                <div key={b.name} className="bar-row">
                  <div className="bar-label">{b.name}</div>
                  <div className="bar-bg">
                    <div className="bar-fill" style={{ width: `${b.value}%` }} />
                  </div>
                  <div className="bar-value">{b.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <SettingsSidebar sidebar={sidebar} onClose={() => setSidebar(null)} />
    </div>
  )
}

export default Statistics
