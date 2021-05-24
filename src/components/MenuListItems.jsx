import React from 'react';

import { useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

//Componentes de Material UI
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

//Iconos de material UI
import HomeIcon from '@material-ui/icons/Home'
import CartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import SettingsIcon from '@material-ui/icons/Settings'

const getIcon = (icon) => {
    switch(icon) {
        case 'HOME':
            return (<HomeIcon />)
        case 'CART':
            return (<CartIcon />)
        case 'PEOPLE':
            return (<PeopleIcon />)
        case 'SETTINGS':
            return (<SettingsIcon />)
        default:
            return (<HomeIcon />)
    }
}


const MenuListItems = ({list}) => {

    const history = useHistory()
        //Obtenemos el PATH
    const { path } = useRouteMatch()
   
    const navegar = (ruta) =>{     
        console.log("navegar ruta" , ruta)  
        history.push(`${path}${ruta}`)
    }

    return (
        <List>
            {list.map(({text, path,icon}, index) => 
                (                    
                    <ListItem key={index} button onClick={ () => navegar(path)}>                        

                        <ListItemIcon>
                            {/* Llamamos al método getIcon que nos va a devover el 
                            componente Icono que toque */}
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            )}
        </List>
    );
}

export default MenuListItems;







/*



const MenuITems = ({item}) => {

    const history = useHistory()
        //Obtenemos el PATH
    const { path } = useRouteMatch()
   
    const navegar = (ruta) =>{     
        console.log("navegar ruta" , ruta)  
        history.push(`${path}${ruta}`)
    }

    return (
        <ListItem button onClick = { () => navegar (item.ruta)}>
            <ListItemIcon>
                <item.icon/>
            </ListItemIcon>
            <ListItemText primary = {item.texto} />
        </ListItem> 
    );
}

export default MenuITems;


export const MainList = () => {

    const list = [
        {
            icon: HomeIcon,
            ruta: '/home',
            texto: 'Home'
        },
        {
            icon: PeopleIcon,
            ruta: '/contacts',
            texto: 'Contacts'
        },
        {
            icon: CartIcon,
            ruta: '/shop',
            texto: 'Shop'
        }  
    ]

    return (
        <div>
            {list.map((item, index) => (
                <div key = {index}>
                    <MenuITems item = {item}/>
                </div>
            ))}
        </div>
    );
}

export const SecondaryList = () => {

    const list = [
        {
            icon: SettingsIcon,
            ruta: '/settings',
            texto: 'Settings'
        }     
    ]
    return (
        <div>
        {list.map((item, index) => (
            <div key = {index}>
                <MenuITems item = {item}/>
            </div>
        ))}
    </div>
    )
} 
*/


