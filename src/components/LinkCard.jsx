import { useNavigate } from "react-router-dom"
import linkIcon from "../assets/icons/link.png"
import miniqrIcon from "../assets/icons/qr-code.png"
import settingsIcon from "../assets/icons/settings.png"
import statisticsIcon from "../assets/icons/statistics.png"


function LinkCard({
  item,
  onOpenSidebar,
  activeQR,
  onToggleQR,
  showAnalytics = false,
  showQrPopup = false,
  clicks = 0,
  originalUrl,
}) {
  const showAside = showAnalytics || showQrPopup
  const navigate = useNavigate()

  return (
    <article className="link-card">
      <div className="link-card__body">
        <div className="link-card__main">
          <div className="link-card__info">
            <img
              className="link-card__icon"
              src={linkIcon}
              alt=""
            />
            <div className="link-card__urls">
              <div className="link-card__short">Короткая: {item.short}</div>
              {originalUrl && (
                <div className="link-card__original">{originalUrl}</div>
              )}
            </div>
          </div>

          <div className="link-card__actions">
            <button type="button" className="btn btn--secondary">
              Копировать
            </button>
            <button
              type="button"
              className="btn btn--icon"
              onClick={() => onOpenSidebar("LinkSettings")}
              aria-label="Настройки ссылки"
            >
              <img src={settingsIcon} alt="" />
            </button>
            <button
              type="button"
              className="btn btn--icon"
              onClick={() => onOpenSidebar("QRSettings")}
              aria-label="Настройки QR"
            >
              <img src={miniqrIcon} alt="" />
            </button>
          </div>
        </div>

        {showAside && (
          <div className="link-card__aside">
            {showAnalytics && (
              <>
                <span className="link-card__clicks">{clicks} переходов</span>
                <button
                  type="button"
                  className="link-card__stats-btn"
                  onClick={() => navigate("/statistics")}
                  aria-label="Статистика"
                >
                  <img
                    className="link-card__stats-icon"
                    src={statisticsIcon}
                    alt=""
                  />
                </button>
              </>
            )}

            {showQrPopup && (
              <div className="qr-wrapper">
                <button
                  type="button"
                  className="link-card__qr"
                  onClick={() => onToggleQR(item.id)}
                  aria-label="QR-код"
                >
                  <img
                    src="https://placehold.co/72x72/fafafa/09090b?text=QR"
                    alt=""
                  />
                </button>

                {activeQR === item.id && (
                  <div className="qr-popup">
                    <div className="qr-popup__title">Экспорт QR-кода</div>
                    <div className="qr-popup__actions">
                      <button type="button">JPG</button>
                      <button type="button">PNG</button>
                      <button type="button">SVG</button>
                      <button type="button" className="qr-popup__download" aria-label="Скачать">
                        ⬇
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default LinkCard
