import React, {useState} from 'react'

const Registrar = () => {

    const [tipo, settipo] = useState('')
    const [zona, setzona] = useState('')
    const [direccion, setdireccion] = useState('')
    const [dormitorios, setdormitorios] = useState('')
    const [precio, setprecio] = useState('')
    const [tamano, settamano] = useState('')
    const [observaciones, setobservaciones] = useState('')
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)
  
    const insertar = (e) => {
        e.preventDefault()

        if (tipo === '') {
            setError('Ingresa tipo de vivienda')
        } else if (zona === '') {
            setError('Ingresa zona')
        } else if (direccion === '') {
            setError('Ingresa una direccion')
        } else if (dormitorios === '') {
            setError('Ingresa dormitorio')
        } else if (precio === '') {
            setError('Ingresa un precio')
        } else if (tamano === '') {
            setError('Ingresa un tamaño')
        } else {
            fetch("/registrar", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tipo: tipo,
                zona: zona,
                direccion: direccion,
                dormitorios: dormitorios,
                precio: precio,
                tamano: tamano,
                observaciones: observaciones
            }),
            }).then((res) => {
                if (res.status === 200) {
                setExito('Registro exitoso')
            } else {setExito('Error en el servidor contacta al administrador')}
            });
        }
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <form id="form" onSubmit={(e)=>insertar(e)} className="form-group">
                        <label htmlFor="tipo">Tipo de vivienda :</label>
                        <br></br>
                        <select onChange={(e)=>{settipo(e.target.value)}} name="tipo">
                            <option>----</option>
                            <option value="unifamiliar">unifamiliar</option>
                            <option value="colectiva">colectiva</option>
                        </select>
                        <br></br>
                        <label htmlFor="zona">Zona:</label>
                        <br></br>
                        <select  onChange={(e)=>{setzona(e.target.value)}} name="zona">
                            <option>----</option>
                            <option value="rural">rural</option>
                            <option value="urbana">Urbana</option>
                        </select>
                        <br></br>
                        <label htmlFor="direccion">Direccion:</label>
                        <input
                            onChange={(e)=>{setdireccion(e.target.value)}}
                            type="text"
                            className="form-control"
                            name="fecha"
                            id="fecha"
                        />
                        <label htmlFor="dormitorios">Numero de dormitorios:</label>
                        <br></br>
                        <input  onChange={(e)=>{setdormitorios(e.target.value)}} type="radio" value="1"></input>1
                        <input onChange={(e)=>{setdormitorios(e.target.value)}} type="radio" value="2"></input>2
                        <input onChange={(e)=>{setdormitorios(e.target.value)}} type="radio" value="3"></input>3
                        <input onChange={(e)=>{setdormitorios(e.target.value)}} type="radio" value="4"></input>4
                        <input onChange={(e)=>{setdormitorios(e.target.value)}} type="radio" value="5"></input>5
                        <br></br>
                        <label htmlFor="precio">Precio:</label>
                        <input
                            onChange={(e)=>{setprecio(e.target.value)}}
                            type="number"
                            min="1"
                            className="form-control"
                            name="precio"
                            id="precio"
                        />
                        <label htmlFor="tamano">Tamaño:</label>
                        <input
                            onChange={(e)=>{settamano(e.target.value)}}
                            type="number"
                            min="1"
                            className="form-control"
                            name="tamano"
                            id="tamano"
                        />
                        <label htmlFor="tamano">Observaciones</label>
                        <br></br>
                        <textarea  onChange={(e)=>{setobservaciones(e.target.value)}}></textarea>
                        <input
                            type="submit"
                            className="btn btn-dark btn-block mt-2"
                            value="Insertar vivienda"
                        />
                    </form>
                </div>
                {
                        error != null ? (
                            <div id="error" className="alert alert-danger mt-2">{error}</div>
                        ):
                        (
                            <div></div>
                        )
                }
                {
                        exito != null ? (
                            <div id="error" className="alert alert-success mt-2">{exito}</div>
                        ):
                        (
                            <div></div>
                        )
                }
            </div>
        </>
    )
}

export default Registrar
