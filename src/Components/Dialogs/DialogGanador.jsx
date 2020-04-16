import React from 'react'
import { Dialog, DialogTitle , DialogActions,Button} from '@material-ui/core'

export const DialogGanador = ({ganador,goBack,reiniciar}) =>{
    return (
        <Dialog open={ganador}>
            <DialogTitle>
                {ganador} ha ganado la partida!
            </DialogTitle>
            <DialogActions>       
                <Button onClick={()=>{goBack()}}> 
                    Salir
                </Button>
                <Button onClick={()=>{reiniciar()}}> 
                    Reiniciar Partido
                </Button>
            </DialogActions>       
        </Dialog>
    )
}