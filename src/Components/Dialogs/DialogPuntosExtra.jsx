import React, {useState} from 'react'
import {Dialog,DialogTitle, DialogContent, DialogActions,Button,Grid,FormControl,makeStyles,Select,MenuItem,InputLabel} from '@material-ui/core'
import {DialogManoFinalizadaChinchon} from './DialogManoFinalizadaChinchon'
import {DialogManoFinalizadaChorizo} from './DialogManoFinalizadaChorizo'

const useStyles = makeStyles(theme=>({
    input:{
        width:'100%'
    }
}))

export const DialogPuntosExtra = ({open,setOpenFalse,jugadores,setJugadores}) =>{
    const classes = useStyles()
    const [jugadorElegido,setJugadorElegido]=useState(undefined)
    const [jugadaElegida,setJugadaElegida]=useState(undefined)
    const jugadas = [
        {
            nombre:'Escoba',
            puntos:1
        },
        {
            nombre:'2 del siete',
            puntos:2
        },
        {
            nombre:'3 del nueve',
            puntos:3
        },
        {
            nombre:'Flor',
            puntos:3
        },
        {
            nombre:'Chorizo',
            puntos:10
        },
    ]
    const obtenerPuntos =nombre=>{
        let puntos 
        jugadas.map(jugada=>{
            if(jugada.nombre===nombre){
                console.log(jugada.puntos)
                puntos = jugada.puntos
            }
        })
        return puntos
    }
    const agregarPuntajeExtra = () =>{
        let arr = jugadores
        arr.map((jugador,i)=>{
            if(jugador.nombre===jugadorElegido){
                if(jugadaElegida === 'Escoba'){
                    arr[i].escobas++
                }
                else{
                    let aux = arr[i].puntosExtra
                    let puntos = obtenerPuntos(jugadaElegida)
                    console.log(puntos)
                    aux.push(puntos)
                    arr[i].puntosExtra = aux
                }
            }
        })
        setJugadorElegido(undefined)
        setJugadaElegida(undefined)
        setJugadores(arr)
    }
    return (
        <Dialog open={open}>
            <DialogTitle>
                Agregar Puntajes Extra
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12}>
                        <FormControl className={classes.input}>
                            <InputLabel color='secondary' id="demo-simple-select-helper-label">Jugador</InputLabel>
                            <Select
                                color='secondary'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={jugadorElegido}
                                onChange={e=>{setJugadorElegido(e.target.value)}}
                            >
                                {jugadores.map(jugador=>(
                                    <MenuItem value={jugador.nombre}>{jugador.nombre}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={classes.input} >
                            <InputLabel color='secondary' id="demo-simple-select-helper-label">Jugada</InputLabel>
                            <Select
                                color='secondary'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={jugadaElegida}
                                onChange={e=>{setJugadaElegida(e.target.value)}}
                            >
                                {jugadas.map(jugada=>(
                                    <MenuItem value={jugada.nombre}>{jugada.nombre}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setJugadorElegido(undefined)
                    setJugadaElegida(undefined)
                    setOpenFalse()
                }}>
                    Cancelar
                </Button>
                <Button  color="secondary" disabled={jugadaElegida && jugadorElegido?false:true} onClick={()=>{
                    agregarPuntajeExtra()
                    setOpenFalse()
                }}>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}