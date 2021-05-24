import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';

//Importr clsx para trabajar con las clases
import clsx from 'clsx'

//Makestyles -> Estilos con material UI y el tema (theme) por defecto
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useHistory } from 'react-router-dom'
import { AppBar, Badge, Container, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@material-ui/core'

//Componentes de Material UI

//Iconos de Material UI
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuListItems from '../../common-components/dashboard/MenuListItem.component';

import {MenuList} from '../../models/dashboard/MenuList.model'
import DashboardContent from '../../core/routes/DashboardContent.routes';


//Definicion de estilos
const drawerWidth = 240

const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex'
    },
    //Toolbar del menu lateral
    toolbar: {
        paddingRight: 24
    },
    //Iconos del Toolbar
    toolbarIcon: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar //Se añaden todos los estilos de toolbar por defecto
    },
    //AppBar -> Barra de navegación para desaparecer de la pantalla
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })  
    },
    //AppBar -> Barra de navegación para aparecere en pantalla
    appBarShift: {
        marginLeft: drawerWidth, //Ancho del Drawer
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })  
    },
    //Separación entre elementos del AppBar
    appBarSpacer: theme.mixins.toolbar,
    //Botones del menú (Drawer)
    menuButton: {
        marginRight: 35
    },
    //Botones del menú (Drawer) cuando el menú esté plegado
    menuButtonHidden:{
        display: 'none'
    },
    //Titulo de las opciones del menú
    title:{
        flexGrow:1,
    },
    //Menu (Drawer) abierto
    drawerPaper:{
        position: 'relative',
        width: drawerWidth,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })  
    },
    drawerPaperClosed: {
        overflowX : 'hidden',
        width: theme.spacing(7),
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('sm')]:{
            width: theme.spacing(9),
        }
    },
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
    },
    //Contenidos del DashBoard
    content:{
        flexGrow:1,
        overflow : 'auto',
        height: '100vh'
    },
    //Container del Dashboard
    container:{
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(10)
    }
}))


const menuList : MenuList[] = [ 
    {
        text: 'Inicio',
        path: '/home',
        icon: 'HOME'
    },
    {
        text: 'Cuentas',
        path: '/accounts',
        icon: 'ACCOUNTS'
    },
    {
        text: 'Tarjetas',
        path: '/cards',
        icon: 'CARDS'
    },
    {
        text: 'Movimientos',
        path: '/transactions',
        icon: 'TRANSACTIONS'
    },
    {
        text: 'Balance',
        path: '/balance',
        icon: 'BALANCE'
    }
] 

const DashBoard : React.FC = () => {

    //Clases para aplicar a los elementos
    const classes = useStyles()

    //History para manejar las rutas y navegar
    let history = useHistory()

    //Estado que controle si se muestra el menú o no
    const [open, setOpen] = useState(true)

    //Se define la altura fija del Paper
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    //Metodo par controlar la Apertura del Drawer
    const handleDrawerOpen = () => {
        setOpen(true)
    }
     //Metodo par controlar el Cierre del Drawer
     const handleDrawerClose = () => {
        setOpen(false)
    }

    //Metodo para realizar un Logout y navegar a Login
    const logout = () => {
        history.push('/login')
    }
    
    return (
        <div className={classes.root}>         

            <CssBaseline/>
            {/* Barra de navegación superior */}
            <AppBar 
                className = {clsx(classes.appBar, open && classes.appBarShift)}
                position= 'absolute'     
            >
                <Toolbar className = { classes.toolbar }>
                    {/* Icono para abrir el drawer */}
                    <IconButton
                        //clsx (clase q se ejecuta si se cumple el open, y sino se usa la otra)
                        className = {clsx (classes.menuButton, open && classes.menuButtonHidden)}
                        edge = 'start'
                        color = 'inherit'
                        aria-label='open drawer'
                        onClick = {handleDrawerOpen}
                    >
                        {/* Icono de Hamburger para plegar y desplegar */}
                        <MenuIcon/>
                    </IconButton>
                    {/* Nombre de la aplicacion / empresa */}
                    <Typography 
                        component='h1' 
                        variant='h6' 
                        color='inherit' 
                        className={classes.title}
                        noWrap 
                    >
                        Imagina ReactJS Dashboard
                    </Typography>
                    {/* Sección de Notificaciones para el usuario */}
                    <IconButton color = 'inherit'>
                        <Badge color = 'secondary' badgeContent={10}>
                            <NotificationIcon/>
                        </Badge>
                    </IconButton>
                    {/* Boton para Logout */}
                    <IconButton color = 'inherit' onClick={logout}>                 
                        <ExitToAppIcon/>                   
                    </IconButton>                    
                </Toolbar>
            </AppBar>
            {/* Drawer (Contenido izquierda(nav))*/}
            <Drawer
                open = { open }
                classes = {{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClosed)
                }}      
            >
                <div className = {classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                {/* Divider para separar los elementos del menú */}
                <Divider/>   
                {/* Lista de elementos de navegación del menú Principal*/}        
                <List>
                    <MenuListItems list={menuList} />         
                </List>                    
            </Drawer>  

            {/* Contenido del Dashboard */}
            <main className = {classes.content}>
                {/* Se separa el contenido del AppBar para poder verlo */}
                <div className = { classes.appBarSpacer}>
                    {/* Se crea el Container */}
                    <Container className={classes.container} maxWidth = 'lg'>
                        {/* Aqui se ponen los componentes o Switch de rutas */}                                  
                        <Switch>
                            <Route path = '/dashboard' component={DashboardContent}/> 
                        </Switch>                                                               
                    </Container>
                </div>
            </main>
        </div>
    )
}

export default DashBoard