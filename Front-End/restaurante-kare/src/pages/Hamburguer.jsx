import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Hamburguer(){
    
    const[hamburguers, setHaburguers] = useState([]);

    const exemplos = [
       {titulo:"Big Mac",
        foto:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br",
        preco:"25.90",
        descricao:"gostoso"
       },
       
       {titulo:"Cheddar",
        foto:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXv7hw4/200/200/original?country=br",
        preco:"30,10",
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
    return(
        <>
            <Header></Header>
            <div>
                {
                hamburguers.map((hamburguer)=>{
                    return(
                    <div>
                        <h1>{hamburguer.titulo}</h1>
                        <img src={hamburguer.foto} alt="foto do hamburguer"/>
                        <h3>{hamburguer.preco}</h3>
                        <p>{hamburguer.descricao}</p>
                    </div>
                    )
                })}
            </div>
        </>
    );
}
