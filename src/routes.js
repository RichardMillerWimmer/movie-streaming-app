import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import PageNotFound from './components/PageNotFound';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/movie/id' component={MovieDetails}/>
        <Route component={PageNotFound}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
    </Switch>
)