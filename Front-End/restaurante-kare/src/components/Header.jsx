import {Link} from "react-router-dom";
import '../Fontes.css';

export default function Header(){

    const cor ={
        backgroundColor: "#363636",
        padding:"1rem"
    }

    const nav = {
        display:"flex",
        margin:"0.5rem",
        justifyContent:"space-between",
        justifyItems:"start",
        textDecoration:"none",
        
    }

    const link = {
        color: "white",
        textDecoration:"none",
        justifyContent:"inline-block",

    }

    return(
        <div style={cor}>

            <div style={{color:"#B22222"}}>
                <h1 className="titulo">Restaurante Karen</h1>
            </div>

            <div style={nav}>
                    <Link style={link} to="/hamburguer">Hambúrguer</Link>
                    <Link style={link} to="/sobremesa"> Sobremesa</Link>    
                    <Link style={link} to="/bebidas"> Bebidas</Link>                
            </div>        

               
        </div>
        
    );
}