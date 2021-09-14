import { useState } from "react";

import { Header } from "../../components/header/Header";
import { Popup } from "../../components/popup/Popup";

import "../../styles/Register.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSearch } from "@fortawesome/free-solid-svg-icons";

import Mind from "../../assets/img/Mind.svg"
import Avatar1 from "../../assets/img/SVG/avatar (1).svg";
import Avatar2 from "../../assets/img/SVG/avatar (2).svg";
import Avatar3 from "../../assets/img/SVG/avatar (3).svg";
import Avatar4 from "../../assets/img/SVG/avatar (4).svg";
import Avatar5 from "../../assets/img/SVG/avatar (5).svg";

export function RegisterUser(props) {
  const [buttonAvatar, setButtonAvatar] = useState(false);

  return (
    <>
      <Header return="/" img={<img class="logo" src={Mind} alt="Logo Mind"/>}/>

      <div className="main">
        <div className="profilePic">
          <img className="avatar" src={Avatar4} alt="Escolha de avatar" />
          <a
            className="btnSearch fa-stack fa-3x"
            onClick={() => setButtonAvatar(true)}
          >
            <FontAwesomeIcon className="icon light" icon={faSquare} />
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </a>
        </div>

        <hr />

        <main className="section">
          <form>
            <div className="campos">
              <input name="name" type="text" placeholder="Nome" />
              {props.crp}
              {props.instituicao}
              {props.cpf}
              <input name="cell" type="number" placeholder="Telefone" />         
              <input name="email" type="email" placeholder="E-mail" />
              <input
                type="date"
                placeholder="Data de Nascimento"
                onfocus="(this.type='date')"
                name="birth"
              />

              <div className="column space radio">
                <input
                  className="radioHidden"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
                <label for="male">Masculino</label>

                <input
                  className="radioHidden"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label for="female">Feminino</label>

                <input
                  className="radioHidden"
                  type="radio"
                  name="gender"
                  id="others"
                  value="others"
                />
                <label for="others">Outros</label>
              </div>
              <div>
                {props.time}
              </div>

                {props.terapeutica}

              <input name="passwd" type="password" placeholder="Senha" />

              <button className="submit btn" type="submit">
                CONFIRMAR
              </button>
            </div>
          </form>
        </main>
      </div>

      <Popup trigger={buttonAvatar} setTrigger={() => setButtonAvatar(false)}>
        <div class="modal">
          <h1>Escolha seu avatar</h1>
          <div id="slider">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />

            <label for="s1" id="slide1">
              <img src={Avatar1} alt="Avatar1" />
            </label>
            <label for="s2" id="slide2">
              <img src={Avatar2} alt="Avatar2" />
            </label>
            <label for="s3" id="slide3">
              <img src={Avatar3} alt="Avatar3" />
            </label>
            <label for="s4" id="slide4">
              <img src={Avatar4} alt="Avatar4" />
            </label>
            <label for="s5" id="slide5">
              <img src={Avatar5} alt="Avatar5" />
            </label>
          </div>
          <input id="selectAvatar" class="submit btn" type="submit" />
        </div>
      </Popup>
    </>
  );
}
