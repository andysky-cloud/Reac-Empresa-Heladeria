function Cards(props){
    return(
        <div className={props.destacado ? "cards destacado" : "cards"}>
            <img src={props.imagen} />
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            <p>{props.categoria}</p>
            <p>${props.precio}</p>
            <p>{props.estado}</p>
        </div>
    )
}

export default Cards

