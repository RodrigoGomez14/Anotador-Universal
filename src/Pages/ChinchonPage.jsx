import React, {useState} from 'react'
import {Layout} from '../Pages/Layout'
import {DialogAgregarJugador} from '../Components/Dialogs/DialogAgregarJugador'
import {DialogManoFinalizada} from '../Components/Dialogs/DialogManoFinalizada'
import {DialogGanador} from '../Components/Dialogs/DialogGanador'
import {JugadorChinChon} from '../Components/Jugadores/JugadorChinChon'
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
export const ChinchonPage = (props) =>{
    const classes = useStyles()
    const [jugadores,setJugadores] = useState([])
    const [ganador, setGanador] = useState(undefined)
    const [openDialogMano,setopenDialogMano] = useState(false)

    const reiniciar=()=>{
        let arr = jugadores
        arr.map((jugador,i)=>{
            arr[i].nombre=jugador.nombre
            arr[i].total=0
            arr[i].resultados=[]
            arr[i].ganador=false
        })
        setGanador(undefined)
        setJugadores(arr)
    }

    return(
        <Layout titulo={'Chin chon'} history={props.history}>
            <DialogAgregarJugador 
                goBack={props.history.goBack} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
            />
            <DialogManoFinalizada 
                juego='chinchon' 
                open={openDialogMano} 
                setOpenFalse={()=>{setopenDialogMano(false)}} 
                jugadores={jugadores} 
                setJugadores={setJugadores}
                setGanador={setGanador}
            />
            <DialogGanador 
                ganador={ganador}
                goBack={props.history.goBack}
                reiniciar={reiniciar}
            />
            <Grid container>
                <Grid item xs={12}>
                    <Button position='static' variant='outlined' color='secondary' className={classes.button} onClick={()=>{setopenDialogMano(true)}}>
                        Finalizar Mano
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.carousel}>
                        {jugadores.length ?
                            jugadores.map(jugador=>(
                                <JugadorChinChon {...jugador}/>
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