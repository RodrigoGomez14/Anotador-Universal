import React from 'react'
import { DialogContent, DialogContentText ,TextField,makeStyles,Grid} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    input:{
        width:'100%'
    }
}))
export const DialogManoFinalizadaChinchon = ({jugadores,results,setResults,setDisableButton}) =>{
    const classes = useStyles()
    const handleChange = (event,nombre) =>{
        let arr=results
        if(arr.length){
            arr.map((resultado,i)=>{
                if(resultado.nombre===nombre){
                    if(event.target.value){
                        arr[i].puntaje=parseInt(event.target.value)
                    }
                    else{
                        arr.splice(i)
                        setResults(arr)
                        return
                    }
                }
                let userIsPresent
                arr.map(resultado=>{
                    if (resultado.nombre===nombre){
                        userIsPresent = true
                    }
                })
                if(!userIsPresent){
                    arr.push({
                        nombre:nombre,
                        puntaje:parseInt(event.target.value)
                    })
                }
            })
        }
        else{
            arr.push({
                nombre:nombre,
                puntaje:parseInt(event.target.value)
            })
        }
        let jugadoresEliminados = 0
        jugadores.map(jugador=>{
            if(jugador.total>=101){
                jugadoresEliminados++
            }
        })
        if(arr.length===jugadores.length-jugadoresEliminados){
            setDisableButton(false)
        }
        else{
            setDisableButton(true)
        }
        setResults(arr)
    }

    return (
        <DialogContent>
            <DialogContentText>
                Ingresar los puntos de cada jugador
            </DialogContentText>
            <Grid container>
                {jugadores.map(jugador=>(
                    jugador.total<101 &&
                    <Grid item xs={12}>
                        <TextField color='secondary' type='number' className={classes.input} label={jugador.nombre} onChange={e=>{
                            handleChange(e,jugador.nombre)
                        }}/>
                    </Grid>
                ))}
            </Grid>
        </DialogContent>
    )
}