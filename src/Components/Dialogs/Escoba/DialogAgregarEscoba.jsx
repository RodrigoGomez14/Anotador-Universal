import React, {useState} from 'react'
import {Dialog,DialogTitle, DialogContent, DialogActions,Button,Grid,FormControl,makeStyles,Select,MenuItem,InputLabel,Typography} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    input:{
        width:'100%'
    }
}))

export const DialogAgregarEscoba = ({open,setOpenFalse,jugadores,setJugadores}) =>{
    const classes = useStyles()
    const [jugadorElegido,setJugadorElegido]=useState(undefined)

    const agregarEscoba = () =>{
        let arr = jugadores
        arr.map((jugador,i)=>{
            if(jugador.nombre===jugadorElegido){
                arr[i].escobas++
            }
        })
        setJugadorElegido(undefined)
        setJugadores(arr)
    }
    return (
        <Dialog open={open}>
            <DialogTitle>
                Agregar Escoba
            </DialogTitle>
            <DialogContent>
                <Typography variant='body1'>
                    Selecciona el jugador
                </Typography>
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
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setJugadorElegido(undefined)
                    setOpenFalse()
                }}>
                    Cancelar
                </Button>
                <Button  color="secondary" disabled={jugadorElegido?false:true} onClick={()=>{
                    agregarEscoba()
                    setOpenFalse()
                }}>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}