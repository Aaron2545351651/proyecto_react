function Libro(props) {
    
  const cardStyle = {
      height: '600px', // Ajusta la altura deseada aquí
    };
    
  return (
      <div className="col-md-4">
          <div className="card mb-3" style={cardStyle}>
              <img src={props.imagen} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-tittle">{props.titulo}</h5>
                  <p className="card-text" >{props.descripcion}</p>         
              </div>
          </div>
      </div>
  )
}

export default Libro;