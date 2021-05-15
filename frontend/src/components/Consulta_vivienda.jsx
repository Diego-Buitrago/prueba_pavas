import React, {useState} from 'react'

const Consultar = () => {

    const [datos, setDatos] = useState([{}])
    const [tipo, setTipo] = useState('')
    
    const consultar_tipo = async(e) =>{
        e.preventDefault()
        if(tipo){
            if(tipo === "todos") {
                const res = await fetch('/todos')
                const data = await res.json()
                setDatos(data)
            } else {
                const res = await fetch('/tipos?' + new URLSearchParams({ tipo: tipo }));
                const data = await res.json()
                setDatos(data)
            }
        }
    }

    return (
        <>
            <div className="col" id="div-consulta">
                <h1>Consulta de viviendas</h1>
                <form onSubmit={(e)=>consultar_tipo(e)}>
                    <table className="table-tipo">
                        <tr>
                            <td><label>Mostrar vivienda de tipo:</label></td>
                            <td><select onChange={(e)=>{setTipo(e.target.value)}}>
                                <option>----</option>
                                <option value="todos">todos</option>
                                <option value="unifamiliar">unifamiliar</option>
                                <option value="colectiva">colectiva</option>
                            </select></td>
                            <td><input type="submit" name="enviando" value="mostrar"/></td>
                        </tr>
                    </table>
                </form>
                
                <table className="table table-dark mt-5" id="table-consulta">
                <tbody>
                    <tr>
                        <th>Tipo</th>
                        <th>Zona</th>
                        <th>Dormitorios</th>
                        <th>Precios</th>
                        <th>Tamaño</th>
                    </tr>
                    {
                        datos.map((item, index) => 
                            <tr key={index}>
                                <td>{item.tipo}</td>
                                <td>{item.zona}</td>
                                <td>{item.dormitorios}</td>
                                <td>{item.precio}</td>
                                <td>{item.tamano}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        </>
    )
}

export default Consultar
