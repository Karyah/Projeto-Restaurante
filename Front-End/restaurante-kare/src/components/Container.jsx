
export default function Container(props){

    const container ={
        textAlign:"center"
    }

    return(
        <div style={container}>
            <h1>{props.nome}</h1>
            <img src={props.imagem} alt="imagem"/>
            <h3>{props.preco}</h3>
            <p>{props.descricao}</p>
        </div>
    );
}

