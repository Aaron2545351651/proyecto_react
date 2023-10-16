import Libro from './Libro';

function ListLibros(props) {
        
    let listLibrosRendered = props.elements.map(element =>{
        return <Libro
                    key={element.Id}
                    value = {element}
                    fnAddFavorites={props.fnAddFavorites}
                />
    });

    return(
        <div className="col-md-9">
        <div className='row ml-auto'>
            {listLibrosRendered}
        </div>
        </div>
    );
}

export default ListLibros;