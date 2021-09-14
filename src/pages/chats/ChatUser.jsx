import { useState } from "react/cjs/react.development";
import { Chat } from "../../components/chats/Chat";

export function ChatUser() {

    const [chats , setChats] = useState(true);

    function ToggleLeftNav(){
    }

  return (
    <>
      <Chat
        leftNav={chats}
        seta={() => ToggleLeftNav(chats == true ? setChats(false) : setChats(true))}
        >
          <div id="leftnav" className="left-bar">
            <div className="search">
              <input
                type="text"
                name=""
                id="idSearch"
                className="campo"
                placeholder="Buscar"
              />
            </div>
            <div className="chats">
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (33).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Carina</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (46).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>José</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (41).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Maria</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (21).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Roberto</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (24).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Ronaldo</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (44).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Julia</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (38).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Alexandre</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (34).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Leonardo</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (37).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Beatriz</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (72).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Henrique</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (56).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Pietra</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
              <div className="chats_msgs">
                <img
                  className="chats_profile_pic"
                  src="./img/SVG/avatar (11).svg"
                  alt=""
                />
                <div className="chats_text">
                  <p>Danilo</p>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam aliquid qui rem odit, provident optio omnis
                    similique. Exercitationem dolorum, nam modi provident ea
                    cupiditate repudiandae tempora, cum facere sed aperiam.
                  </small>
                </div>
              </div>
            </div>
          </div>
          
          </Chat>
    </>
  );
}
