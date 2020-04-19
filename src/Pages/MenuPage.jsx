import React from 'react'
import {Layout} from '../Pages/Layout'
import {Button, Paper, makeStyles,Grid,Divider} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root:{
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom:theme.spacing(2)
    },
    divider:{
        width:'80%',
        borderRadius:'25px'
    }
}))

export const MenuPage = (props) =>{
    const classes = useStyles()
    return(
        <Layout titulo={'Anotador Universal'}>
            <Grid container justify='center'>
                <Grid item xs={10}>
                    <Paper elevation={6}className={classes.root}>
                        <Grid container xs={12} direction='column' alignItems='center' justify='center'>
                            <Grid item>
                                <Button 
                                    variant='contained'
                                    color='secondary'
                                    onClick={()=>{
                                        props.history.push('Truco')
                                    }}
                                >
                                    Truco
                                </Button>
                            </Grid>
                            <hr className={classes.divider}/>
                            <Grid item>
                                <Button 
                                    variant='contained'
                                    color='secondary'
                                    onClick={()=>{
                                        props.history.push('Chinchon')
                                    }}
                                >
                                    Chin Chon
                                </Button>
                            </Grid>
                            <hr className={classes.divider}/>
                            <Grid item>
                                <Button 
                                    variant='contained'
                                    color='secondary'
                                    onClick={()=>{
                                        props.history.push('Chorizo')
                                    }}
                                >
                                    Chorizo
                                </Button>
                            </Grid>
                            <hr className={classes.divider}/>
                            <Grid item>
                                <Button 
                                    variant='contained'
                                    color='secondary'
                                    onClick={()=>{
                                        props.history.push('Escoba')
                                    }}
                                >
                                    Escoba
                                </Button>
                            </Grid>
                            <hr className={classes.divider}/>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    )
}