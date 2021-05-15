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
                setError(null)
                setExito('Registro exitoso')
            } else {setExito('Error en el servidor contacta al administrador')}
            });
        }
    }
    console.log(dormitorios)

    return (
        <>
            <div className="div-registrar">
            <h1>Inserción de vivienda</h1>
            
            <form id="form" onSubmit={(e)=>insertar(e)} className="form-group">
                <table  className="table table-dark mt-5" id="table-registrar">
                    <tr>
                        <td colSpan="2"><h3>Indroduzaca los datos de la vivienda:</h3></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tipo">Tipo de vivienda :</label></td>
                        <td><select className="select-regis" onChange={(e)=>{settipo(e.target.value)}} name="tipo">
                            <option>----</option>
                            <option value="unifamiliar">unifamiliar</option>
                            <option value="colectiva">colectiva</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="zona">Zona:</label></td>
                        <td><select className="select-regis"  onChange={(e)=>{setzona(e.target.value)}} name="zona">
                            <option>----</option>
                            <option value="rural">rural</option>
                            <option value="urbana">Urbana</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="direccion">Direccion:</label></td>
                        <td><input
                            onChange={(e)=>{setdireccion(e.target.value)}}
                            type="text"
                            name="direccion"
                            id="diereccion"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="dormitorios">Numero de dormitorios:</label></td>
                        <td><div className="div-radio"  onChange={(e)=>{setdormitorios(e.target.value)}}>
                            <input type="radio" value="1" name="dormitorios"></input>1
                            <input type="radio" value="2" name="dormitorios"></input>2
                            <input type="radio" value="3" name="dormitorios"></input>3
                            <input type="radio" value="4" name="dormitorios"></input>4
                            <input type="radio" value="5" name="dormitorios"></input>5
                        </div></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="precio">Precio:</label></td>
                        <td><input
                            onChange={(e)=>{setprecio(e.target.value)}}
                            type="number"
                            min="1"
                            name="precio"
                            id="precio"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tamano">Tamaño:</label></td>
                        <td><input
                            onChange={(e)=>{settamano(e.target.value)}}
                            type="number"
                            min="1"
                            name="tamano"
                            id="tamano"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="observaciones">Observaciones:</label></td>
                        <td><textarea onChange={(e)=>{setobservaciones(e.target.value)}}></textarea></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="2"><input className="btn btn-success btn-block" type="submit" value="Insertar vivienda"/></td>
                    </tr>
                    
                </table>
            </form>
                
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
