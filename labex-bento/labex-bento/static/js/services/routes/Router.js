import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from '../../../src/pages/HomePage/HomePage'
import ListTripsPage from '../../../src/pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../../../src/pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../../../src/pages/LoginPage/LoginPage'
import AdminHomePage from '../../../src/pages/AdminHomePage/AdminHomePage'
import CreateTripPage from '../../../static/js/pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../../../static/js/pages/TripDetailsPage/TripDetailPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/trips/list" component={ListTripsPage} />
                <Route exact path="/trips/application" component={ApplicationFormPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/trips/list" component={AdminHomePage} />
                <Route exact path="/admin/trips/create" component={CreateTripPage} />
                <Route exact path="/admin/trips/:id" component={TripDetailsPage} />
                <Route>
                    <div>Erro 404 - Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router