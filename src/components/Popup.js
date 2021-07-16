import "../styles/Popup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export function Popup(props) {
  return props.trigger ? (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div>
            <button onClick={() => props.setTrigger(false)}>
              <FontAwesomeIcon className="icon" icon={faTimesCircle} />
            </button>

            {props.children}
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
