import React, {useState} from 'react'
import {Dialog,DialogTitle, DialogContent, DialogActions,Button,Grid,DialogContentText} from '@material-ui/core'


export const DialogPartidaGuardada = ({partidaGuardada,setPartidaGuardada,setJugadores,titulo,setopenDialogAgregarJugador,goBack}) =>{
    return (
        <Dialog open={partidaGuardada}>
            <DialogTitle>
                Hay un partido pendiente
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Desea continuarlo?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Button 
                            onClick={()=>{
                                goBack()
                            }}>
                            Salir
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color='secondary'
                            onClick={()=>{
                                localStorage.setItem(titulo,null)
                                setPartidaGuardada(undefined)
                            }}>
                            Nueva Partida
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button  variant='contained' color="secondary" onClick={()=>{
                            setJugadores(partidaGuardada)
                            localStorage.setItem(titulo,null)
                            setPartidaGuardada(undefined)
                            setopenDialogAgregarJugador(false)
                        }}>
                            Continuar
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}