import shoppingImg from "../../assets/shopping.svg"
import "./Header.css"

const Header=()=>{

    return (
        <>
        <div className="wrapper">
           <span className="header"><h1>Shopping List</h1></span>           
            <div className="shoppingImg">
                <img className="img" src={shoppingImg} alt="shoppingImg" />
            </div>
        </div>
        </>
    )
}

export default Header;