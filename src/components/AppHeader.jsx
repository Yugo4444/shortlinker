import "./AppHeader.css"

function AppHeader({ center, userLabel = "Username", onUserClick, userClickable = false }) {
  return (
    <header className="app-header">
      <img
        className="app-header__logo"
        src="https://placehold.co/140x32/fafafa/09090b?text=ShortLinker"
        alt="ShortLinker"
      />

      {center && <div className="app-header__center">{center}</div>}

      {userClickable || onUserClick ? (
        <button type="button" className="app-header__user" onClick={onUserClick}>
          <img
            className="app-header__avatar"
            src="https://placehold.co/32x32/f4f4f5/71717a?text=U"
            alt=""
          />
          <span className="app-header__label">{userLabel}</span>
        </button>
      ) : (
        <div className="app-header__user">
          <img
            className="app-header__avatar"
            src="https://placehold.co/32x32/f4f4f5/71717a?text=U"
            alt=""
          />
          <span className="app-header__label">{userLabel}</span>
        </div>
      )}
    </header>
  )
}

export default AppHeader
