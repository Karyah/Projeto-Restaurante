import { useState, useEffect } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Cabecalho from "../components/Cabecalho";
import '../Pages.css';

export default function Sobremesa(){

    const[sobremesas, setSobremesas] = useState([]);

    const exemplos = [
        {nome:"Sorvete",
        imagem:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kpX0NLJ6/200/200/original?country=br",
        preco:"3.0",
        descricao:"Sorvete misto, sabores de baunilha e chocolate"},

        {nome:"Sorvete",    
        imagem:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kpX0NLJ6/200/200/original?country=br",
        preco:"3.0",
        descricao:"Sorvete misto, sabores de baunilha e chocolate"}
    ]

    useEffect(()=>{
        setSobremesas(exemplos);
    },[Sobremesa]);

    return(
    <>
        <Header></Header>
        <div className="display">
        {sobremesas.map((sobremesa)=>{
                return(
                    <Container nome={sobremesa.nome}
                        imagem={sobremesa.imagem}
                        preco={sobremesa.preco}
                        descricao={sobremesa.descricao}            
                    />
                )
            })} 
        </div>
        <Cabecalho></Cabecalho>
    </>
    )
}