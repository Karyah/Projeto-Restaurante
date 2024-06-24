import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h1>Restaurante Karen</h1>
            <nav>
                <ul>
                    <li><Link to="/hamburguer">Hambúrguer</Link></li>
                    <li> <Link to="/sobremesa"> Sobremesa</Link></li>
                    <li> <Link to="/bebidas"> Bebidas</Link> </li>
                </ul>
            </nav>
        </div>
        
    );
}