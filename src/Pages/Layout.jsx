import React, {useState}  from 'react'
import {NavBar} from '../Components/NavBar';
import {Paper,makeStyles,Grid} from '@material-ui/core'

const useStyles=makeStyles(theme=>({
    root:{
        minHeight:'100vh',
        borderRadius:'0'
    }
}))
export const Layout = ({children,history,titulo,jugadores})=>{
    const classes = useStyles()
    const [dialogGoBack,setdialogGoBack] = useState(false)

    return(
        <>
            <NavBar 
                titulo={titulo}
                handleClose={()=>{
                    localStorage.setItem(`${titulo}`,JSON.stringify(jugadores))
                    history.goBack()
                }}
            />
            <Grid container>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.root}>
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}