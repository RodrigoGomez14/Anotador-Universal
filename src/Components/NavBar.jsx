import React from 'react'
import { makeStyles,AppBar,Typography,Toolbar,IconButton } from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'left'
    },
}));
export const NavBar = ({handleClose,titulo}) =>{
    const classes = useStyles()
    return(
        <AppBar position='sticky'>
            <Toolbar>
                {titulo!='Anotador Universal' &&
                    <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleClose}>
                        <ArrowBack />
                    </IconButton>
                }
                <Typography variant="h6" className={classes.title}>
                    {titulo}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}