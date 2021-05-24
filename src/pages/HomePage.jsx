import React from 'react';

//Importr clsx para trabajar con las clases
import clsx from 'clsx'
import { AppBar, Badge, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, 
    ListItemText, Paper, Toolbar, Typography } from '@material-ui/core'
    
//Makestyles -> Estilos con material UI y el tema (theme) por defecto
import { makeStyles } from '@material-ui/core/styles'

const HomePage = () => {

    /*const useStyles = makeStyles (theme => ({   
        //Paper del componente
        paper:{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            padding: theme.spacing(2)   
        },
        //Altura fija 
        fixedHeight: {
            height:240
        }
    }))

    
    //Se define la altura fija del Paper
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    //Clases para aplicar a los elementos
    const classes = useStyles()*/
    return (
        <div>
        <h1>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
       {/*  <Grid container spacing={3}>            
           <Grid item xs = {12} md={4} lg={9}>
                <Paper className={fixedHeightPaper}>        */}                          
                    {/* Crear un componente que reciba props.children */}
                 {/*    <Typography>Primera caja</Typography>
                </Paper>
            </Grid>
            
            <Grid item xs = {12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}> */}
                    {/* Crear un componente que reciba props.children */}
                {/*     <Typography>Segunda caja</Typography>
                </Paper>
            </Grid>
            <Grid item xs = {12} md={4} lg={12}>
                <Paper className={fixedHeightPaper}> */}
                    {/* Crear un componente que reciba props.children */}
                  {/*   <Typography>Tercera caja</Typography>
                </Paper>
            </Grid>
            </Grid> */}
        </div>
    );
}

export default HomePage;
