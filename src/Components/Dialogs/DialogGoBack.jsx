import React from 'react'
import {Dialog, DialogTitle,DialogContent,DialogContentText,DialogActions,Button,makeStyles} from '@material-ui/core'

const useStyles= makeStyles(theme=>({
    successButton:{
        color:theme.palette.success.main
    },
    dangerButton:{
        color:theme.palette.danger.main
    }
}))

export const DialogGoBack = ({goBack,dialogOpen,handleClose}) =>{
    const classes = useStyles()
    return(
        <Dialog open={dialogOpen}>
            <DialogTitle>
                Desea Salir del juego?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Si continua se perderan los resultados
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className={classes.dangerButton}>
                    Cancelar
                </Button>
                <Button onClick={()=>{goBack()}} className={classes.successButton}>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}