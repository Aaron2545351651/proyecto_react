import { useState } from "react";

function Libro(props) {
    

    const [verMas, setVerMas] = useState(false);

    let sectionVerMas = <button 
                        onClick={() => setVerMas(true)}
                        className="btn btn-success">Ver más</button>

    if(verMas)
    {
        sectionVerMas = <div>
            <button
                type="button"
                onClick={() => setVerMas(false)}
                className="btn-close float-end"
                aria-label="close" />  
            <hr />
            {props.value.Descripcion}
        </div>
    }

  return (
      <div className="col-md-4">
          <div className="card mb-3" style={{ height: '100%' }}>
              <img src={props.value.Images} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-tittle">{props.value.Titulo}</h5>
                  <p className="card-text" >{props.value.Descripcion.substring(0, 50)}</p>  
                  {sectionVerMas}
                  <button 
                        onClick={()=>props.fnAddFavorites(props.value)}
                        className="btn btn-warning">Favorito</button>
              </div>
          </div>
      </div>
  )
}

export default Libro;