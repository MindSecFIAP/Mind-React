import "./Popup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import {FaTimesCircle} from 'react-icons/fa'

export function Popup(props) {
  return props.trigger ? (
    <>
      <div className="modal-overlay">
        <div className="modal-popup">
          <div>
            <button onClick={() => props.setTrigger(false)}>
              <FaTimesCircle className="iconClose"/>
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
