import Logo from "../../assets/img/MindSec.svg"
import "./Header.css"

export function Header(props){

    return(
        <>
            <header>
                <div className="wrap">
                    <a href={props.return}> <img className="logo" src={Logo} alt="Logo MindSec"/> </a>
                    {props.img}
                </div>
            </header>
        </>
    )
}
