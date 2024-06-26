import '../Pages.css';

export default function Container(props){

    const container ={
        textAlign:"center",
        padding:"0.5rem",
        margin:"1rem",
        backgroundColor:"white",
        justifySelf: "stretch"
    }

    return(
        <div style={container}>
            <h1 className='titulo'>{props.nome}</h1>
            <img style={{width:"75%"}} src={props.imagem} alt="imagem"/>
            <h3>{props.preco}</h3>
            <p>{props.descricao}</p>
            <button>Adicionar ao Carrinho </button>
        </div>
    );
}

