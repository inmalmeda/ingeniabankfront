import React, {useEffect} from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom'
import AccountsPage from '../../pages/AccountsPage.page';
import BalancePage from '../../pages/BalancePage.page';
import CardsPage from '../../pages/CardsPage.page';
import HomePage from '../../pages/HomePage.page';
import TransactionsPage from '../../pages/TransactionsPage.page';

const DashboardContent = () => {

    const { path } = useRouteMatch()

    return (
        <div>
             <Switch>
                <Route
                    path = {`${path}/home`}
                    component = {HomePage}
                />
                <Route
                    path = {`${path}/accounts`}
                    component = {AccountsPage}
                />
                <Route
                    path = {`${path}/cards`}
                    component = {CardsPage}
                />
                <Route
                    path = {`${path}/transactions`}
                    component = {TransactionsPage}
                />
                 <Route
                    path = {`${path}/balance`}
                    component = {BalancePage}
                />
            </Switch>
        </div>
    );
}

export default DashboardContent;
