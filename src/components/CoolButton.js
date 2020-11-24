import 'bulma/css/bulma.css'
import React from 'react';


function CoolButton(props) {
    return(
            <button className={props.myClass}>{props.children}</button>
    )
}


export default CoolButton;