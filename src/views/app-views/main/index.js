import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => (
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
            <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
            <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
            <Route path={`${match.url}/constructor`} component={lazy(() => import(`./constructor`))} />
        </Switch>
    </Suspense>
);

export default Clients;