import { Header } from "../components/Header";
import Mind from "../assets/img/Mind.svg";
import "../styles/Login.css";

export function Login() {
  return (
    <>
      <Header/>
      <div className="center">
        <img
          className="logoMind responsive"
          src={Mind}
          alt="Logo da Mind"
          title="Logo da Mind"
        />
        <form id="login-form" className="frmLogin">
          <input
            name="username"
            type="text"
            id="txtLogin"
            className="txtbox"
            placeholder="Email / Celular"
          />
          <input
            name="password"
            type="password"
            id="txtPassword"
            className="txtbox"
            placeholder="Senha"
          />

          <div className="buttons">
            <div className="boxRegister">
              <a className="btn" href="./Register">
                Cadastrar
              </a>
            </div>

            <div className="boxLogin">
              <input
                type="button"
                className="btn"
                onclick="check(this.form)"
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
