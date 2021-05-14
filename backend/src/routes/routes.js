const express = require('express')
const router = express.Router()
const {pool} = require('../database/database')

router.post('/registrar', async(req, res) => {
    try {
        const {
            tipo,
            zona,
            direccion,
            dormitorios,
            precio,
            tamano,
            observaciones
        } = req.body
        const client = await pool.connect()
        const response = await client.query(
            'INSERT INTO viviendas(tipo, zona, direccion, dormitorios, precio, tamano, observaciones) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id',
            [tipo, zona, direccion, dormitorios, precio, tamano, observaciones])

        if (response.rowsCount > 0) {
            res.json({
                id: response.rows[0].id,
                tipo: tipo,
                zona: zona,
                direccion: direccion,
                dormitorios: dormitorios,
                precio: precio,
                tamano: tamano,
                observaciones: observaciones
            })
        } else {
            res.json({});
        }
    } catch (e) {
        console.log(e.error)
        res.status(500).json({errorCode : e.errno, message : "Error en el servidor"});
    } finally {
        client.release(true);
    }
});

router.get('/todos', async(req, res) => {
    const client = await pool.connect()
    
    client.query(`SELECT * FROM viviendas`, (error, resulset) => {
        client.release(true);

        if (error) {
            console.log(error)
            return res.status(500).send('se presento un error en la base de datos.')
        } else {
            return res.json(resulset.rows)
        }
    })
});

router.get('/tipos', async(req, res) => {
    const {tipo} = req.query;
    const client = await pool.connect()
    
    client.query(`SELECT * FROM viviendas WHERE tipo = '${tipo}'`, (error, resulset) => {
        client.release(true);

        if (error) {
            console.log(error)
            return res.status(500).send('se presento un error en la base de datos.')
        } else {
            return res.json(resulset.rows)
        }
    })
});
module.exports = router