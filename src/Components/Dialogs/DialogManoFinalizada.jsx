import React, {useState} from 'react'
import {Dialog,DialogTitle, DialogActions,Button} from '@material-ui/core'
import {DialogManoFinalizadaChinchon} from './DialogManoFinalizadaChinchon'
export const DialogManoFinalizada = ({open,setOpenFalse,juego,jugadores,setJugadores,setGanador}) =>{

    const [results,setResults]=useState([])
    const [disableButton,setDisableButton]=useState(true)

    const renderSwitch= () =>{
        switch(juego){
            case 'chinchon':
                return(<DialogManoFinalizadaChinchon jugadores={jugadores} results={results} setResults={setResults} setDisableButton={disabled=>{setDisableButton(disabled)}}/>)
            default:
                return
        }
    }
    const finalizarMano=()=>{
        switch(juego){
            case 'chinchon':
                finalizarChinChon(results)
                setOpenFalse()
            default:
                return
        }
    }
    const finalizarChinChon = resultados =>{
        let arr = jugadores
        let eliminados = []

        const agregarResultado =(resultado)=>{
            arr.map((jugador,i)=>{
                if(resultado.nombre === jugador.nombre){
                    arr[i].resultados.push(resultado.puntaje)
                    let total = 0
                    arr[i].resultados.map(resultado=>{
                        total+=resultado
                    })
                    arr[i].total=total
                }
            })
            setResults([])
        }
        const chequearGanador = () =>{
            arr.map(eliminado=>{
                if(eliminado.total>=101){
                    eliminados.push(eliminado.nombre)
                }
            })
            if(arr.length-eliminados.length === 1){
                arr.map((jugador,i)=>{
                    let isPresent = false
                    eliminados.map(eliminado=>{
                        if(jugador.nombre === eliminado && jugador.total>100){
                            isPresent=true
                        }
                    })
                    if(!isPresent){
                       arr[i].ganador=true
                       setGanador(jugador.nombre)
                    }
                })
            }
        }
        resultados.map(resultado=>{
            agregarResultado(resultado)
        })

        chequearGanador()
        setJugadores(arr)
    }
    return (
        <Dialog open={open}>
            <DialogTitle>
                Mano Finalizada
            </DialogTitle>
            {renderSwitch()}
            <DialogActions>
                <Button onClick={setOpenFalse}>
                    Cancelar
                </Button>
                <Button onClick={finalizarMano} color="secondary" disabled={disableButton}>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}