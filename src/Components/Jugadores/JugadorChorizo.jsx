import React from 'react'
import {Paper,Typography,makeStyles,List,ListItem,ListItemText,Badge} from '@material-ui/core'
const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(1),
        margin:theme.spacing(1),
        width:'auto'
    },
    listItem:{
        textAlign:'center'
    },
    winner:{
        padding:theme.spacing(1),
        margin:theme.spacing(1),
        width:'auto',
        backgroundColor:theme.palette.success.main
    },
    looser:{
        padding:theme.spacing(1),
        margin:theme.spacing(1),
        width:'auto',
        backgroundColor:theme.palette.danger.main
    },
}))

export const JugadorChorizo= ({nombre,resultados,total,ganador})=>{
    const classes= useStyles()
    return(
        <Paper elevation={6} className={ganador?classes.winner:(total>=101?classes.looser:classes.root)}>
            <List>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={nombre}/>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={<Badge color='secondary' badgeContent={total} showZero max={300}/>}/>
                </ListItem>
                {resultados.map(resultado=>(
                    <ListItem className={classes.listItem}>
                        <ListItemText primary={resultado}/>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}