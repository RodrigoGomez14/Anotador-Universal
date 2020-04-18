import React from 'react'
import { DialogContent, DialogContentText ,TextField,makeStyles,Grid,FormControl,Select,MenuItem,InputLabel,List,ListItemText,ListItem,Typography} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    input:{
        width:'100%'
    },
    overflow:{
        overflow:'scroll'
    }
}))
const jugadas = [
    {
        nombre:'cartas',
        puntos:1,
    },
    {
        nombre:'oros',
        puntos:1,
    },
    {
        nombre:'setenta',
        puntos:1,
    },
    {
        nombre:'doce de oro',
        puntos:1,
    },
    {
        nombre:'siete de oro',
        puntos:2,
    },

]
export const DialogManoFinalizadaChorizo = ({jugadores,results,setResults,setDisableButton}) =>{

    const classes = useStyles()
    const obtenerTotalExtra = (puntosExtra) =>{
        let total = 0
        puntosExtra.map(puntoExtra=>{
            total += puntoExtra
        })
        return total
    }

    const checkButtonState = (arr) =>{
        let count=0
        arr.map(jugador=>{
            count += jugador.puntajes.length
        })
        console.log(count)
        if(count===5){
            setDisableButton(false)
        }
    }

    const changeResults = (nombre,nombreJugada) =>{
        let arr=results
        if(arr.length){
            arr.map((resultado,i)=>{
                let arr2 = resultado.puntajes
                arr2.map((jugadaAgregada,i)=>{
                    if(jugadaAgregada===nombreJugada){
                        arr2.splice(i,1)
                    }
                })
                arr[i].puntajes=arr2
                let userIsPresent
                arr.map(resultado=>{
                    if (resultado.nombre===nombre){
                        userIsPresent = true
                    }
                })

                if(userIsPresent){
                    if(resultado.nombre===nombre){
                        let aux = arr[i].puntajes
                        aux.push(nombreJugada)
                    }
                }
                else{
                    arr.push({
                        nombre:nombre,
                        puntajes:[nombreJugada]
                    })
                }
            })
        }
        else{
            if(nombre != 'Empate'){
                arr.push({
                    nombre:nombre,
                    puntajes:[nombreJugada]
                })
            }
        }
        checkButtonState(arr)
        setResults(arr)
    }
    return (
        <DialogContent>
            <Grid container wrap='nowrap' className={classes.overflow}>
                {jugadores.map(jugador=>(
                    <Grid item>
                        <List>
                            <ListItem>
                                <ListItemText primary={jugador.nombre}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Puntos Extra' secondary={jugador.puntosExtra.length?obtenerTotalExtra(jugador.puntosExtra):'-'}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Escobas' secondary={jugador.escobas}/>
                            </ListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
            <DialogContentText>
                Seleccionar el jugador que gano cada jugada
            </DialogContentText>
            <Grid container>
                {jugadas.map(jugada=>(
                    <Grid item xs={12}>
                        <FormControl className={classes.input}>
                        <InputLabel color='secondary' id="demo-simple-select-helper-label">{jugada.nombre}</InputLabel>
                            <Select
                                color='secondary'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={e=>{changeResults(e.target.value,jugada.nombre)}}
                            >   
                                <MenuItem value='Empate'>Empate</MenuItem>
                                {jugadores.map(jugador=>(
                                    <MenuItem value={jugador.nombre}>{jugador.nombre}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                ))}
            </Grid>
        </DialogContent>
    )
}