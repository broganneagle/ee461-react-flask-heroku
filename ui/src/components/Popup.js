import React from'react'
import "./Popup.css"

function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup