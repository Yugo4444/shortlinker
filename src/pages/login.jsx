import "./login.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogin() {
    const fakeResponse = {
      success: email.length > 0 && password.length > 0
    }

    if (fakeResponse.success) {
      navigate("/home_lk")
    } else {
      alert("Ошибка входа")
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-header">
        <img
          className="logo"
          src="https://placehold.co/160x40/f4f4f5/09090b?text=ShortLinker"
          alt="ShortLinker"
        />
      </div>

      <div className="auth-card">
        <h2>Вход</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleLogin}>
          Войти
        </button>

        <p className="auth-footer">
          Нет аккаунта?{" "}
          <span onClick={() => navigate("/register")}>Зарегистрироваться</span>
        </p>
      </div>
    </div>
  )
}

export default Login
