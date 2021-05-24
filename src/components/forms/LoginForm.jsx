import { Form } from 'formik';
import React from 'react';

//Se usa MakeStyles de MAterial UI para personalizar estilos
import { makeStyles } from '@material-ui/core/styles'

import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core'

const LoginForm = ({values, submit, change, blur, errors, touched, isSubmit}) => {

    const useStyles = makeStyles(theme => ({        
        //Formulario
        form: {
            width: '100%',
            marginTop: theme.spacing(2)        
        },
        //Boton de submit
        submit:{
            margin: theme.spacing(3,0,2), //Top, Bottom, Lados        
        }      
    }))

     //Obtener las clases de estilo para aplicarlas a los componentes
     const classes = useStyles()

    return (

        <Form onSubmit = {submit} className = {classes.form} noValidate>
            <TextField
                required
                fullWidth
                autoFocus
                id='email'
                label = 'Email'
                name='email'
                margin = 'normal'   
                autoComplete = 'email'  
                variant = 'outlined'        
                value = {values.email}
                onChange = {change}
                onBlur = {blur}
            />
            <TextField
                required
                fullWidth
                autoFocus
                type = 'password'
                id='password'
                label = 'Password'
                name='password'
                margin = 'normal'   
                autoComplete = 'current-password'  
                variant = 'outlined' 
                value = {values.password}
                onChange = {change}
                onBlur = {blur}
            />
            {/* Checkbox para recordar los datos del usuario */}
            <FormControlLabel
                control = {
                    <Checkbox value = 'remember' color = 'secondary'/>                          
                }
                label = 'Recordar datos'
            />
            {/* Botón de submit */}
            <Button
                type='submit'
                fullWidth
                variant = 'contained'
                color = 'primary'
                className = {classes.submit}                    
            >
                Acceder
            </Button>
            {/* He olvidado la contraseña | registro*/}
            <Grid container>
                {/*Olvido Contraseña */}
                <Grid item xs={12} sm = {6}>
                    <Link href = '#' variant = 'body2'>
                        {'He olvidado mi contraseña'}
                    </Link>
                </Grid>
                {/* Registro */}
                <Grid item xs={12} sm = {6}>
                    <Link href = '#' variant = 'body2'>
                    {'Registrarme'}
                    </Link>
                </Grid>
            </Grid>
        </Form>     
    );
}

export default LoginForm;
