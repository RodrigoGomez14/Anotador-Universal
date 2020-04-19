import React, {useState} from 'react'
import {Dialog,DialogTitle, DialogActions,Button} from '@material-ui/core'
import {DialogManoFinalizadaChinchon} from './Chinchon/DialogManoFinalizadaChinchon'
import {DialogManoFinalizadaChorizo} from './Chorizo/DialogManoFinalizadaChorizo'
import {DialogManoFinalizadaEscoba} from './Escoba/DialogManoFinalizadaEscoba'
export const DialogManoFinalizada = ({open,setOpenFalse,juego,jugadores,setJugadores,setGanador}) =>{

    const [results,setResults]=useState([])
    const [disableButton,setDisableButton]=useState(true)

    const renderSwitch= () =>{
        switch(juego){
            case 'chinchon':
                return(<DialogManoFinalizadaChinchon jugadores={jugadores} results={results} setResults={setResults} setDisableButton={disabled=>{setDisableButton(disabled)}}/>)
            case 'chorizo':
                return(<DialogManoFinalizadaChorizo jugadores={jugadores} results={results} setResults={setResults} setDisableButton={disabled=>{setDisableButton(disabled)}}/>)
            case 'escoba':
                return(<DialogManoFinalizadaEscoba jugadores={jugadores} results={results} setResults={setResults} setDisableButton={disabled=>{setDisableButton(disabled)}}/>)
            default:
                return
        }
    }
    const finalizarMano=()=>{
        switch(juego){
            case 'chinchon':
                finalizarChinChon(results)
                setOpenFalse()
                break;
            case 'chorizo':
                finalizarChorizo(results)
                setOpenFalse()
                break;
            case 'escoba':
                finalizarEscoba(results)
                setOpenFalse()
                break;
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
    const finalizarChorizo = resultados =>{
        let aux = jugadores
        let resultadosFinal = []
        resultados.map(resultado=>{
            if(resultado.nombre != 'Empate'){
                let count = 0
                resultado.puntajes.map(puntaje=>{
                    if(puntaje==='siete de oro'){
                        count += 2
                    }
                    else{
                        count += 1
                    }
                })
                resultadosFinal.push({
                    nombre:resultado.nombre,
                    puntos:count
                })
            }
        })
        console.log(resultadosFinal)
        aux.map((jugador,i)=>{
            let count = 0
            count += jugador.escobas
            jugador.puntosExtra.map(puntoExtra=>{
                count += puntoExtra
            })
            resultadosFinal.map(resultado=>{
                if(resultado.nombre===jugador.nombre){
                    count += resultado.puntos
                }
            })
            let puntajes = aux[i].resultados
            puntajes.push(count)
            let total = jugador.total += count
            if(total>=50){
                aux[i].ganador = true
                setGanador(jugador.nombre)
            }
            aux[i].resultados = puntajes
            aux[i].puntosExtra = []
            aux[i].escobas = 0
            aux[i].total = total
        })
        setResults([])
        setDisableButton(true)
        setJugadores(aux)

    }
    const finalizarEscoba = resultados =>{
        let aux = jugadores
        let resultadosFinal = []
        resultados.map(resultado=>{
            if(resultado.nombre != 'Empate'){
                let count = 0
                resultado.puntajes.map(puntaje=>{
                        count += 1
                })
                resultadosFinal.push({
                    nombre:resultado.nombre,
                    puntos:count
                })
            }
        })
        aux.map((jugador,i)=>{
            let count = 0
            count += jugador.escobas
            resultadosFinal.map(resultado=>{
                if(resultado.nombre===jugador.nombre){
                    count += resultado.puntos
                }
            })
            let puntajes = aux[i].resultados
            puntajes.push(count)
            let total = jugador.total += count
            if(total>=15){
                aux[i].ganador = true
                setGanador(jugador.nombre)
            }
            aux[i].resultados = puntajes
            aux[i].escobas = 0
            aux[i].total = total
        })
        setResults([])
        setDisableButton(true)
        setJugadores(aux)

    }
    return (
        <Dialog open={open}>
            <DialogTitle>
                Mano Finalizada
            </DialogTitle>
            {renderSwitch()}
            <DialogActions>
                <Button onClick={()=>{
                    setOpenFalse()
                    setResults([])
                }}>
                    Cancelar
                </Button>
                <Button onClick={finalizarMano} color="secondary" disabled={disableButton}>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}