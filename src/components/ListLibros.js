import dataLibro from '../data/Libro';
import Libro from './Libro';

function ListLibros() {
        
    let lstLibros = dataLibro.map(element =>{
        return <Libro
                    titulo={element.Titulo}
                    descripcion={element.Descripcion}
                    imagen={element.Images}
                />
    });

    return(
        <div className="col-md-6">
        <div className='row ml-auto'>
            {lstLibros}
        </div>
        </div>
    );
}

export default ListLibros;