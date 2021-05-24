import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'

//Necesitamos el useHistory para navegar entre rutas
import { useHistory } from 'react-router-dom'

//Se usa MakeStyles de MAterial UI para personalizar estilos
import { makeStyles } from '@material-ui/core/styles'

//Componentes de Material UI

//Iconos de Material UI

//Componentes propios
import CopyRight from '../components/CopyRight'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import LoginForm from '../components/forms/LoginForm'


//Se establecen los estilos personalizados para los componentes de Material UI a través del tema
const useStyles = makeStyles(theme => ({
    //Contenedor del formulario de Login
    paper: {
        marginTop: theme.spacing(8), //Pone espacio de 8 en el marginTop
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }, 
    //Formulario
    form: {
        width: '100%',
        marginTop: theme.spacing(2)        
    },
    //Boton de submit
    submit:{
        margin: theme.spacing(3,0,2), //Top, Bottom, Lados        
    },
    //Icono de Login
    avatar:{
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    }
}))

const Login = () => {

    //Obtener las clases de estilo para aplicarlas a los componentes
    const classes = useStyles()
    
    //Obtener el History para poder navegar entre rutas
    let history = useHistory()

    //Metodo de submit del formulario (iria en el submit de Formik)
    const submit = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/dashboard',
            state:{
                token : '123456789'
            }
        })
    }

    return (
        <Container component = 'main' maxWidth='xs'>
            <CssBaseline/>
            <div className = {classes.paper}>
                <Avatar className = {classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography component = 'h1'>
                    Acceso
                </Typography>
                {/* FIXME: Formulario Login con Formik */}

                <Formik
                    initialValues={
                        {
                            email: '',
                            password: ''
                        }
                    }

                    onSubmit = {
                        (values, { setSubmitting }) =>{
                            //Esto se ejecuta al realizar el submit
                            //Se simula petición http con el timeout
                            setTimeout(()=>{                                 
                                setSubmitting(false) //Al hacer el submit se hace a true 
                                history.push({
                                    pathname: '/dashboard',
                                    state:{
                                        token : '123456789'
                                    }
                                })                            
                            }, 500)
                        }
                    }
                
                    //********* Uso de YUP para validación de campos********/

                    validationSchema={
                        Yup.object().shape(
                            {
                                email: Yup.string()
                                        .email('El email no es válido')
                                        .required('El email es obligatorio'),
                                password: Yup.string()
                                        .required('La contraseña es obligatoria')
                                    // .min(8, 'La contraseña debería tener al menos 8 carácteres')
                                        .matches(/(?=.*[0-9])/, 'La contraseña debe tener al menos un número')
                            }
                        )
                    }
                >

                    {/* Se obtienen props de Formik y se le pasan al formulario */}
                    {
                        props =>{
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting, //Si se esta enviando o no
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = props

                            //* Se hace return del formulario que se va a implementar

                            return (                        
                                <LoginForm
                                    values = {values} 
                                    submit = {handleSubmit} 
                                    change = {handleChange}
                                    blur = {handleBlur}
                                    errors = {errors}
                                    touched = {touched}
                                    isSubmit = {isSubmitting}
                                />
                            )
                        }
                    }
                </Formik>




              
            </div>
            {/* Se añade el Copy  */}
            <Box mt={8}>
                <CopyRight/>
            </Box>
        </Container>
    )
}
export default Login
