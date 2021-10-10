import { Header } from "../../components/header/Header";
import { Popup } from "../../components/popup/Popup";

import { useState } from "react";

import Mind from "../../assets/img/Mind.svg";
import Escolha from "../../assets/img/SVG/escolha.svg";
import EscolhaDark from "../../assets/img/SVG/escolhaDark.svg";

import "../../styles/Login.css";
import {Botoes, Entrar} from "../../styles"

export function Login() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopupVoluntary, setButtonPopupVoluntary] = useState(false);

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
          <Entrar
            name="username"
            type="text"
            id="txtLogin"
            className="txtbox"
            placeholder="Email / Celular"
          />
          <Entrar
            name="password"
            type="password"
            id="txtPassword"
            className="txtbox"
            placeholder="Senha"
          />

          <div className="buttons">
            <div className="boxRegister">
              <Botoes className="btn" href="#" onClick={() => setButtonPopup(true)}>
                Cadastrar
              </Botoes>
            </div>

            <div className="boxLogin">
              <Botoes
                type="button"
                className="btn"
                onclick="check(this.form)"
                value="Login"
              >Login</Botoes>
            </div>
          </div>
        </form>
      </div>

      <Popup trigger={buttonPopup} setTrigger={() => setButtonPopup(false)}>
        <h2>Escolha o tipo de usuário</h2>
        <img className="popup-choice" src={Escolha} alt="Avatar" />

        <div>
          <Botoes class="btn" onClick={() => setButtonPopupVoluntary(true)}>
            Voluntário
          </Botoes>
        </div>
        <div>
          <Botoes href="./RegisterUser" id="btnUser" class="btn">
            Usuário
          </Botoes>
        </div>
      </Popup>

      <Popup
        trigger={buttonPopupVoluntary}
        setTrigger={() => setButtonPopupVoluntary(false)}
      >
        <h2>Escolha o tipo de usuário</h2>
        <img className="popup-choice" src={EscolhaDark} alt="Avatar" />

        <div>
          <Botoes href="./RegisterFormado" class="darkbtn btn">
            Formado
          </Botoes>
        </div>
        <div>
          <Botoes href="./RegisterEstagiario" class="darkbtn btn">
            Estagiário
          </Botoes>
        </div>
      </Popup>
    </>
  );
}
