import { useState, useEffect } from "react";
import Header from "../components/Header"
import Container from "../components/Container";

export default function Hamburguer(){
    
    const[hamburguers, setHaburguers] = useState([]);

    const exemplos = [
       {nome:"Big Mac",
        imagem:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br",
        preco:"25.90",
        descricao:"gostoso"
       },
       
       {nome:"Cheddar",
        imagem:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXv7hw4/200/200/original?country=br",
        preco:"30.10",
        descricao:"muito bom"
       }
    ]

    useEffect(()=>{
        setHaburguers(exemplos);
        
    },[Hamburguer]);

    /*
    useEffect(()=>{
        fetch('localhost:8080/hamburguers')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setHamburguers(...data)})
        .catch((erro)=> {}
            console.log(erro)});
    }), []);
    */

    const display = {
        display: "flex",
        justifyContent:"space-evenly"
    }

    return(
        <div>
            <Header></Header>
            <div style={display}>
                {
                hamburguers.map((hamburguer)=>{
                    return(
                        <Container
                        nome={hamburguer.nome} 
                        imagem={hamburguer.imagem} 
                        preco={hamburguer.preco} 
                        descricao={hamburguer.descricao}/>
                    )
                })}
            </div>
        </div>
    );
}
