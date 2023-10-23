import { useState } from "react";

function CrearLibro(props) {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [images, setImages] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.fnNuevoLibro({
            'Titulo': titulo,
            'Descripcion': descripcion,
            'Images': images
        });

        setTitulo("");
        setDescripcion("");
        setImages("");
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}
            className="border border-2 border-secondary p-2 rounded">
            <input placeholder="Titulo"
                className="form-control mb-2"
                type='text' 
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required/>

            <input placeholder="Descripcion"
                className="form-control mb-2"
                type='text' 
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required/>

            <input placeholder="Imagen"
                className="form-control mb-2"
                type='text' 
                value={images}
                onChange={(e) => setImages(e.target.value)}
                required/>
                
            <input type="submit" value="Crear"
                className="btn btn-primary" />
        </form>
    );   
}

export default CrearLibro;