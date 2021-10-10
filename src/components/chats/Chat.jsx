
import {IoIosArrowForward} from 'react-icons/io'
import {FaFlag,FaMicrophone,FaPaperPlane,FaStar,FaClock,FaComment} from 'react-icons/fa'
import "../../styles/Chat.css";
import { useState } from "react/cjs/react.development";

import { Popup } from "../popup/Popup";

import Avatar1 from "../../assets/img/SVG/avatar (1).svg";
import Avatar2 from "../../assets/img/SVG/avatar (2).svg";
import Avatar3 from "../../assets/img/SVG/avatar (3).svg";
import Avatar4 from "../../assets/img/SVG/avatar (4).svg";
import Avatar5 from "../../assets/img/SVG/avatar (5).svg";

export function Chat(props) {
  const [betray, setBetray] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="container">
        {props.leftNav ? props.children : ""}
        <main>
          <div className="title" onclick="">
            <div id="idProfile" className="profile">
              <div>
                <IoIosArrowForward onClick={props.seta} id="arrow"/>
              </div>
              <div
                className="profilePicName"
                onClick={() => setShowProfile(true)}
              >
                <img className="title_profile_pic" src={Avatar2} alt="" />
                <h2>Carina</h2>
              </div>
            </div>
            <div onclick="ModalBetray.open()">
              <FaFlag onClick={() => setBetray(true)} className="flag"/>
            </div>
          </div>
          <div className="current">
            <div className="msg_received">
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
            </div>

            <div className="msg_sent">
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
            </div>

            <div className="msg_received">
              <div className="balloons">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                  assumenda aliquid modi eum quos libero. Accusantium ducimus
                  quis atque cupiditate nobis, numquam officiis, sequi alias
                  suscipit deserunt magnam temporibus voluptas?
                </p>
                <small>11:39</small>
              </div>
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
            </div>

            <div className="msg_sent">
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
            </div>

            <div className="msg_received">
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
            </div>

            <div className="msg_sent">
              <div className="balloons">
                <p>Ameter ipsum dolor</p>
                <small>11:39</small>
              </div>
            </div>
          </div>
          <div className="message">
            <input
              type="text"
              name=""
              id="idMessage"
              placeholder="Digite sua mensagem"
              className="campo"
            />
            <FaPaperPlane className="send"/>
            <FaMicrophone className="send"/>
          </div>
        </main>
      </div>

      <Popup trigger={betray} setTrigger={() => setBetray(false)}>
        <div>
          <form method="GET" action="">
            <div className="form">
              <div>
                <span>
                  <FaFlag/>
                </span>
                <h2>Nos diga abaixo a sua denúncia</h2>
              </div>
              <div>
                <textarea
                  name="betray"
                  id="betray"
                  cols="60"
                  rows="15"
                ></textarea>
              </div>
              <button className="btn" onclick="ModalBetray.close()">
                {" "}
                Reportar!{" "}
              </button>
            </div>
          </form>
        </div>
      </Popup>

      <Popup trigger={showProfile} setTrigger={() => setShowProfile(false)}>
        <div className="modal">
          <div className="profile_stats">
            <img className="imgProfile" src={Avatar2} />
            <div className="all_stats">
              <h1>Carina</h1>
              <div className="stats rating">
                <FaStar/>
                <p>4.9</p>
              </div>
              <div className="stats chats">
                <FaComment/>
                <p>14</p>
              </div>
              <div className="stats timing">
                <FaClock/>
                <p>3 Meses</p>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
