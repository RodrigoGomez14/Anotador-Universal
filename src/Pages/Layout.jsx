import React, {useState}  from 'react'
import {NavBar} from '../Components/NavBar';
import {Paper,makeStyles,Grid} from '@material-ui/core'
import {DialogGoBack} from '../Components/Dialogs/DialogGoBack'

const useStyles=makeStyles(theme=>({
    root:{
        minHeight:'100vh',
        borderRadius:'0'
    }
}))
export const Layout = ({children,history,titulo})=>{
    const classes = useStyles()
    const [dialogGoBack,setdialogGoBack] = useState(false)

    return(
        <>
            <NavBar titulo={titulo} handleClose={()=>{setdialogGoBack(true)}}/>
            <Grid container>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.root}>
                        {children}
                    </Paper>
                </Grid>
            </Grid>
            <DialogGoBack goBack={()=>{history.goBack()}} dialogOpen={dialogGoBack} handleClose={()=>{setdialogGoBack(false)}}/>
        </>
    )
}