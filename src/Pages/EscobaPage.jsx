import React, {useState,useEffect} from 'react'
import {Layout} from '../Pages/Layout'
import {DialogAgregarJugador} from '../Components/Dialogs/DialogAgregarJugador'
import {DialogManoFinalizada} from '../Components/Dialogs/DialogManoFinalizada'
import {DialogAgregarEscoba} from '../Components/Dialogs/Escoba/DialogAgregarEscoba'
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
export const EscobaPage = (props) =>{
    const classes = useStyles()
    const [jugadores,setJugadores] = useState([])
    const [ganador, setGanador] = useState(undefined)
    const [partidaGuardada,setPartidaGuardada] = useState(undefined)
    const [openDialogMano,setopenDialogMano] = useState(false)
    const [openDialogAgregarEscoba,setopenDialogAgregarEscoba] = useState(false)
    const [openDialogAgregarJugador,setopenDialogAgregarJugador] = useState(true)

    const reiniciar=()=>{
        let arr = jugadores
        arr.map((jugador,i)=>{
            arr[i].nombre=jugador.nombre
            arr[i].total=0
            arr[i].escobas=0
            arr[i].resultados=[]
            arr[i].ganador=false
        })
        setGanador(undefined)
        setJugadores(arr)
    }
    useEffect(()=>{
        const aux = localStorage.getItem('Escoba')
        setPartidaGuardada(JSON.parse(aux))
    },[])
    return(
        <Layout titulo={'Escoba'} history={props.history} jugadores={jugadores}>
            <DialogPartidaGuardada
                titulo='Escoba'
                setPartidaGuardada={setPartidaGuardada}
                partidaGuardada={partidaGuardada}
                setJugadores={setJugadores}
                goBack={props.history.goBack} 
                setopenDialogAgregarJugador={setopenDialogAgregarJugador}
            />
            <DialogAgregarJugador
                juego='escoba'
                goBack={props.history.goBack} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
                open={openDialogAgregarJugador}
                setOpen={setopenDialogAgregarJugador}
            />
            <DialogManoFinalizada 
                juego='escoba' 
                open={openDialogMano} 
                setOpenFalse={()=>{setopenDialogMano(false)}} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
                setGanador={setGanador}
            />
            <DialogAgregarEscoba 
                open={openDialogAgregarEscoba}
                setOpenFalse={()=>{setopenDialogAgregarEscoba(false)}} 
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
                    <Button position='static' variant='outlined' color='secondary' className={classes.button} onClick={()=>{setopenDialogAgregarEscoba(true)}}>
                        Anotar Escoba
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
                                <JugadorBasico {...jugador} juego='escoba'/>
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