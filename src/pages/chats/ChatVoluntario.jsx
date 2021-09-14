import { useState } from "react/cjs/react.development";
import { Chat } from "../../components/chats/Chat";

export function ChatVoluntario() {
    
    const [chats , setChats] = useState(true);

    function ToggleLeftNav(){
    }
  return (
    <Chat
        leftNav={chats}
        seta={() => ToggleLeftNav(chats == true ? setChats(false) : setChats(true))}
        >
      <div id="leftnav" class="user-bar hide">
        <div class="profile_stats">
          <img class="imgProfile" src="./img/SVG/avatar (35).svg" />
          <div class="all_stats">
            <h1>José</h1>
            <div class="stats rating">
              <i class="fas fa-exclamation-triangle red"></i>
              <p>4.8</p>
            </div>
          </div>
        </div>

        <div class="medical_records">
          <div class="records">
            <div class="data_records">
              <div>
                <img class="imgProfile" src="./img/SVG/avatar (1).svg" />
                <p>Marcos</p>
              </div>
              <div class="stats rating">
                <i class="fas fa-exclamation-triangle red"></i>
                <p>5</p>
              </div>
            </div>
            <p class="record_text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              exercitationem eius amet cumque fugiat, provident repellat
              voluptatem voluptatibus facere cupiditate ab totam quibusdam ex
              dicta impedit officia nemo facilis quidem? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusantium praesentium itaque
              consequatur sapiente culpa veritatis placeat fugiat velit et illo
              quisquam voluptas eos nostrum vel consequuntur quam explicabo,
              tempore animi! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Doloremque sit enim repudiandae animi aut quia officiis
              cupiditate adipisci rerum odit dolore, laboriosam nemo quis soluta
              placeat. Quos adipisci fugit neque?
            </p>
          </div>
        </div>
        <div class="medical_records">
          <div class="records">
            <div class="data_records">
              <div>
                <img class="imgProfile" src="./img/SVG/avatar (2).svg" />
                <p>Roberta</p>
              </div>
              <div class="stats rating">
                <i class="fas fa-exclamation-triangle yellow"></i>
                <p>4</p>
              </div>
            </div>
            <p class="record_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur enim distinctio commodi dolorum, reiciendis voluptate
              aspernatur voluptas laborum provident magnam veniam consequuntur
              ab. Provident doloremque vel error alias temporibus repellendus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque sit enim repudiandae animi aut quia officiis cupiditate
              adipisci rerum odit dolore, laboriosam nemo quis soluta placeat.
              Quos adipisci fugit neque?
            </p>
          </div>
        </div>
        <div class="medical_records">
          <div class="records">
            <div class="data_records">
              <div>
                <img class="imgProfile" src="./img/SVG/avatar (3).svg" />
                <p>Juliana</p>
              </div>
              <div class="stats rating">
                <i class="fas fa-exclamation-triangle green"></i>
                <p>2</p>
              </div>
            </div>
            <p class="record_text">
              Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque sit enim repudiandae
              animi aut quia officiis cupiditate adipisci rerum odit dolore,
              laboriosam nemo quis soluta placeat. Quos adipisci fugit neque?
            </p>
          </div>
        </div>
        <div class="medical_records">
          <div class="records">
            <div class="data_records">
              <div>
                <img class="imgProfile" src="./img/SVG/avatar (4).svg" />
                <p>Silvia</p>
              </div>
              <div class="stats rating">
                <i class="fas fa-exclamation-triangle yellow"></i>
                <p>3</p>
              </div>
            </div>
            <p class="record_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempore deserunt impedit optio, magnam assumenda rerum eaque vero
              laudantium aliquam recusandae consequatur dolore sed alias beatae
              facilis dolorem exercitationem! Quia? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque sit enim repudiandae
              animi aut quia officiis cupiditate adipisci rerum odit dolore,
              laboriosam nemo quis soluta placeat. Quos adipisci fugit neque?
            </p>
          </div>
        </div>
      </div>
    </Chat>
  );
}
