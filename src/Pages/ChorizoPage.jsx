import React, {useState,useEffect} from 'react'
import {Layout} from '../Pages/Layout'
import {DialogAgregarJugador} from '../Components/Dialogs/DialogAgregarJugador'
import {DialogManoFinalizada} from '../Components/Dialogs/DialogManoFinalizada'
import {DialogPuntosExtra} from '../Components/Dialogs/Chorizo/DialogPuntosExtra'
import {DialogPartidaGuardada} from '../Components/Dialogs/DialogPartidaGuardada'
import {DialogGanador} from '../Components/Dialogs/DialogGanador'
import {JugadorBasico} from '../Components/Jugadores/JugadorBasico'
import {makeStyles,Button,Grid} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    carousel:{
        display:'flex',
        flexWrap:'nowrap',
        overflowX:'scroll',
        overflowY:'hidden',
    },
    button:{
        marginTop:theme.spacing(1),
        marginBottom:theme.spacing(1),
    }
}))
export const ChorizoPage = (props) =>{
    const classes = useStyles()
    const [jugadores,setJugadores] = useState([])
    const [ganador, setGanador] = useState(undefined)
    const [partidaGuardada,setPartidaGuardada] = useState(undefined)
    const [openDialogMano,setopenDialogMano] = useState(false)
    const [openDialogPuntosExtra,setopenDialogPuntosExtra] = useState(false)
    const [openDialogAgregarJugador,setopenDialogAgregarJugador] = useState(true)

    const reiniciar=()=>{
        let arr = jugadores
        arr.map((jugador,i)=>{
            arr[i].nombre=jugador.nombre
            arr[i].total=0
            arr[i].escobas=0
            arr[i].resultados=[]
            arr[i].puntosExtra=[]
            arr[i].ganador=false
        })
        setGanador(undefined)
        setJugadores(arr)
    }
    useEffect(()=>{
        const aux = localStorage.getItem('Chorizo')
        setPartidaGuardada(JSON.parse(aux))
    },[])
    return(
        <Layout titulo={'Chorizo'} history={props.history} jugadores={jugadores}>
            <DialogPartidaGuardada
                titulo='Chorizo'
                setPartidaGuardada={setPartidaGuardada}
                partidaGuardada={partidaGuardada}
                setJugadores={setJugadores}
                goBack={props.history.goBack} 
                setopenDialogAgregarJugador={setopenDialogAgregarJugador}
            />
            <DialogAgregarJugador
                juego='chorizo'
                goBack={props.history.goBack} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
                open={openDialogAgregarJugador}
                setOpen={setopenDialogAgregarJugador}
            />
            <DialogManoFinalizada 
                juego='chorizo' 
                open={openDialogMano} 
                setOpenFalse={()=>{setopenDialogMano(false)}} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
                setGanador={setGanador}
            />
            <DialogPuntosExtra 
                open={openDialogPuntosExtra}
                setOpenFalse={()=>{setopenDialogPuntosExtra(false)}} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
            />
            <DialogGanador 
                ganador={ganador}
                goBack={props.history.goBack}
                reiniciar={reiniciar}
            />
            <Grid container justify='space-around'>
                <Grid item>
                    <Button position='static' variant='outlined' color='secondary' className={classes.button} onClick={()=>{setopenDialogPuntosExtra(true)}}>
                        Anotar Puntos Extra
                    </Button>
                </Grid>
                <Grid item>
                    <Button position='static' variant='contained' color='secondary' className={classes.button} onClick={()=>{setopenDialogMano(true)}}>
                        Finalizar Mano
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.carousel}>
                        {jugadores.length ?
                            jugadores.map(jugador=>(
                                <JugadorBasico {...jugador} juego='chorizo'/>
                            ))
                            :
                            null
                        }
                    </div>
                </Grid>
            </Grid>
        </Layout>
    )
}