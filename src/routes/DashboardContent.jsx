import React, {useEffect} from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import ShopPage from '../pages/ShopPage';

const DashboardContent = () => {
    //Obtenemos el PATH
    const { path } = useRouteMatch()

    useEffect(() => {
        console.log('LLEGO',path)
    })

    return (
        <div>
             <Switch>
                <Route
                    path = {`${path}/home`}
                    component = {HomePage}
                />
                <Route
                    path = {`${path}/shop`}
                    component = {ShopPage}
                />
                <Route
                    path = {`${path}/contacts`}
                    component = {ContactsPage}
                />
                <Route
                    path = {`${path}/settings`}
                    component = {SettingsPage}
                />
            </Switch>
        </div>
    );
}

export default DashboardContent;
