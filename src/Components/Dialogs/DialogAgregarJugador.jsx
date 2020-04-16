import React, {useState} from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,TextField, DialogContentText,Grid,makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    input:{
        width:'100%'
    }
}))
export const DialogAgregarJugador = ({jugadores,setJugadores,goBack}) =>{
    const classes = useStyles()
    const [open,setOpen] = useState(true)
    const [nuevoJugador,setNuevoJugador] = useState('')
    const handleChange = e=>{setNuevoJugador(e.target.value)}
    const agregarJugador = ()=>{
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
            setJugadores(arr)
        }
    }
    return(
        <Dialog open={open}>
            <DialogTitle>
                Agregar Jugadores
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Al terminar de agregar todos los jugadores presionar el boton finalizar
                </DialogContentText>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField id="standard-name" label="Nombre del jugador" color='secondary' value={nuevoJugador} onChange={handleChange} className={classes.input}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{goBack()}}>
                    Cancelar
                </Button>
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
                {jugadores.length?
                    <Button 
                        onClick={()=>{
                        setOpen(false)
                    }}>
                        Finalizar
                    </Button>
                    :
                    null
                }
            </DialogActions>
        </Dialog>
    )
}