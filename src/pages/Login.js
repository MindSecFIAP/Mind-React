import { Header } from "../components/Header";
import { Popup } from "../components/Popup";

import {useState} from "react";

import Mind from "../assets/img/Mind.svg";
import Escolha from "../assets/img/SVG/escolha.svg";
import EscolhaDark from "../assets/img/SVG/escolhaDark.svg";

import "../styles/Login.css";

export function Login() {

    const [buttonPopup , setButtonPopup] = useState(false)
    const [buttonPopupVoluntary , setButtonPopupVoluntary] = useState(false)

  return (
    <>
      <Header />
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
              <a className="btn" href="#" onClick={()=>setButtonPopup(true)}>
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

      <Popup trigger={buttonPopup} setTrigger={() => setButtonPopup(false)}>

        <h2>Escolha o tipo de usuário</h2>
        <img src={Escolha} alt="Avatar"/>

        <div>
          <a class="btn" onClick={() => setButtonPopupVoluntary(true)}>
            Voluntário
          </a>
        </div>
        <div>
          <a href="#" id="btnUser" class="btn">
            Usuário
          </a>
        </div>
      </Popup>

      <Popup trigger={buttonPopupVoluntary} setTrigger={() => setButtonPopupVoluntary(false)}>

        <h2>Escolha o tipo de usuário</h2>
        <img src={EscolhaDark} alt="Avatar"/>

        <div>
            <a href="./formado.html"class="darkbtn btn">Formado</a>
        </div>
        <div>
            <a href="./estagiario.html" class="darkbtn btn">Estagiário</a>
        </div>

      </Popup>
    </>
  );
}
