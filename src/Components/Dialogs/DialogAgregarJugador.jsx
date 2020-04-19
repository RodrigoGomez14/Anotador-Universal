import React, {useState} from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,TextField, DialogContentText,Grid,makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    input:{
        width:'100%'
    }
}))
export const DialogAgregarJugador = ({jugadores,setJugadores,goBack,juego,open,setOpen}) =>{
    const classes = useStyles()
    const [nuevoJugador,setNuevoJugador] = useState('')
    const handleChange = e=>{setNuevoJugador(e.target.value)}

    const agregarJugadorChinChon = ()=>{
        const arr = []
        {nuevoJugador &&
            jugadores.map(jugador=>{
                arr.push(jugador)
            })
            arr.push({
                nombre:nuevoJugador,
                resultados:[],
                total:0,
                ganador:false,
            })
            if(arr.length===10){
                setOpen(false)
            }
            setJugadores(arr)
        }
    }
    const agregarJugadorChorizo = ()=>{
        const arr = []
        {nuevoJugador &&
            jugadores.map(jugador=>{
                arr.push(jugador)
            })
            arr.push({
                nombre:nuevoJugador,
                resultados:[],
                escobas:0,
                puntosExtra:[],
                total:0,
                ganador:false,
            })
            if(arr.length===10){
                setOpen(false)
            }
            setJugadores(arr)
        }
    }
    const agregarJugadorEscoba = ()=>{
        const arr = []
        {nuevoJugador &&
            jugadores.map(jugador=>{
                arr.push(jugador)
            })
            arr.push({
                nombre:nuevoJugador,
                resultados:[],
                escobas:0,
                total:0,
                ganador:false,
            })
            if(arr.length===10){
                setOpen(false)
            }
            setJugadores(arr)
        }
    }

    const agregarJugador = ()=>{
        switch(juego){
            case 'chinchon':
                agregarJugadorChinChon();
                break;
            case 'chorizo':
                agregarJugadorChorizo();
                break;
            case 'escoba':
                agregarJugadorEscoba();
                break;
            default:
                break;
        }
    }
    return(
        <Dialog open={open}>
            <DialogTitle>
                Agregar Jugadores
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Al terminar de agregar todos los jugadores presionar el boton finalizar (Max. 10 Jugadores)
                </DialogContentText>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField id="standard-name" label="Nombre del jugador" color='secondary' value={nuevoJugador} onChange={handleChange} className={classes.input}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Button onClick={()=>{goBack()}}>
                            Salir
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            disabled={!nuevoJugador}
                            onClick={()=>{
                                agregarJugador(nuevoJugador)
                                setNuevoJugador('')
                            }}
                            color='secondary'
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            disabled={jugadores.length?false:true}
                            onClick={()=>{
                            setOpen(false)
                        }}>
                            Finalizar
                        </Button>
                    </Grid>
                </Grid>
                
            </DialogActions>
        </Dialog>
    )
}